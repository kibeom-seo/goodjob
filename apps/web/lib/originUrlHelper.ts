/**
 * 원문 공고 URL 정밀 매핑 및 신뢰성 보장 헬퍼
 * - 더미/가짜 일련번호(rec_idx=1000xxx) 방지
 * - 테크 기업 공식 채용 사이트 다이렉트 딥링크 연결
 * - 일반 기업의 경우 사람인/잡코리아 실시간 정확 매칭 검색 딥링크 연결
 */

export const OFFICIAL_CAREER_PORTALS: Record<string, string> = {
  '토스': 'https://toss.im/career/jobs',
  '비바리퍼블리카': 'https://toss.im/career/jobs',
  '당근': 'https://about.daangn.com/jobs/',
  '당근마켓': 'https://about.daangn.com/jobs/',
  '우아한형제들': 'https://career.woowahan.com/',
  '배달의민족': 'https://career.woowahan.com/',
  '쿠팡': 'https://www.coupang.jobs/kr/',
  '네이버': 'https://recruit.navercorp.com/',
  '카카오': 'https://careers.kakao.com/',
  '라인': 'https://careers.linecorp.com/ko/jobs',
  '라인플러스': 'https://careers.linecorp.com/ko/jobs',
  '무신사': 'https://musinsa.recruiter.co.kr/',
  '야놀자': 'https://careers.yanolja.co/',
  '직방': 'https://zigbang.recruiter.co.kr/',
  '버킷플레이스': 'https://bucketplace.career.greetinghr.com/',
  '오늘의집': 'https://bucketplace.career.greetinghr.com/',
  '두나무': 'https://dunamu.recruiter.co.kr/',
  '업비트': 'https://dunamu.recruiter.co.kr/',
  '쏘카': 'https://socar.recruiter.co.kr/',
  '크래프톤': 'https://krafton.recruiter.co.kr/',
  '센드버드': 'https://sendbird.com/careers',
  '몰로코': 'https://www.moloco.com/ko/careers',
  '뱅크샐러드': 'https://banksalad.career.greetinghr.com/',
  '원티드랩': 'https://wantedlab.recruiter.co.kr/',
  '원티드': 'https://wantedlab.recruiter.co.kr/',
  '컬리': 'https://kurly.recruiter.co.kr/',
  '마켓컬리': 'https://kurly.recruiter.co.kr/',
  '리디': 'https://ridi.recruiter.co.kr/',
  '하이퍼커넥트': 'https://hyperconnect.career.greetinghr.com/',
  '업스테이지': 'https://upstage.ai/careers',
  '뤼튼': 'https://wrtn.io/careers',
  '뤼튼테크놀로지스': 'https://wrtn.io/careers',
  '루닛': 'https://lunit.recruiter.co.kr/',
  '삼성전자': 'https://www.samsungcareers.com/',
  '현대자동차': 'https://talent.hyundai.com/',
  'SK텔레콤': 'https://careers.sktelecom.com/',
  'LG CNS': 'https://careers.lg.com/'
};

export function isDummyOrBrokenUrl(url?: string | null): boolean {
  if (!url || url.trim() === '' || url === '#' || url === 'undefined' || url === 'null') {
    return true;
  }
  if (
    url.includes('rec_idx=1000') ||
    url.includes('GI_Read/1000') ||
    url.includes('/jobs/view/1000') ||
    url.includes('goodjob.kr')
  ) {
    return true;
  }
  return false;
}

export function resolveOriginUrl(job: {
  companyName?: string;
  title?: string;
  originUrl?: string;
  sourcePlatform?: string;
}): string {
  if (job.originUrl && !isDummyOrBrokenUrl(job.originUrl)) {
    return job.originUrl;
  }

  const rawCompany = job.companyName || '';
  const rawTitle = job.title || '';

  for (const [key, portalUrl] of Object.entries(OFFICIAL_CAREER_PORTALS)) {
    if (rawCompany.includes(key)) {
      return portalUrl;
    }
  }

  const cleanCompany = rawCompany.replace(/\(.*?\)/g, '').trim();
  const cleanTitle = rawTitle.replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim();
  const query = `${cleanCompany} ${cleanTitle}`.trim() || cleanCompany || 'IT 개발자 채용';

  if (job.sourcePlatform === 'jobkorea') {
    return `https://www.jobkorea.co.kr/Search/?stext=${encodeURIComponent(query)}`;
  }

  return `https://www.saramin.co.kr/zf_user/search/recruit?searchword=${encodeURIComponent(query)}`;
}
