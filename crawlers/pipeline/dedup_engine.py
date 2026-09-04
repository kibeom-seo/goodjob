import re
import hashlib
from typing import List, Tuple, Set

class DedupEngine:
    """
    다중 플랫폼(잡코리아, 사람인, 리멤버, 캐치) 공고의
    1) 기업명 정규화 (법인격 및 사명 별칭 매핑)
    2) 직무명 불용어(채용, 모집, 신규 등) 제거 및 핵심 키워드 추출
    3) SimHash + 토큰 자카드(Jaccard) 하이브리드 매칭
    을 수행하는 고정밀 중복 판별 엔진.
    """
    def __init__(self):
        # 법인격 제거 정규식
        self.corp_regex = re.compile(r"\(주\)|주식회사|\(유\)|\(사\)|㈜|\(합\)", re.IGNORECASE)
        # 채용공고 타이틀 공통 불용어 (노이즈 제거)
        self.stopwords = {
            "채용", "모집", "신규", "담당자", "경력", "신입", "정규직", 
            "계약직", "급구", "상시", "인재", "대규모", "공채", "부문"
        }
        # 사명 별칭 사전
        self.alias_map = {
            "우아한형제들": "배달의민족",
            "비바리퍼블리카": "토스",
            "당근마켓": "당근",
        }

    def normalize_company(self, raw_name: str) -> str:
        """기업명 정규화: 법인격, 특수문자 제거 후 표준화 사명 반환"""
        cleaned = self.corp_regex.sub("", raw_name)
        cleaned = re.sub(r"[\s\-_.,()\[\]]", "", cleaned).strip().lower()
        return self.alias_map.get(cleaned, cleaned)

    def extract_keywords(self, title: str) -> Set[str]:
        """직무 타이틀에서 노이즈 특수문자 및 채용 불용어를 제거한 순수 키워드 집합 추출"""
        clean_text = re.sub(r"[^\w\s]", " ", title).lower()
        tokens = clean_text.split()
        keywords = {t for t in tokens if t not in self.stopwords and len(t) > 1}
        return keywords

    def jaccard_similarity(self, set1: Set[str], set2: Set[str]) -> float:
        """키워드 집합 간의 자카드 유사도 (Intersection over Union)"""
        if not set1 or not set2:
            return 0.0
        intersection = len(set1.intersection(set2))
        union = len(set1.union(set2))
        return intersection / union if union > 0 else 0.0

    def compute_simhash(self, keywords: Set[str]) -> int:
        """핵심 키워드 기반 64-bit SimHash 계산"""
        if not keywords:
            return 0
        v = [0] * 64
        for word in keywords:
            h = int(hashlib.md5(word.encode("utf-8")).hexdigest()[:16], 16)
            for i in range(64):
                bit = (h >> i) & 1
                v[i] += 1 if bit == 1 else -1
        fingerprint = 0
        for i in range(64):
            if v[i] > 0:
                fingerprint |= (1 << i)
        return fingerprint

    def hamming_similarity(self, h1: int, h2: int) -> float:
        x = (h1 ^ h2) & 0xFFFFFFFFFFFFFFFF
        distance = 0
        while x:
            distance += 1
            x &= x - 1
        return 1.0 - (distance / 64.0)

    def is_duplicate(self, comp1: str, title1: str, comp2: str, title2: str, threshold: float = 0.75) -> Tuple[bool, float]:
        """
        두 공고가 동일 공고인지 하이브리드로 판별:
        1) 정규화된 사명이 완전히 동일해야 함
        2) 자카드 키워드 유사도(70%) + SimHash 해밍 유사도(30%) 결합 점수가 임계값(75%) 이상인지 평가
        """
        norm_comp1 = self.normalize_company(comp1)
        norm_comp2 = self.normalize_company(comp2)

        if norm_comp1 != norm_comp2:
            return False, 0.0

        kw1 = self.extract_keywords(title1)
        kw2 = self.extract_keywords(title2)

        jaccard_score = self.jaccard_similarity(kw1, kw2)
        simhash_score = self.hamming_similarity(self.compute_simhash(kw1), self.compute_simhash(kw2))

        # 하이브리드 점수 가중치 (핵심 키워드 일치도 70% + 전체 문맥 SimHash 30%)
        combined_score = (jaccard_score * 0.7) + (simhash_score * 0.3)
        is_dup = combined_score >= threshold

        return is_dup, combined_score

if __name__ == "__main__":
    engine = DedupEngine()

    # 테스트 케이스 1: 동일 공고 (잡코리아 수식어 vs 사람인 수식어)
    job1_comp = "(주)쿠팡"
    job1_title = "백엔드 개발자 (Python/Django) 채용 [신규]"

    job2_comp = "쿠팡 주식회사"
    job2_title = "쿠팡 백엔드 개발자 - Python/Django 담당자 모집"

    is_dup, score = engine.is_duplicate(job1_comp, job1_title, job2_comp, job2_title)
    print(f"사명 정규화: '{engine.normalize_company(job1_comp)}' == '{engine.normalize_company(job2_comp)}'")
    print(f"동일 공고 판별 결과: {is_dup} (결합 유사도: {score * 100:.1f}%)")

    # 테스트 케이스 2: 서로 다른 직무
    job3_title = "프론트엔드 개발자 (React/Next.js)"
    is_dup2, score2 = engine.is_duplicate(job1_comp, job1_title, job2_comp, job3_title)
    print(f"다른 직무 판별 결과: {is_dup2} (결합 유사도: {score2 * 100:.1f}%)")
