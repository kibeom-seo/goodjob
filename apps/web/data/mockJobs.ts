import { JobPosting } from '../types/job';

// 굿잡(GoodJob) 실시간 취준생 맞춤 마감일정 & 기술태그 동기화 데이터
export const MOCK_JOBS: JobPosting[] = [
  {
    "id": "real-job-1",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "GS건설㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929369?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 8,
    "viewCount": 180,
    "geminiSummary": {
      "mission": "'GS건설㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-0",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-2",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜피알앤디테크베이",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49895078?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 10,
    "viewCount": 195,
    "geminiSummary": {
      "mission": "'㈜피알앤디테크베이' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-1",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-3",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "오아시스마켓",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929796?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 12,
    "viewCount": 210,
    "geminiSummary": {
      "mission": "'오아시스마켓' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-2",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-4",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜하미글로벌",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49884526?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 14,
    "viewCount": 225,
    "geminiSummary": {
      "mission": "'㈜하미글로벌' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-3",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-5",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜오리온",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917771?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 16,
    "viewCount": 240,
    "geminiSummary": {
      "mission": "'㈜오리온' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-4",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-6",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜이노디스",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49895963?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 18,
    "viewCount": 255,
    "geminiSummary": {
      "mission": "'㈜이노디스' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-5",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-7",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "삼성카드고객서비스㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49870482?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 20,
    "viewCount": 270,
    "geminiSummary": {
      "mission": "'삼성카드고객서비스㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-6",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-8",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "(주)학산",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916423?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 22,
    "viewCount": 285,
    "geminiSummary": {
      "mission": "'(주)학산' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-7",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-9",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜발렉스서비스",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928446?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 24,
    "viewCount": 300,
    "geminiSummary": {
      "mission": "'㈜발렉스서비스' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-8",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-10",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "세니아의원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916322?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 26,
    "viewCount": 315,
    "geminiSummary": {
      "mission": "'세니아의원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-9",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-11",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜지엔엠라이프",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49873029?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 28,
    "viewCount": 330,
    "geminiSummary": {
      "mission": "'㈜지엔엠라이프' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-10",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-12",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "코웨이갤러리",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49920470?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 30,
    "viewCount": 345,
    "geminiSummary": {
      "mission": "'코웨이갤러리' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-11",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-13",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "광동제약㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927057?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 32,
    "viewCount": 360,
    "geminiSummary": {
      "mission": "'광동제약㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-12",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-14",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "퀴네앤드나겔㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928831?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 34,
    "viewCount": 375,
    "geminiSummary": {
      "mission": "'퀴네앤드나겔㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-13",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-15",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜스튜디오아우토믹",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926468?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 36,
    "viewCount": 390,
    "geminiSummary": {
      "mission": "'㈜스튜디오아우토믹' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-14",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-16",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜케이티엠앤에스",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926285?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 38,
    "viewCount": 405,
    "geminiSummary": {
      "mission": "'㈜케이티엠앤에스' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-15",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-17",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜카리스마아이텍",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927350?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 40,
    "viewCount": 420,
    "geminiSummary": {
      "mission": "'㈜카리스마아이텍' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-16",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-18",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜제이엘케이",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927881?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 42,
    "viewCount": 435,
    "geminiSummary": {
      "mission": "'㈜제이엘케이' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-17",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-19",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "더 케이텍㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927843?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 44,
    "viewCount": 450,
    "geminiSummary": {
      "mission": "'더 케이텍㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-18",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-20",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜넥스트플레이어",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49920555?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 46,
    "viewCount": 465,
    "geminiSummary": {
      "mission": "'㈜넥스트플레이어' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-19",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-21",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "대치삼보어학원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49922459?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 48,
    "viewCount": 480,
    "geminiSummary": {
      "mission": "'대치삼보어학원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-20",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-22",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜지마켓",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49888332?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 50,
    "viewCount": 495,
    "geminiSummary": {
      "mission": "'㈜지마켓' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-21",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-23",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "신세계푸드",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927374?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 52,
    "viewCount": 510,
    "geminiSummary": {
      "mission": "'신세계푸드' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-22",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-24",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "토스씨엑스㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902224?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 54,
    "viewCount": 525,
    "geminiSummary": {
      "mission": "'토스씨엑스㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-23",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-25",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜D&O",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928345?rPageCode=PL&logpath=20&sn=1&sc=524",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 56,
    "viewCount": 540,
    "geminiSummary": {
      "mission": "'㈜D&O' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-24",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-26",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "석플란트치과병원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49890943?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 58,
    "viewCount": 555,
    "geminiSummary": {
      "mission": "'석플란트치과병원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-25",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-27",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "넥스트인사이트㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49715525?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 60,
    "viewCount": 570,
    "geminiSummary": {
      "mission": "'넥스트인사이트㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-26",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-28",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "루엔디앤씨",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49774544?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 62,
    "viewCount": 585,
    "geminiSummary": {
      "mission": "'루엔디앤씨' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-27",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-29",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "로담글로벌한의원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49927973?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 64,
    "viewCount": 600,
    "geminiSummary": {
      "mission": "'로담글로벌한의원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-28",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-30",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "모나용평㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908448?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 66,
    "viewCount": 615,
    "geminiSummary": {
      "mission": "'모나용평㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-29",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-31",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜글로우서울",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917820?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 68,
    "viewCount": 630,
    "geminiSummary": {
      "mission": "'㈜글로우서울' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-30",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-32",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "대원제약(주)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916443?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 70,
    "viewCount": 645,
    "geminiSummary": {
      "mission": "'대원제약(주)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-31",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-33",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜소노인터내셔널",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49920862?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 72,
    "viewCount": 660,
    "geminiSummary": {
      "mission": "'㈜소노인터내셔널' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-32",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-34",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "비씨월드제약",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49906676?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 74,
    "viewCount": 675,
    "geminiSummary": {
      "mission": "'비씨월드제약' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-33",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-35",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "히타치하이테크코리아㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49905701?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 76,
    "viewCount": 690,
    "geminiSummary": {
      "mission": "'히타치하이테크코리아㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-34",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-36",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜아이온퓨처",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49764656?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 78,
    "viewCount": 705,
    "geminiSummary": {
      "mission": "'㈜아이온퓨처' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-35",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-37",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜에이맨",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49918215?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 80,
    "viewCount": 720,
    "geminiSummary": {
      "mission": "'㈜에이맨' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-36",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-38",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "케이씨씨오토모빌㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49899628?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 82,
    "viewCount": 735,
    "geminiSummary": {
      "mission": "'케이씨씨오토모빌㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-37",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-39",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "리멕스㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891851?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 84,
    "viewCount": 750,
    "geminiSummary": {
      "mission": "'리멕스㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-38",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-40",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "동대문여성인력개발센터",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49868493?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 86,
    "viewCount": 765,
    "geminiSummary": {
      "mission": "'동대문여성인력개발센터' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-39",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-41",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "웍스피어(유)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49735622?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 88,
    "viewCount": 780,
    "geminiSummary": {
      "mission": "'웍스피어(유)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-40",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-42",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜더블유에스디앤씨",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49883657?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 90,
    "viewCount": 795,
    "geminiSummary": {
      "mission": "'㈜더블유에스디앤씨' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-41",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-43",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "노랑푸드",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49702543?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 92,
    "viewCount": 810,
    "geminiSummary": {
      "mission": "'노랑푸드' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-42",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-44",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "오션의원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49754399?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 94,
    "viewCount": 825,
    "geminiSummary": {
      "mission": "'오션의원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-43",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-45",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜셀트리온제약",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908192?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 96,
    "viewCount": 840,
    "geminiSummary": {
      "mission": "'㈜셀트리온제약' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-44",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-46",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜송지오인터내셔널",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49924204?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 98,
    "viewCount": 855,
    "geminiSummary": {
      "mission": "'㈜송지오인터내셔널' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-45",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-47",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "오토앤㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49874540?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 100,
    "viewCount": 870,
    "geminiSummary": {
      "mission": "'오토앤㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-46",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-48",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "세명검사기술㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49910227?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 102,
    "viewCount": 885,
    "geminiSummary": {
      "mission": "'세명검사기술㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-47",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-49",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "롯데쇼핑",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49914114?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 104,
    "viewCount": 900,
    "geminiSummary": {
      "mission": "'롯데쇼핑' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-48",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-50",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "디아이동일㈜",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926657?rPageCode=PL&logpath=20&sn=2&sc=525",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 106,
    "viewCount": 915,
    "geminiSummary": {
      "mission": "'디아이동일㈜' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-49",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-51",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[주거공간 업계최고 대우] 인테리어 디자이너 팀장 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49924667?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 108,
    "viewCount": 930,
    "geminiSummary": {
      "mission": "'[주거공간 업계최고 대우] 인테리어 디자이너 팀장 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-50",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-52",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "KB데이타시스템 IT분야 경력직원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908157?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 110,
    "viewCount": 945,
    "geminiSummary": {
      "mission": "'KB데이타시스템 IT분야 경력직원 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-51",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-53",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026 샘표식품 신입/경력 수시채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917517?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 112,
    "viewCount": 960,
    "geminiSummary": {
      "mission": "'2026 샘표식품 신입/경력 수시채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-52",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-54",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[안랩] 2026년 9월 신입/경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916989?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 114,
    "viewCount": 975,
    "geminiSummary": {
      "mission": "'[안랩] 2026년 9월 신입/경력 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-53",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-55",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "선에스테스파 마곡점 신입 뷰티션 채용 [에스테틱/피부관리사]",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49919894?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 116,
    "viewCount": 990,
    "geminiSummary": {
      "mission": "'선에스테스파 마곡점 신입 뷰티션 채용 [에스테틱/피부관리사]' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-54",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-56",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "대원제약 DNA 채용 (신입/경력 수시 채용)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916443?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 118,
    "viewCount": 1005,
    "geminiSummary": {
      "mission": "'대원제약 DNA 채용 (신입/경력 수시 채용)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-55",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-57",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 포스코플로우 신입/경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49910467?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 120,
    "viewCount": 1020,
    "geminiSummary": {
      "mission": "'2026년 하반기 포스코플로우 신입/경력직 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-56",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-58",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "파라다이스시티 2026년 4분기 수시 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49896715?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 122,
    "viewCount": 1035,
    "geminiSummary": {
      "mission": "'파라다이스시티 2026년 4분기 수시 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-57",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-59",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[프리미엄 양고기/양갈비 전문점 고매램] 주방 / 홀 직원 아르바이트 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49909331?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 124,
    "viewCount": 1050,
    "geminiSummary": {
      "mission": "'[프리미엄 양고기/양갈비 전문점 고매램] 주방 / 홀 직원 아르바이트 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-58",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-60",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "26년 6차 팀홀튼 정규직 운영관리직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49900577?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 126,
    "viewCount": 1065,
    "geminiSummary": {
      "mission": "'26년 6차 팀홀튼 정규직 운영관리직 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-59",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-61",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "포스코퓨처엠 신입/경력사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902326?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 128,
    "viewCount": 1080,
    "geminiSummary": {
      "mission": "'포스코퓨처엠 신입/경력사원 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-60",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-62",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 포스코 생산기술직 인턴 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49892473?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 130,
    "viewCount": 1095,
    "geminiSummary": {
      "mission": "'2026년 하반기 포스코 생산기술직 인턴 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-61",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-63",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "㈜ABB코리아 각 부문 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902095?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 132,
    "viewCount": 1110,
    "geminiSummary": {
      "mission": "'㈜ABB코리아 각 부문 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-62",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-64",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 각 부문별 신입/경력 채용공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49901481?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 134,
    "viewCount": 1125,
    "geminiSummary": {
      "mission": "'2026년 하반기 각 부문별 신입/경력 채용공고' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-63",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-65",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Tesla Korea 2026 대규모 공개 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49889651?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 136,
    "viewCount": 1140,
    "geminiSummary": {
      "mission": "'Tesla Korea 2026 대규모 공개 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-64",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-66",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026 하반기 금호석유화학그룹 신입사원 공개채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49846712?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 138,
    "viewCount": 1155,
    "geminiSummary": {
      "mission": "'2026 하반기 금호석유화학그룹 신입사원 공개채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-65",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-67",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 우리은행 채용 (일반 / 전문(통역, 변호사, 회계사, 세무사))",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49849071?rPageCode=PL&logpath=21&sn=6&sc=612",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 140,
    "viewCount": 1170,
    "geminiSummary": {
      "mission": "'2026년 우리은행 채용 (일반 / 전문(통역, 변호사, 회계사, 세무사))' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-66",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-68",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "방화문 제조 경력 및 신입모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926178?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 142,
    "viewCount": 1185,
    "geminiSummary": {
      "mission": "'방화문 제조 경력 및 신입모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-67",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-69",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[주4.5일/중식지원] 애드성수(뚝섬역 인근) 온라인 마케팅 신입 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49920616?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 144,
    "viewCount": 1200,
    "geminiSummary": {
      "mission": "'[주4.5일/중식지원] 애드성수(뚝섬역 인근) 온라인 마케팅 신입 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-68",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-70",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[동덕시스템즈] CJ대한통운 이천씨푸드센터 정규직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49874443?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 146,
    "viewCount": 1215,
    "geminiSummary": {
      "mission": "'[동덕시스템즈] CJ대한통운 이천씨푸드센터 정규직 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-69",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-71",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[카페/레스토랑] 주방 키친팀 경력직원을 모집합니다.(주5일/ 8h) 조리사, 요리사",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49869894?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 148,
    "viewCount": 1230,
    "geminiSummary": {
      "mission": "'[카페/레스토랑] 주방 키친팀 경력직원을 모집합니다.(주5일/ 8h) 조리사, 요리사' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-70",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-72",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "DSM 해외고객 관리 및 해외 영업보조 인턴직원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49918761?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 150,
    "viewCount": 1245,
    "geminiSummary": {
      "mission": "'DSM 해외고객 관리 및 해외 영업보조 인턴직원 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-71",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-73",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "뷔페레스토랑] 영업부(사원) / 일식조리사(사원)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49913407?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 152,
    "viewCount": 1260,
    "geminiSummary": {
      "mission": "'뷔페레스토랑] 영업부(사원) / 일식조리사(사원)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-72",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-74",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[주4.5일] 대치동 브런치레스토랑에서 주방스텝 모집합니다.",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49907717?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 154,
    "viewCount": 1275,
    "geminiSummary": {
      "mission": "'[주4.5일] 대치동 브런치레스토랑에서 주방스텝 모집합니다.' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-73",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-75",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "빌리프성형외과 영미권 상담실장 / 영어 통역 구인",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891882?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 156,
    "viewCount": 1290,
    "geminiSummary": {
      "mission": "'빌리프성형외과 영미권 상담실장 / 영어 통역 구인' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-74",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-76",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[경력무관] 활성탄 QC 품질관리/서류작업 (대기환경/수질 자격증필수)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49890273?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 158,
    "viewCount": 1305,
    "geminiSummary": {
      "mission": "'[경력무관] 활성탄 QC 품질관리/서류작업 (대기환경/수질 자격증필수)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-75",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-77",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[외국인 지원불가] 잠실역 1분/피부과 한의원/간호조무사,피부관리사 자격우대/초보환영",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49918913?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 160,
    "viewCount": 1320,
    "geminiSummary": {
      "mission": "'[외국인 지원불가] 잠실역 1분/피부과 한의원/간호조무사,피부관리사 자격우대/초보환영' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-76",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-78",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "베이커리 카페 수신당에서 [제빵사] 채용합니다",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49910413?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 162,
    "viewCount": 1335,
    "geminiSummary": {
      "mission": "'베이커리 카페 수신당에서 [제빵사] 채용합니다' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-77",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-79",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[도야집]외식업으로 잘먹고 잘살자. 홀팀원/고깃집창업/을지로",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49899655?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 164,
    "viewCount": 1350,
    "geminiSummary": {
      "mission": "'[도야집]외식업으로 잘먹고 잘살자. 홀팀원/고깃집창업/을지로' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-78",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-80",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[연4300/강남] 오르타의원 간호조무사 (신입,팀원,팀장급 모두 채용)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49837260?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 166,
    "viewCount": 1365,
    "geminiSummary": {
      "mission": "'[연4300/강남] 오르타의원 간호조무사 (신입,팀원,팀장급 모두 채용)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-79",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-81",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "씰리침대 평택고덕점 가구 판매 및 매장 관리 직원을 채용합니다.",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49831735?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 168,
    "viewCount": 1380,
    "geminiSummary": {
      "mission": "'씰리침대 평택고덕점 가구 판매 및 매장 관리 직원을 채용합니다.' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-80",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-82",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[월 9회 휴무] 베이커리 신입 및 경력  직원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49909745?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 170,
    "viewCount": 1395,
    "geminiSummary": {
      "mission": "'[월 9회 휴무] 베이커리 신입 및 경력  직원 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-81",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-83",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[GA보험대리점] 각 부문별 채용 - 교육지원부 / 리스크관리부 / 일반계약지원부",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49904457?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 172,
    "viewCount": 1410,
    "geminiSummary": {
      "mission": "'[GA보험대리점] 각 부문별 채용 - 교육지원부 / 리스크관리부 / 일반계약지원부' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-82",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-84",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "용산아이파크몰 토미카브랜드스토어 판매관리",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49923976?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 174,
    "viewCount": 1425,
    "geminiSummary": {
      "mission": "'용산아이파크몰 토미카브랜드스토어 판매관리' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-83",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-85",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[태전동/각분야 채용] 과자 온라인몰 MD / 물류창고 직원",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49922765?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 176,
    "viewCount": 1440,
    "geminiSummary": {
      "mission": "'[태전동/각분야 채용] 과자 온라인몰 MD / 물류창고 직원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-84",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-86",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "주간 월350만 리치지게차 냉장물류센터 기숙사가능",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917003?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 178,
    "viewCount": 1455,
    "geminiSummary": {
      "mission": "'주간 월350만 리치지게차 냉장물류센터 기숙사가능' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-85",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-87",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 각 부문 신입/경력 (사무-연구소/생산-용접,도장/2공장 CNC, MCT)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49911745?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 180,
    "viewCount": 1470,
    "geminiSummary": {
      "mission": "'2026년 하반기 각 부문 신입/경력 (사무-연구소/생산-용접,도장/2공장 CNC, MCT)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-86",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-88",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[캐슬렉스제주] 프론트 팀원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49910543?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 182,
    "viewCount": 1485,
    "geminiSummary": {
      "mission": "'[캐슬렉스제주] 프론트 팀원 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-87",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-89",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[하모니프레다]  경리/사무직 구인",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908030?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 184,
    "viewCount": 1500,
    "geminiSummary": {
      "mission": "'[하모니프레다]  경리/사무직 구인' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-88",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-90",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "MG새마을금고자산관리회사 채용 공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49911922?rPageCode=PL&logpath=21&sn=6&sc=611",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 186,
    "viewCount": 1515,
    "geminiSummary": {
      "mission": "'MG새마을금고자산관리회사 채용 공고' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-89",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-91",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[을지로입구역/연4600만] 키스템프 본사 HR 관리팀 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49332420?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 188,
    "viewCount": 1530,
    "geminiSummary": {
      "mission": "'[을지로입구역/연4600만] 키스템프 본사 HR 관리팀 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-90",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-92",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "중견기업 골프장,리조트 전략기획,사업기획 차장,부장급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49834934?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 190,
    "viewCount": 1545,
    "geminiSummary": {
      "mission": "'중견기업 골프장,리조트 전략기획,사업기획 차장,부장급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-91",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-93",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "제조외국계기업 재무회계총괄(영어) 부장,임원급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49794718?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 192,
    "viewCount": 1560,
    "geminiSummary": {
      "mission": "'제조외국계기업 재무회계총괄(영어) 부장,임원급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-92",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-94",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "화장품대기업 회계,결산(SAP) 대리,과장급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49744958?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 194,
    "viewCount": 1575,
    "geminiSummary": {
      "mission": "'화장품대기업 회계,결산(SAP) 대리,과장급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-93",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-95",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[일본계 기업] 오프라인 영업 대리-과장급",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49907990?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 196,
    "viewCount": 1590,
    "geminiSummary": {
      "mission": "'[일본계 기업] 오프라인 영업 대리-과장급' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-94",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-96",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "대기업 화장품 리테일영업파트장(올리브영) 차장,부장초급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49744917?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 198,
    "viewCount": 1605,
    "geminiSummary": {
      "mission": "'대기업 화장품 리테일영업파트장(올리브영) 차장,부장초급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-95",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-97",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "금융서비스기업 인사파트장 과장,차장초급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49794656?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 200,
    "viewCount": 1620,
    "geminiSummary": {
      "mission": "'금융서비스기업 인사파트장 과장,차장초급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-96",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-98",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "전력설비중견기업 영업지원 대리급 구함(굿커리어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49871560?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 202,
    "viewCount": 1635,
    "geminiSummary": {
      "mission": "'전력설비중견기업 영업지원 대리급 구함(굿커리어)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-97",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-99",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[반도체/외국계]EHS Manager",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49588455?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 204,
    "viewCount": 1650,
    "geminiSummary": {
      "mission": "'[반도체/외국계]EHS Manager' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-98",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-100",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[반도체 장비기업] // 인사 신입 및 대리급",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49686462?PageGbn=HH&logpath=2&sc=412",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 206,
    "viewCount": 1665,
    "geminiSummary": {
      "mission": "'[반도체 장비기업] // 인사 신입 및 대리급' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-99",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-101",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[GS티에스] GS SHOP CS 상담사 채용-9/11 면접",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928215?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 208,
    "viewCount": 1680,
    "geminiSummary": {
      "mission": "'[GS티에스] GS SHOP CS 상담사 채용-9/11 면접' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-100",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-102",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Pay-roll / Lead",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929832?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 210,
    "viewCount": 1695,
    "geminiSummary": {
      "mission": "'Pay-roll / Lead' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-101",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-103",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Pay-roll 급여실무 1명",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929799?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 212,
    "viewCount": 1710,
    "geminiSummary": {
      "mission": "'Pay-roll 급여실무 1명' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-102",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-104",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[부천시장애인활동센터] 사회복지사 (육아휴직 대체인력) 채용 공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929721?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 214,
    "viewCount": 1725,
    "geminiSummary": {
      "mission": "'[부천시장애인활동센터] 사회복지사 (육아휴직 대체인력) 채용 공고' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-103",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-105",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[광주보훈병원] 계약직 보건직(임상심리사) - 휴직대체 직원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929713?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 216,
    "viewCount": 1740,
    "geminiSummary": {
      "mission": "'[광주보훈병원] 계약직 보건직(임상심리사) - 휴직대체 직원 채용' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-104",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-106",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[포도 스피킹] PO(Product Owner)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929446?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 218,
    "viewCount": 1755,
    "geminiSummary": {
      "mission": "'[포도 스피킹] PO(Product Owner)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-105",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-107",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[장수군 장애인주간이용시설] 사회복지사 채용 공고(대체인력)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49929338?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 220,
    "viewCount": 1770,
    "geminiSummary": {
      "mission": "'[장수군 장애인주간이용시설] 사회복지사 채용 공고(대체인력)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-106",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-108",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[고메스퀘어천안불당점] 스시파트 경력사원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926552?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 222,
    "viewCount": 1785,
    "geminiSummary": {
      "mission": "'[고메스퀘어천안불당점] 스시파트 경력사원 모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-107",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-109",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "9월그랜드오픈 [롯데아울렛동부산입점카페] / 바리스타,베이커리 사원모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928309?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 224,
    "viewCount": 1800,
    "geminiSummary": {
      "mission": "'9월그랜드오픈 [롯데아울렛동부산입점카페] / 바리스타,베이커리 사원모집' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-108",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-110",
    "companyName": "잡코리아 인증기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[ 의정부 본사/정규직 ] 아웃소싱o 잡매니저o 경력무관o",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49928888?rPageCode=PL&logpath=2&sc=413",
    "experienceLevel": "경력무관",
    "location": "전국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "jobkorea"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 226,
    "viewCount": 1815,
    "geminiSummary": {
      "mission": "'[ 의정부 본사/정규직 ] 아웃소싱o 잡매니저o 경력무관o' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-109",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-111",
    "companyName": "Cloudflare",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "VoidZero Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/voidzero-engineer-at-cloudflare-4451214079",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 228,
    "viewCount": 1830,
    "geminiSummary": {
      "mission": "'VoidZero Engineer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-110",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-112",
    "companyName": "Speechify",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Platform - Busan, South Korea",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-platform-busan-south-korea-at-speechify-4462127288",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "부산",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 230,
    "viewCount": 1845,
    "geminiSummary": {
      "mission": "'Software Engineer, Platform - Busan, South Korea' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-111",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-113",
    "companyName": "JNPMEDI",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Back-end Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/back-end-software-engineer-at-jnpmedi-4460208243",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "송도국제도시",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 232,
    "viewCount": 1860,
    "geminiSummary": {
      "mission": "'Back-end Software Engineer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-112",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-114",
    "companyName": "PUBLISH Protocol",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "서비스 개발자",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90-at-publish-protocol-4436969492",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 234,
    "viewCount": 1875,
    "geminiSummary": {
      "mission": "'서비스 개발자' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-113",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-115",
    "companyName": "Hopae",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-at-hopae-4454930804",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 236,
    "viewCount": 1890,
    "geminiSummary": {
      "mission": "'Software Engineer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-114",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-116",
    "companyName": "토스증권 (Toss Securities)",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Node.js Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/node-js-developer-at-toss-securities-4429364046",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 238,
    "viewCount": 1905,
    "geminiSummary": {
      "mission": "'Node.js Developer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-115",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-117",
    "companyName": "Toss Place(토스플레이스)",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Node.js Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/node-js-developer-at-toss-place-%ED%86%A0%EC%8A%A4%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4-4429356076",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 240,
    "viewCount": 1920,
    "geminiSummary": {
      "mission": "'Node.js Developer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-116",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-118",
    "companyName": "Bear Robotics",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-at-bear-robotics-4161557340",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 242,
    "viewCount": 1935,
    "geminiSummary": {
      "mission": "'Software Engineer' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-117",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-119",
    "companyName": "Vertical Bar - Process Analytics & DevOps for Oracle NetSuite",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Fullstack Engineer - Seoul, On-site",
    "originUrl": "https://kr.linkedin.com/jobs/view/fullstack-engineer-seoul-on-site-at-vertical-bar-process-analytics-devops-for-oracle-netsuite-4459758496",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "linkedin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 244,
    "viewCount": 1950,
    "geminiSummary": {
      "mission": "'Fullstack Engineer - Seoul, On-site' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-118",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-120",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "AMR 기구설계(주)원익로보틱스경기전체6년대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54929785",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 246,
    "viewCount": 1965,
    "geminiSummary": {
      "mission": "'AMR 기구설계(주)원익로보틱스경기전체6년대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-119",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-121",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기구설계 채용(주)제이브이엠대구전체신입/경력초대졸이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54869073",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 248,
    "viewCount": 1980,
    "geminiSummary": {
      "mission": "'기구설계 채용(주)제이브이엠대구전체신입/경력초대졸이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-120",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-122",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "영업/현장관리 담당자 경력(주)로드반경기전체경력고졸이상~10.01(목)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54902060",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 250,
    "viewCount": 1995,
    "geminiSummary": {
      "mission": "'영업/현장관리 담당자 경력(주)로드반경기전체경력고졸이상~10.01(목)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-121",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-123",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[부천/송내]토탈손해사정 한화손보 인보험심사[경력]토탈손해사정(주)경기전체신입/경력학력무관~09.26(토)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54585405",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 252,
    "viewCount": 2010,
    "geminiSummary": {
      "mission": "'[부천/송내]토탈손해사정 한화손보 인보험심사[경력]토탈손해사정(주)경기전체신입/경력학력무관~09.26(토)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-122",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-124",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "해외영업 대리급 채용(주)제일에프에이경기전체3년초대졸이상~10.01(목)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54922894",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 254,
    "viewCount": 2025,
    "geminiSummary": {
      "mission": "'해외영업 대리급 채용(주)제일에프에이경기전체3년초대졸이상~10.01(목)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-123",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-125",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "콘텐츠 마케팅모 스포츠경기전체1년대졸이상~10.04(일)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54940199",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 256,
    "viewCount": 2040,
    "geminiSummary": {
      "mission": "'콘텐츠 마케팅모 스포츠경기전체1년대졸이상~10.04(일)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-124",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-126",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "경영지원본부(영업지원) 신입(주)이비즈테크서울전체신입초대졸이상~09.27(일)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54771287",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 258,
    "viewCount": 2055,
    "geminiSummary": {
      "mission": "'경영지원본부(영업지원) 신입(주)이비즈테크서울전체신입초대졸이상~09.27(일)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-125",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-127",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "의료기기 QMR 팀장 채용(주)엘앤케이바이오메드경기전체10년대졸이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54866724",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 260,
    "viewCount": 2070,
    "geminiSummary": {
      "mission": "'의료기기 QMR 팀장 채용(주)엘앤케이바이오메드경기전체10년대졸이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-126",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-128",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "중국 디지털 마케팅 AE(주)와이톤서울전체경력대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54931476",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 262,
    "viewCount": 2085,
    "geminiSummary": {
      "mission": "'중국 디지털 마케팅 AE(주)와이톤서울전체경력대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-127",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-129",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기술영업 경력 (수원)(주)제이오텍경기전체5년대졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54869343",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 264,
    "viewCount": 2100,
    "geminiSummary": {
      "mission": "'기술영업 경력 (수원)(주)제이오텍경기전체5년대졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-128",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-130",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "보컬 팀장 채용 [실용음악학원/홍대](주)잼실용음악학원서울전체신입/경력초대졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54863785",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 266,
    "viewCount": 2115,
    "geminiSummary": {
      "mission": "'보컬 팀장 채용 [실용음악학원/홍대](주)잼실용음악학원서울전체신입/경력초대졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-129",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-131",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "하반기 각 부문별 신입 및 경력직 채용(주)범천정밀경기전체신입/경력학력무관~09.20(일)금융·보험 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54840671",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 268,
    "viewCount": 2130,
    "geminiSummary": {
      "mission": "'하반기 각 부문별 신입 및 경력직 채용(주)범천정밀경기전체신입/경력학력무관~09.20(일)금융·보험 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-130",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-132",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "영업담당자 경력 [경남권](주)한제피앤에스경기전체 외5년고졸이상~09.29(화)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54880422",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 270,
    "viewCount": 2145,
    "geminiSummary": {
      "mission": "'영업담당자 경력 [경남권](주)한제피앤에스경기전체 외5년고졸이상~09.29(화)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-131",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-133",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "세포배양/세포치료제 학술 및 기술지원(주)제이씨바이오서울전체신입/경력석사이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54870332",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 272,
    "viewCount": 2160,
    "geminiSummary": {
      "mission": "'세포배양/세포치료제 학술 및 기술지원(주)제이씨바이오서울전체신입/경력석사이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-132",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-134",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "하반기 각 부문별 신입/경력 모집(주)대성엔지니어링경기전체 외신입/경력학력무관D-4미디어·문화·스포츠 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54856757",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 274,
    "viewCount": 2175,
    "geminiSummary": {
      "mission": "'하반기 각 부문별 신입/경력 모집(주)대성엔지니어링경기전체 외신입/경력학력무관D-4미디어·문화·스포츠 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-133",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-135",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "한국아즈빌 각 사업부 채용형 인턴 및 경력직 채용한국아즈빌(주)서울전체 외신입/경력초대졸이상내일마감평균연봉 상위 10%",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54800937",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 276,
    "viewCount": 2190,
    "geminiSummary": {
      "mission": "'한국아즈빌 각 사업부 채용형 인턴 및 경력직 채용한국아즈빌(주)서울전체 외신입/경력초대졸이상내일마감평균연봉 상위 10%' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-134",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-136",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "항공/로보틱스 엔지니어(GNC, 7~20년)(주)니어스랩서울전체7년고졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54868483",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 278,
    "viewCount": 2205,
    "geminiSummary": {
      "mission": "'항공/로보틱스 엔지니어(GNC, 7~20년)(주)니어스랩서울전체7년고졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-135",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-137",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기획팀 경력 직원 모집[서울](주)쌍곰서울전체1년대졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54910858",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 280,
    "viewCount": 2220,
    "geminiSummary": {
      "mission": "'기획팀 경력 직원 모집[서울](주)쌍곰서울전체1년대졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-136",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-138",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "항만 IT 솔루션 비즈니스 컨설턴트(주)싸이버로지텍서울전체신입/경력대졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54893795",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 282,
    "viewCount": 2235,
    "geminiSummary": {
      "mission": "'항만 IT 솔루션 비즈니스 컨설턴트(주)싸이버로지텍서울전체신입/경력대졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-137",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-139",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "에스에스엘엠(주) 제조 인원 채용에스에스엘엠(주)대구전체신입/경력고졸이상~09.20(일)생산 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54922826",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 284,
    "viewCount": 2250,
    "geminiSummary": {
      "mission": "'에스에스엘엠(주) 제조 인원 채용에스에스엘엠(주)대구전체신입/경력고졸이상~09.20(일)생산 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-138",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-140",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[파르나스몰점 카츠8] 주방 (신입)구디(주)서울전체신입고졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54898719",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 286,
    "viewCount": 2265,
    "geminiSummary": {
      "mission": "'[파르나스몰점 카츠8] 주방 (신입)구디(주)서울전체신입고졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-139",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-141",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "상품기획 BM(향,바디케어) 경력(주)와이톤서울전체3년고졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54869922",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 288,
    "viewCount": 2280,
    "geminiSummary": {
      "mission": "'상품기획 BM(향,바디케어) 경력(주)와이톤서울전체3년고졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-140",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-142",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "퍼포먼스 마케터 채용(엠레드클리닉)(주)에이에이씨서울전체2년대졸이상~09.28(월)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54875535",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 290,
    "viewCount": 2295,
    "geminiSummary": {
      "mission": "'퍼포먼스 마케터 채용(엠레드클리닉)(주)에이에이씨서울전체2년대졸이상~09.28(월)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-141",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-143",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "홈쇼핑MD 신입 모집(주)씨앤에이글로벌서울전체신입대졸이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54878784",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 292,
    "viewCount": 2310,
    "geminiSummary": {
      "mission": "'홈쇼핑MD 신입 모집(주)씨앤에이글로벌서울전체신입대졸이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-142",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-144",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "건축자재 영업 채용[경력]하나씨엔엠(주)서울전체1년고졸이상~09.29(화)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54896103",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 294,
    "viewCount": 2325,
    "geminiSummary": {
      "mission": "'건축자재 영업 채용[경력]하나씨엔엠(주)서울전체1년고졸이상~09.29(화)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-143",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-145",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "재고 수발주 및 물류관리 MD(SCM)디퍼런트밀리언즈(주)서울전체3년고졸이상~10.03(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54946044",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 296,
    "viewCount": 2340,
    "geminiSummary": {
      "mission": "'재고 수발주 및 물류관리 MD(SCM)디퍼런트밀리언즈(주)서울전체3년고졸이상~10.03(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-144",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-146",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "식봄 온사이트 마케터(주)마켓보로경기전체5년고졸이상~10.01(목)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54911951",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 298,
    "viewCount": 2355,
    "geminiSummary": {
      "mission": "'식봄 온사이트 마케터(주)마켓보로경기전체5년고졸이상~10.01(목)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-145",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-147",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "호텔 프론트데스크 경력 채용(주)코스타경기전체경력고졸이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54881262",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 300,
    "viewCount": 2370,
    "geminiSummary": {
      "mission": "'호텔 프론트데스크 경력 채용(주)코스타경기전체경력고졸이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-146",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-148",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[의상디자인] 패션디자이너 신입 채용(주)제이앤제이글로벌서울전체신입초대졸이상~10.04(일)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54944616",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 302,
    "viewCount": 2385,
    "geminiSummary": {
      "mission": "'[의상디자인] 패션디자이너 신입 채용(주)제이앤제이글로벌서울전체신입초대졸이상~10.04(일)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-147",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-149",
    "companyName": "(주)이비즈테크",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[운영부문] 경영혁신팀 리드(주)니어스랩서울전체12년고졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54930780",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 304,
    "viewCount": 2400,
    "geminiSummary": {
      "mission": "'[운영부문] 경영혁신팀 리드(주)니어스랩서울전체12년고졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-148",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-150",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "26년 9차 버거킹 정규직 운영관리직 채용(주)비케이알경기전체 외신입초대졸이상D-4인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54799380",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 306,
    "viewCount": 2415,
    "geminiSummary": {
      "mission": "'26년 9차 버거킹 정규직 운영관리직 채용(주)비케이알경기전체 외신입초대졸이상D-4인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-149",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-151",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 (주)싸이웍스 공개 채용(사업확장에 따른 충원)(주)싸이웍스서울전체2년이상초대졸이상~10.01(목)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54911300",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 308,
    "viewCount": 2430,
    "geminiSummary": {
      "mission": "'2026년 하반기 (주)싸이웍스 공개 채용(사업확장에 따른 충원)(주)싸이웍스서울전체2년이상초대졸이상~10.01(목)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-150",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-152",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[국비지원]한국전력공사 및 전기공사업체 취업 직업훈련생 모집[전기공사 외선/내선(AI기반스마트)전기](주)대원전기교육원충북전체경력무관학력무관D-4연봉상승률 15% 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=53331565",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 310,
    "viewCount": 2445,
    "geminiSummary": {
      "mission": "'[국비지원]한국전력공사 및 전기공사업체 취업 직업훈련생 모집[전기공사 외선/내선(AI기반스마트)전기](주)대원전기교육원충북전체경력무관학력무관D-4연봉상승률 15% 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-151",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-153",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[CS/영등포] 소노스테이션 QC(통화품질 평가) 채용(주)맨파워그룹코리아서울전체경력무관학력무관D-5성과급/상여금",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54917200",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 312,
    "viewCount": 2460,
    "geminiSummary": {
      "mission": "'[CS/영등포] 소노스테이션 QC(통화품질 평가) 채용(주)맨파워그룹코리아서울전체경력무관학력무관D-5성과급/상여금' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-152",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-154",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[일본사업본부] 일본 인플루언서 마케터(주)올리브인터내셔널서울전체 외2년이상학력무관채용시급성장중",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54559408",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 314,
    "viewCount": 2475,
    "geminiSummary": {
      "mission": "'[일본사업본부] 일본 인플루언서 마케터(주)올리브인터내셔널서울전체 외2년이상학력무관채용시급성장중' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-153",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-155",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 제4차 NPL 채권관리 전문(계약)인력 채용 공고아이비케이신용정보(주)서울전체경력학력무관D-2금융·보험 조회 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54781071",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 316,
    "viewCount": 2490,
    "geminiSummary": {
      "mission": "'2026년 제4차 NPL 채권관리 전문(계약)인력 채용 공고아이비케이신용정보(주)서울전체경력학력무관D-2금융·보험 조회 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-154",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-156",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[베리시] Logistics Director (글로벌 물류 실장)(주)딥다이브서울전체10년이상학력무관채용시",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54943828",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 318,
    "viewCount": 2505,
    "geminiSummary": {
      "mission": "'[베리시] Logistics Director (글로벌 물류 실장)(주)딥다이브서울전체10년이상학력무관채용시' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-155",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-157",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "정보보안 전문인력 채용 · 컨설턴트 & 모의해킹(주)에이쓰리시큐리티서울전체신입/경력초대졸이상내일마감기획·전략 지원 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54767679",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 320,
    "viewCount": 2520,
    "geminiSummary": {
      "mission": "'정보보안 전문인력 채용 · 컨설턴트 & 모의해킹(주)에이쓰리시큐리티서울전체신입/경력초대졸이상내일마감기획·전략 지원 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-156",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-158",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "현장시공직원 모집공고(주)토탈실드솔루션인천전체경력무관학력무관D-2평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54749140",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 322,
    "viewCount": 2535,
    "geminiSummary": {
      "mission": "'현장시공직원 모집공고(주)토탈실드솔루션인천전체경력무관학력무관D-2평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-157",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-159",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[NIED] 외부특화 디자인연구소 직원 채용니드랩(주)서울전체1년이상초대졸이상~09.29(화)급성장중",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54619152",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 324,
    "viewCount": 2550,
    "geminiSummary": {
      "mission": "'[NIED] 외부특화 디자인연구소 직원 채용니드랩(주)서울전체1년이상초대졸이상~09.29(화)급성장중' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-158",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-160",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[서초/교대역] 세무회계 신입 채용세무법인플랜비서울전체신입학력무관~09.27(일)회계·세무·재무 스크랩 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54879738",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 326,
    "viewCount": 2565,
    "geminiSummary": {
      "mission": "'[서초/교대역] 세무회계 신입 채용세무법인플랜비서울전체신입학력무관~09.27(일)회계·세무·재무 스크랩 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-159",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-161",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[외국계기업/차암동] 재무팀 행정 사무원 채용스탭스(주)충남전체1년이상고졸이상~09.24(목)회계·세무·재무 지원 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54845232",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 328,
    "viewCount": 2580,
    "geminiSummary": {
      "mission": "'[외국계기업/차암동] 재무팀 행정 사무원 채용스탭스(주)충남전체1년이상고졸이상~09.24(목)회계·세무·재무 지원 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-160",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-162",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[하나손해보험]  CS센터 보상접수실 운영 관리자 채용(주)유니에스서울전체경력학력무관채용시",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54729575",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 330,
    "viewCount": 2595,
    "geminiSummary": {
      "mission": "'[하나손해보험]  CS센터 보상접수실 운영 관리자 채용(주)유니에스서울전체경력학력무관채용시' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-161",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-163",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[레삐 프로페셔널] 콘텐츠 영상 PD구레이쓰이온코리아(주)경기전체1년이상초대졸이상D-2워라밸",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54637284",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 332,
    "viewCount": 2610,
    "geminiSummary": {
      "mission": "'[레삐 프로페셔널] 콘텐츠 영상 PD구레이쓰이온코리아(주)경기전체1년이상초대졸이상D-2워라밸' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-162",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-164",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "각 부문 경력 채용(채권관리,PM,영업,엔지니어 외)힐티코리아(주)서울전체 외경력초대졸이상D-2건설·건축 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54823935",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 334,
    "viewCount": 2625,
    "geminiSummary": {
      "mission": "'각 부문 경력 채용(채권관리,PM,영업,엔지니어 외)힐티코리아(주)서울전체 외경력초대졸이상D-2건설·건축 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-163",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-165",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[경력] 일본지역 의류무역 해외영업 모집(주)두리가이노베이션서울전체 외2년이상고졸이상~09.30(수)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54893470",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 336,
    "viewCount": 2640,
    "geminiSummary": {
      "mission": "'[경력] 일본지역 의류무역 해외영업 모집(주)두리가이노베이션서울전체 외2년이상고졸이상~09.30(수)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-164",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-166",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[주5일/정규직]백화점  판매직모집(브랜드/근무지선택가능)(주)인터비즈시스템서울전체 외경력무관학력무관~09.27(일)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54927197",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 338,
    "viewCount": 2655,
    "geminiSummary": {
      "mission": "'[주5일/정규직]백화점  판매직모집(브랜드/근무지선택가능)(주)인터비즈시스템서울전체 외경력무관학력무관~09.27(일)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-165",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-167",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 9월 캐논코리아 신입사원(계약직) 채용캐논코리아 주식회사서울전체신입초대졸이상~09.16(수)IT개발·데이터 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54933022",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Python",
      "SQL",
      "데이터/AI",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 340,
    "viewCount": 2670,
    "geminiSummary": {
      "mission": "'2026년 9월 캐논코리아 신입사원(계약직) 채용캐논코리아 주식회사서울전체신입초대졸이상~09.16(수)IT개발·데이터 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-166",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-168",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026 (주)우양 부문별 정규직 채용(주)우양서울전체 외신입/경력학력무관D-5상품기획·MD 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54812148",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 342,
    "viewCount": 2685,
    "geminiSummary": {
      "mission": "'2026 (주)우양 부문별 정규직 채용(주)우양서울전체 외신입/경력학력무관D-5상품기획·MD 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-167",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-169",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Mercedes-Benz 한성모터스(주) 남천서비스센터 부품직원 모집한성모터스(주)부산전체1년이상고졸이상채용시평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54917764",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 344,
    "viewCount": 2700,
    "geminiSummary": {
      "mission": "'Mercedes-Benz 한성모터스(주) 남천서비스센터 부품직원 모집한성모터스(주)부산전체1년이상고졸이상채용시평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-168",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-170",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[한국타이어계열사] (주)한국엔지니어링웍스 비드생산직(인턴)(주)한국엔지니어링웍스충북전체경력무관고졸이상~09.14(월)평균연봉 상위 10%",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54882527",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 346,
    "viewCount": 2715,
    "geminiSummary": {
      "mission": "'[한국타이어계열사] (주)한국엔지니어링웍스 비드생산직(인턴)(주)한국엔지니어링웍스충북전체경력무관고졸이상~09.14(월)평균연봉 상위 10%' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-169",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-171",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "개나리벽지(주) 관리부 신입 및 경력 모집개나리벽지(주)경기전체신입/경력초대졸이상~09.17(목)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54796285",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 348,
    "viewCount": 2730,
    "geminiSummary": {
      "mission": "'개나리벽지(주) 관리부 신입 및 경력 모집개나리벽지(주)경기전체신입/경력초대졸이상~09.17(목)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-170",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-172",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "모션스튜디오 언디자인드 뮤지엄 프로젝트매니저(PM) 추가모집언디자인드 뮤지엄서울전체신입/경력학력무관~09.27(일)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54884123",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 350,
    "viewCount": 2745,
    "geminiSummary": {
      "mission": "'모션스튜디오 언디자인드 뮤지엄 프로젝트매니저(PM) 추가모집언디자인드 뮤지엄서울전체신입/경력학력무관~09.27(일)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-171",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-173",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "해태제과식품(주) 채용연계형 인턴 모집해태제과식품(주)서울전체 외신입대졸이상~09.13(일)건설·건축 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54921032",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 352,
    "viewCount": 2760,
    "geminiSummary": {
      "mission": "'해태제과식품(주) 채용연계형 인턴 모집해태제과식품(주)서울전체 외신입대졸이상~09.13(일)건설·건축 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-172",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-174",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "논산 메가한의원 간호조무사 구인 (상담, 코디, 원무)메가한의원충남전체경력무관초대졸이상~09.27(일)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54879244",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 354,
    "viewCount": 2775,
    "geminiSummary": {
      "mission": "'논산 메가한의원 간호조무사 구인 (상담, 코디, 원무)메가한의원충남전체경력무관초대졸이상~09.27(일)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-173",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-175",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[반도체사업부 구미] 각 부문별 경력직 모집(교육·통관·품질)(주)텍슨경북전체4년이상대졸이상~09.30(수)평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54894599",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 356,
    "viewCount": 2790,
    "geminiSummary": {
      "mission": "'[반도체사업부 구미] 각 부문별 경력직 모집(교육·통관·품질)(주)텍슨경북전체4년이상대졸이상~09.30(수)평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-174",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-176",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[천호역/주5일/정규직] 현대홈쇼핑 고객센터 상담 강사직 채용(주)유니에스서울전체경력무관학력무관~09.19(토)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54942867",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 358,
    "viewCount": 2805,
    "geminiSummary": {
      "mission": "'[천호역/주5일/정규직] 현대홈쇼핑 고객센터 상담 강사직 채용(주)유니에스서울전체경력무관학력무관~09.19(토)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-175",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-177",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "자동차 전장부품 경영기획 경력 채용동아전기부품(주)경기전체7년이상대졸이상~10.02(금)평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54918192",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 360,
    "viewCount": 2820,
    "geminiSummary": {
      "mission": "'자동차 전장부품 경영기획 경력 채용동아전기부품(주)경기전체7년이상대졸이상~10.02(금)평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-176",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-178",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[단기/LG이노텍/구미/기숙사/통근] 스마트폰 검사 및 설비OP(주)퍼스트인대구전체 외경력무관학력무관~10.04(일)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54941218",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 362,
    "viewCount": 2835,
    "geminiSummary": {
      "mission": "'[단기/LG이노텍/구미/기숙사/통근] 스마트폰 검사 및 설비OP(주)퍼스트인대구전체 외경력무관학력무관~10.04(일)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-177",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-179",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 디포그 하반기 신입/경력사원 채용(주)디포그경기전체신입/경력고졸이상~10.31(토)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54931697",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 364,
    "viewCount": 2850,
    "geminiSummary": {
      "mission": "'2026년 디포그 하반기 신입/경력사원 채용(주)디포그경기전체신입/경력고졸이상~10.31(토)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-178",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-180",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[네이버 계열사] 2026 하반기 인컴즈 신입사원 채용(주)인컴즈강원전체신입학력무관~09.13(일)고객상담·TM 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54870594",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 366,
    "viewCount": 2865,
    "geminiSummary": {
      "mission": "'[네이버 계열사] 2026 하반기 인컴즈 신입사원 채용(주)인컴즈강원전체신입학력무관~09.13(일)고객상담·TM 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-179",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-181",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[아이리움안과] 총무팀 팀원 채용 /서비스직 우대아이리움안과의원서울전체 외경력무관학력무관D-4서비스 지원 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54878947",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 368,
    "viewCount": 2880,
    "geminiSummary": {
      "mission": "'[아이리움안과] 총무팀 팀원 채용 /서비스직 우대아이리움안과의원서울전체 외경력무관학력무관D-4서비스 지원 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-180",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-182",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "경산/진량-자동차부품 각 부문 채용(주)부국산업개발대구전체 외경력무관학력무관D-6인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54855600",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 370,
    "viewCount": 2895,
    "geminiSummary": {
      "mission": "'경산/진량-자동차부품 각 부문 채용(주)부국산업개발대구전체 외경력무관학력무관D-6인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-181",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-183",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[대기업/정자역/신입가능] 두산에너빌리티 사업관리 사무지원(주)엠제이플렉스경남전체경력무관초대졸이상~09.16(수)총무·법무·사무 스크랩 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54914317",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 372,
    "viewCount": 2910,
    "geminiSummary": {
      "mission": "'[대기업/정자역/신입가능] 두산에너빌리티 사업관리 사무지원(주)엠제이플렉스경남전체경력무관초대졸이상~09.16(수)총무·법무·사무 스크랩 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-182",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-184",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[비비앙] IMC 브랜드 퍼포먼스 컨텐츠 마케터 (5년차 이상)비비앙서울전체5년이상초대졸이상~09.19(토)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54801587",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 374,
    "viewCount": 2925,
    "geminiSummary": {
      "mission": "'[비비앙] IMC 브랜드 퍼포먼스 컨텐츠 마케터 (5년차 이상)비비앙서울전체5년이상초대졸이상~09.19(토)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-183",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-185",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[네이버 공식 파트너사/주4.5일] 광고영업&관리 채용(주)메이퍼런스서울전체 외신입/경력학력무관~09.13(일)연봉상승률 15% 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54900149",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 376,
    "viewCount": 2940,
    "geminiSummary": {
      "mission": "'[네이버 공식 파트너사/주4.5일] 광고영업&관리 채용(주)메이퍼런스서울전체 외신입/경력학력무관~09.13(일)연봉상승률 15% 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-184",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-186",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[슈프리마] 해외 기술 컨설팅 엔지니어(주)슈프리마경기전체2년이상대졸이상~10.05(월)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54668362",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 378,
    "viewCount": 2955,
    "geminiSummary": {
      "mission": "'[슈프리마] 해외 기술 컨설팅 엔지니어(주)슈프리마경기전체2년이상대졸이상~10.05(월)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-185",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-187",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "MCN기업 유튜브 숏츠 제작 채용 [정규직/커리어UP](주)키스템프그룹서울전체경력무관학력무관~09.18(금)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54933811",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 380,
    "viewCount": 2970,
    "geminiSummary": {
      "mission": "'MCN기업 유튜브 숏츠 제작 채용 [정규직/커리어UP](주)키스템프그룹서울전체경력무관학력무관~09.18(금)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-186",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-188",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[핑거스토리] 임원 비서 채용(주)핑거스토리서울전체1년이상초대졸이상~10.02(금)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54923100",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 382,
    "viewCount": 2985,
    "geminiSummary": {
      "mission": "'[핑거스토리] 임원 비서 채용(주)핑거스토리서울전체1년이상초대졸이상~10.02(금)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-187",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-189",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기술영업 전문가 · 자동차·국방·항공우주 센서 솔루션(주)트라이온경기전체5년학력무관~09.18(금)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54907269",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 384,
    "viewCount": 3000,
    "geminiSummary": {
      "mission": "'기술영업 전문가 · 자동차·국방·항공우주 센서 솔루션(주)트라이온경기전체5년학력무관~09.18(금)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-188",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-190",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "전기자재매장 관리및납품(주)대명전기종합상사전남광주전체경력무관고졸이상~10.02(금)평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54915295",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 386,
    "viewCount": 3015,
    "geminiSummary": {
      "mission": "'전기자재매장 관리및납품(주)대명전기종합상사전남광주전체경력무관고졸이상~10.02(금)평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-189",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-191",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[나이키골프 / 크록스&스윔플러스] 상품기획 MD 채용 (각 1명)코모스앤 패션사업본부서울전체신입/경력대졸이상~09.30(수)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54882256",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 388,
    "viewCount": 3030,
    "geminiSummary": {
      "mission": "'[나이키골프 / 크록스&스윔플러스] 상품기획 MD 채용 (각 1명)코모스앤 패션사업본부서울전체신입/경력대졸이상~09.30(수)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-190",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-192",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기술부/품질부/생산부 신입/경력 채용(주)동양공조경기전체신입/경력고졸이상~09.13(일)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54919327",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 390,
    "viewCount": 3045,
    "geminiSummary": {
      "mission": "'기술부/품질부/생산부 신입/경력 채용(주)동양공조경기전체신입/경력고졸이상~09.13(일)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-191",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-193",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[마곡역] 컨텍센터 파트장 채용씨에스쉐어링(주)서울전체 외1년이상고졸이상~10.02(금)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54924448",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 392,
    "viewCount": 3060,
    "geminiSummary": {
      "mission": "'[마곡역] 컨텍센터 파트장 채용씨에스쉐어링(주)서울전체 외1년이상고졸이상~10.02(금)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-192",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-194",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[공기업] 한국자산관리공사 부산지역본부 사무보조  채용(주)유니에스부산전체경력무관학력무관내일마감금융·보험 스크랩 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54934381",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 394,
    "viewCount": 3075,
    "geminiSummary": {
      "mission": "'[공기업] 한국자산관리공사 부산지역본부 사무보조  채용(주)유니에스부산전체경력무관학력무관내일마감금융·보험 스크랩 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-193",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-195",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[미스터블루] 만화 서비스 운영자 채용(신입/경력)미스터블루(주)서울전체신입/경력학력무관~09.17(목)자유로운 연차",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54930818",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 396,
    "viewCount": 3090,
    "geminiSummary": {
      "mission": "'[미스터블루] 만화 서비스 운영자 채용(신입/경력)미스터블루(주)서울전체신입/경력학력무관~09.17(목)자유로운 연차' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-194",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-196",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[넥스트칩] 2026년 9월 각 부문 모집(주)넥스트칩경기전체경력대졸이상~09.30(수)생산 스크랩 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54900355",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 398,
    "viewCount": 3105,
    "geminiSummary": {
      "mission": "'[넥스트칩] 2026년 9월 각 부문 모집(주)넥스트칩경기전체경력대졸이상~09.30(수)생산 스크랩 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-195",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-197",
    "companyName": "(주)맨파워그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "강남역,역삼역 주4~5일 근무 에스테티션 피부관리사 채용더올슬림강남점서울전체신입/경력학력무관D-7서비스 조회 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54739876",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 400,
    "viewCount": 3120,
    "geminiSummary": {
      "mission": "'강남역,역삼역 주4~5일 근무 에스테티션 피부관리사 채용더올슬림강남점서울전체신입/경력학력무관D-7서비스 조회 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-196",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-198",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "(주)예림임업 각 부문 신입/경력사원 채용(주)예림임업인천전체신입/경력학력무관D-2건설·건축 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54868013",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 402,
    "viewCount": 3135,
    "geminiSummary": {
      "mission": "'(주)예림임업 각 부문 신입/경력사원 채용(주)예림임업인천전체신입/경력학력무관D-2건설·건축 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-197",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-199",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[ROAS] 로봇 플랫폼 기구설계(주)로아스경기전체신입/경력대졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54910453",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 404,
    "viewCount": 3150,
    "geminiSummary": {
      "mission": "'[ROAS] 로봇 플랫폼 기구설계(주)로아스경기전체신입/경력대졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-198",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-200",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 제7회 기간제 직원 채용 공고(재)전남창조경제혁신센터전남광주전체경력무관학력무관~09.13(일)기획·전략 스크랩 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54898942",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 406,
    "viewCount": 3165,
    "geminiSummary": {
      "mission": "'2026년 제7회 기간제 직원 채용 공고(재)전남창조경제혁신센터전남광주전체경력무관학력무관~09.13(일)기획·전략 스크랩 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-199",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-201",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "조리팀 조리사 채용(주)헤리티지산후조리원서울전체5년고졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54868195",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 408,
    "viewCount": 3180,
    "geminiSummary": {
      "mission": "'조리팀 조리사 채용(주)헤리티지산후조리원서울전체5년고졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-200",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-202",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "IPCC AICC 기술영업 채용(주)넥서스커뮤니티서울전체10년대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54919469",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 410,
    "viewCount": 3195,
    "geminiSummary": {
      "mission": "'IPCC AICC 기술영업 채용(주)넥서스커뮤니티서울전체10년대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-201",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-203",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "방산 기구설계 (경력)(주)씨앤지마이크로웨이브대전전체1년초대졸이상~09.28(월)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54883462",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 412,
    "viewCount": 3210,
    "geminiSummary": {
      "mission": "'방산 기구설계 (경력)(주)씨앤지마이크로웨이브대전전체1년초대졸이상~09.28(월)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-202",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-204",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[K-뉴딜] 어도비 AI 콘텐츠 마케팅 과정대한상공회의소서울전체 외신입/경력학력무관~09.30(수)교육 조회 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54907289",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "Python",
      "SQL",
      "데이터/AI",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 414,
    "viewCount": 3225,
    "geminiSummary": {
      "mission": "'[K-뉴딜] 어도비 AI 콘텐츠 마케팅 과정대한상공회의소서울전체 외신입/경력학력무관~09.30(수)교육 조회 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-203",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-205",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "항공/로보틱스 엔지니어(GNC, 3~6년)(주)니어스랩서울전체3년고졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54868500",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 416,
    "viewCount": 3240,
    "geminiSummary": {
      "mission": "'항공/로보틱스 엔지니어(GNC, 3~6년)(주)니어스랩서울전체3년고졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-204",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-206",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "제약 BX 디자이너 채용 (주임/대리급)더와이즈그룹(주)서울전체1년대졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54852335",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 418,
    "viewCount": 3255,
    "geminiSummary": {
      "mission": "'제약 BX 디자이너 채용 (주임/대리급)더와이즈그룹(주)서울전체1년대졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-205",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-207",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "서비스기획/운영PM 모집(주)크리스천메이트서울전체경력초대졸이상~10.03(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54944271",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 420,
    "viewCount": 3270,
    "geminiSummary": {
      "mission": "'서비스기획/운영PM 모집(주)크리스천메이트서울전체경력초대졸이상~10.03(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-206",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-208",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "식품 상품기획자 (신제품 기획/개발)(주)브레이브컴퍼니서울전체5년고졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54854484",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 422,
    "viewCount": 3285,
    "geminiSummary": {
      "mission": "'식품 상품기획자 (신제품 기획/개발)(주)브레이브컴퍼니서울전체5년고졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-207",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-209",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "최고의 영업사원을 모집합니다(주)노탈리코리아앤도담코스메틱서울전체신입/경력고졸이상~10.01(목)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54919929",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 424,
    "viewCount": 3300,
    "geminiSummary": {
      "mission": "'최고의 영업사원을 모집합니다(주)노탈리코리아앤도담코스메틱서울전체신입/경력고졸이상~10.01(목)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-208",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-210",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[아기유니콘] 온라인 AMD(주)워로브라더스서울전체 외1년고졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54901778",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 426,
    "viewCount": 3315,
    "geminiSummary": {
      "mission": "'[아기유니콘] 온라인 AMD(주)워로브라더스서울전체 외1년고졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-209",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-211",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "핀다뱅크 준법감시인(주)핀다서울전체경력대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54927819",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 428,
    "viewCount": 3330,
    "geminiSummary": {
      "mission": "'핀다뱅크 준법감시인(주)핀다서울전체경력대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-210",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-212",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "말레이시아/베트남 해외주재원포트로직스(주)서울전체 외7년초대졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54907165",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 430,
    "viewCount": 3345,
    "geminiSummary": {
      "mission": "'말레이시아/베트남 해외주재원포트로직스(주)서울전체 외7년초대졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-211",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-213",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "자재팀 경력 모집오비오주식회사경기전체15년초대졸이상~09.28(월)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54853926",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 432,
    "viewCount": 3360,
    "geminiSummary": {
      "mission": "'자재팀 경력 모집오비오주식회사경기전체15년초대졸이상~09.28(월)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-212",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-214",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "Wholesale Specialist오티비코리아(유)서울전체신입/경력대졸이상~09.25(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54871356",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 434,
    "viewCount": 3375,
    "geminiSummary": {
      "mission": "'Wholesale Specialist오티비코리아(유)서울전체신입/경력대졸이상~09.25(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-213",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-215",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "현대건설 HILLSTATE Academy 1기대한상공회의소서울전체 외신입/경력학력무관~09.28(월)평균연봉 7,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54877039",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 436,
    "viewCount": 3390,
    "geminiSummary": {
      "mission": "'현대건설 HILLSTATE Academy 1기대한상공회의소서울전체 외신입/경력학력무관~09.28(월)평균연봉 7,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-214",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-216",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[운영부문] 인사기획 담당자(주)니어스랩서울전체3년고졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54908071",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 438,
    "viewCount": 3405,
    "geminiSummary": {
      "mission": "'[운영부문] 인사기획 담당자(주)니어스랩서울전체3년고졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-215",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-217",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "사업지원 매니저(사업비 정산 및 관리)(주)에이블런서울전체3년초대졸이상~10.01(목)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54917015",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 440,
    "viewCount": 3420,
    "geminiSummary": {
      "mission": "'사업지원 매니저(사업비 정산 및 관리)(주)에이블런서울전체3년초대졸이상~10.01(목)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-216",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-218",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기술영업 담당자대원씨티에스(주)서울전체3년초대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54930745",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 442,
    "viewCount": 3435,
    "geminiSummary": {
      "mission": "'기술영업 담당자대원씨티에스(주)서울전체3년초대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-217",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-219",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[라비킷] 구매전환형 영상PD(주)부스트랩서울전체신입/경력고졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54933755",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 444,
    "viewCount": 3450,
    "geminiSummary": {
      "mission": "'[라비킷] 구매전환형 영상PD(주)부스트랩서울전체신입/경력고졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-218",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-220",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "CX/재무회계/보건관리/안전관리/급여 담당자 채용케이엘에이취인터내셔날(주)서울전체신입/경력초대졸이상~09.23(수)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54927352",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 446,
    "viewCount": 3465,
    "geminiSummary": {
      "mission": "'CX/재무회계/보건관리/안전관리/급여 담당자 채용케이엘에이취인터내셔날(주)서울전체신입/경력초대졸이상~09.23(수)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-219",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-221",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "프로듀서 / 에디터 (경력)(주)투비스코리아서울전체5년고졸이상~09.26(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54883570",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 448,
    "viewCount": 3480,
    "geminiSummary": {
      "mission": "'프로듀서 / 에디터 (경력)(주)투비스코리아서울전체5년고졸이상~09.26(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-220",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-222",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "자금/회계/세무 담당 모집(사)한국방송통신대학교출판문화원서울전체2년대졸이상오늘마감평균연봉 상위 10%",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54812827",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 450,
    "viewCount": 3495,
    "geminiSummary": {
      "mission": "'자금/회계/세무 담당 모집(사)한국방송통신대학교출판문화원서울전체2년대졸이상오늘마감평균연봉 상위 10%' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-221",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-223",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[GS네트웍스] '26년 물류센타 현장 피킹 인턴 채용(주)지에스네트웍스경기전체 외신입고졸이상D-2운전·운송·배송 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54918256",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 452,
    "viewCount": 3510,
    "geminiSummary": {
      "mission": "'[GS네트웍스] '26년 물류센타 현장 피킹 인턴 채용(주)지에스네트웍스경기전체 외신입고졸이상D-2운전·운송·배송 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-222",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-224",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 각 부문 채용(주)디투엔지니어링서울전체 외신입/경력고졸이상~09.14(월)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54940998",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 454,
    "viewCount": 3525,
    "geminiSummary": {
      "mission": "'2026년 하반기 각 부문 채용(주)디투엔지니어링서울전체 외신입/경력고졸이상~09.14(월)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-223",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-225",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "사업 운영(주)이우소프트경기전체3년고졸이상~09.30(수)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54915276",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 456,
    "viewCount": 3540,
    "geminiSummary": {
      "mission": "'사업 운영(주)이우소프트경기전체3년고졸이상~09.30(수)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-224",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-226",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "가구 품질관리 팀원(주)파인우드리빙서울전체 외1년고졸이상~10.03(토)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54934644",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 458,
    "viewCount": 3555,
    "geminiSummary": {
      "mission": "'가구 품질관리 팀원(주)파인우드리빙서울전체 외1년고졸이상~10.03(토)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-225",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-227",
    "companyName": "더와이즈그룹",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "유학/어학연수 컨설팅(세일즈_대구)(주)이디엠에듀케이션대구전체경력초대졸이상~10.02(금)합격 시 50만원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54932455",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 460,
    "viewCount": 3570,
    "geminiSummary": {
      "mission": "'유학/어학연수 컨설팅(세일즈_대구)(주)이디엠에듀케이션대구전체경력초대졸이상~10.02(금)합격 시 50만원' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-226",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-228",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "고객관리 운영 매니저 채용전후치승강기보양부산전체신입/경력초대졸이상~09.13(일)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54915460",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 462,
    "viewCount": 3585,
    "geminiSummary": {
      "mission": "'고객관리 운영 매니저 채용전후치승강기보양부산전체신입/경력초대졸이상~09.13(일)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-227",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-229",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "대한토지신탁(주) 재무/법무 경력직원 채용공고대한토지신탁(주)서울전체경력대졸이상내일마감평균연봉 상위 10%",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54786371",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 464,
    "viewCount": 3600,
    "geminiSummary": {
      "mission": "'대한토지신탁(주) 재무/법무 경력직원 채용공고대한토지신탁(주)서울전체경력대졸이상내일마감평균연봉 상위 10%' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-228",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-230",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "건양대학교병원 바이오메디컬 인공지능미래융합교육원대전전체경력무관대졸이상~10.06(화)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54892986",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 466,
    "viewCount": 3615,
    "geminiSummary": {
      "mission": "'건양대학교병원 바이오메디컬 인공지능미래융합교육원대전전체경력무관대졸이상~10.06(화)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-229",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-231",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "알루미늄 사업부문 생산기술직 신입사원 채용디아이동일(주)천안알루미늄사업장충북전체 외신입학력무관~09.30(수)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54939218",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 468,
    "viewCount": 3630,
    "geminiSummary": {
      "mission": "'알루미늄 사업부문 생산기술직 신입사원 채용디아이동일(주)천안알루미늄사업장충북전체 외신입학력무관~09.30(수)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-230",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-232",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "품질관리팀/한약사 모집안중원외탕전서울전체 외신입/경력대졸이상~09.13(일)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54846267",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 470,
    "viewCount": 3645,
    "geminiSummary": {
      "mission": "'품질관리팀/한약사 모집안중원외탕전서울전체 외신입/경력대졸이상~09.13(일)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-231",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-233",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[굿즈제작] PM 연봉 4400이상(중국어•영어가능자) 채용(주)모댄서울전체1년이상초대졸이상~09.30(수)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54922909",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 472,
    "viewCount": 3660,
    "geminiSummary": {
      "mission": "'[굿즈제작] PM 연봉 4400이상(중국어•영어가능자) 채용(주)모댄서울전체1년이상초대졸이상~09.30(수)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-232",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-234",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "태양광기업 홍보팀 영상·웹디자인 담당자 모집 (인센티브 지급)주식회사 파인에너지경북전체경력무관고졸이상~09.27(일)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54883118",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 474,
    "viewCount": 3675,
    "geminiSummary": {
      "mission": "'태양광기업 홍보팀 영상·웹디자인 담당자 모집 (인센티브 지급)주식회사 파인에너지경북전체경력무관고졸이상~09.27(일)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-233",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-235",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "(주)대원농산 폐기물종합재활용업 기술인력 채용 공고(주)대원농산충북전체경력무관학력무관~09.26(토)평균연봉 상위 10%",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54845981",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 476,
    "viewCount": 3690,
    "geminiSummary": {
      "mission": "'(주)대원농산 폐기물종합재활용업 기술인력 채용 공고(주)대원농산충북전체경력무관학력무관~09.26(토)평균연봉 상위 10%' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-234",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-236",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[이천] 자차필수 / 의류 및 잡화 물류 지게차 정규 채용(주)맨파워코리아경기전체경력학력무관채용시",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54709221",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 478,
    "viewCount": 3705,
    "geminiSummary": {
      "mission": "'[이천] 자차필수 / 의류 및 잡화 물류 지게차 정규 채용(주)맨파워코리아경기전체경력학력무관채용시' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-235",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-237",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "2026년 (주)복지프랜드 복지차량 영업팀 모집 (A/S대응 등)(주)복지프랜드경기전체신입/경력고졸이상~10.10(토)성과급/상여금",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54713486",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/18(금) 마감",
    "deadlineDateStr": "2026.09.18(금) 23:59",
    "deadlineDaysLeft": 13,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 480,
    "viewCount": 3720,
    "geminiSummary": {
      "mission": "'2026년 (주)복지프랜드 복지차량 영업팀 모집 (A/S대응 등)(주)복지프랜드경기전체신입/경력고졸이상~10.10(토)성과급/상여금' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-236",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-238",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "디블록그룹(구.한호건설그룹) 부동산개발사  [ 개발기획 / 오피스-임대매각 / 상업시설 / 디자인 크리에이티브  건축기술 / 세무회계 ] 경력 채용에이치케이에스인베스트먼트(주)서울전체5년이상대졸이상D-6",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54940393",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/19(토) 마감",
    "deadlineDateStr": "2026.09.19(토) 23:59",
    "deadlineDaysLeft": 14,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 482,
    "viewCount": 3735,
    "geminiSummary": {
      "mission": "'디블록그룹(구.한호건설그룹) 부동산개발사  [ 개발기획 / 오피스-임대매각 / 상업시설 / 디자인 크리에이티브  건축기술 / 세무회계 ] 경력 채용에이치케이에스인베스트먼트(주)서울전체5년이상대졸이상D-6' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-237",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-239",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "기계설계(배관,덕트) 신입 및 경력 정규직 채용주식회사이노이엔씨경기전체신입/경력고졸이상상시채용급성장중",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54892371",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.06(일) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 484,
    "viewCount": 3750,
    "geminiSummary": {
      "mission": "'기계설계(배관,덕트) 신입 및 경력 정규직 채용주식회사이노이엔씨경기전체신입/경력고졸이상상시채용급성장중' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-238",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-240",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "노브러시 자동세차 정규직, 전임 채용(경력무관)(주)고려아대전전체경력무관학력무관~09.15(화)인기있는",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54908499",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ 내일 마감 (D-1)",
    "deadlineDateStr": "2026.09.07(월) 23:59",
    "deadlineDaysLeft": 2,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 486,
    "viewCount": 3765,
    "geminiSummary": {
      "mission": "'노브러시 자동세차 정규직, 전임 채용(경력무관)(주)고려아대전전체경력무관학력무관~09.15(화)인기있는' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-239",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-241",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "메가스터디뷰티아카데미홍대학원 컨설턴트 채용 공고메가스터디뷰티아카데미홍대학원서울전체경력무관학력무관~10.04(일)오늘 뜬",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54947471",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-3 마감",
    "deadlineDateStr": "2026.09.08(화) 23:59",
    "deadlineDaysLeft": 3,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 488,
    "viewCount": 3780,
    "geminiSummary": {
      "mission": "'메가스터디뷰티아카데미홍대학원 컨설턴트 채용 공고메가스터디뷰티아카데미홍대학원서울전체경력무관학력무관~10.04(일)오늘 뜬' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-240",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-242",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[비어케이] 주류 영업사원 채용(수도권 업소담당)(주)비어케이서울전체 외신입/경력초대졸이상~09.18(금)평균연봉 6,000 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54782088",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-4 마감",
    "deadlineDateStr": "2026.09.09(수) 23:59",
    "deadlineDaysLeft": 4,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 490,
    "viewCount": 3795,
    "geminiSummary": {
      "mission": "'[비어케이] 주류 영업사원 채용(수도권 업소담당)(주)비어케이서울전체 외신입/경력초대졸이상~09.18(금)평균연봉 6,000 이상' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-241",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-243",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[기파랑문해원목동직영원] 행정 실장 모집(주)국풀교육서울전체1년이상초대졸이상~09.18(금)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54864050",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-5 마감",
    "deadlineDateStr": "2026.09.10(목) 23:59",
    "deadlineDaysLeft": 5,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 492,
    "viewCount": 3810,
    "geminiSummary": {
      "mission": "'[기파랑문해원목동직영원] 행정 실장 모집(주)국풀교육서울전체1년이상초대졸이상~09.18(금)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-242",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 7,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-244",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "각 부문 수시 채용(주)쓰리아이서울전체5년이상학력무관D-4마케팅·홍보·조사 지원 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54924442",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-6 마감",
    "deadlineDateStr": "2026.09.11(금) 23:59",
    "deadlineDaysLeft": 6,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 494,
    "viewCount": 3825,
    "geminiSummary": {
      "mission": "'각 부문 수시 채용(주)쓰리아이서울전체5년이상학력무관D-4마케팅·홍보·조사 지원 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-243",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 8,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-245",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "채용연계형 보안 종합 운영 관리자 과정 교육생 모집(주)한국정보보호교육센터부산전체 외경력무관고졸이상~09.17(목)교육 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54813763",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "⏰ D-7 마감",
    "deadlineDateStr": "2026.09.12(토) 23:59",
    "deadlineDaysLeft": 7,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 496,
    "viewCount": 3840,
    "geminiSummary": {
      "mission": "'채용연계형 보안 종합 운영 관리자 과정 교육생 모집(주)한국정보보호교육센터부산전체 외경력무관고졸이상~09.17(목)교육 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-244",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 9,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-246",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[월390+/LG이노텍] 경북 구미 생산직 채용/통근버스 및 기숙사(주)퍼스트인대구전체 외경력무관학력무관~10.04(일)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54941338",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 498,
    "viewCount": 3855,
    "geminiSummary": {
      "mission": "'[월390+/LG이노텍] 경북 구미 생산직 채용/통근버스 및 기숙사(주)퍼스트인대구전체 외경력무관학력무관~10.04(일)' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-245",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 10,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-247",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "모션스튜디오 언디자인드 뮤지엄 경영지원 직원 모집언디자인드 뮤지엄서울전체신입/경력학력무관~10.04(일)오늘 뜬",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54943454",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 500,
    "viewCount": 3870,
    "geminiSummary": {
      "mission": "'모션스튜디오 언디자인드 뮤지엄 경영지원 직원 모집언디자인드 뮤지엄서울전체신입/경력학력무관~10.04(일)오늘 뜬' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-246",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 11,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-248",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[GEO 마케터 채용] 콘텐츠 마케팅 경력자를 찾습니다리드젠랩서울전체1년이상학력무관~11.03(화)오늘 뜬",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54938869",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 502,
    "viewCount": 3885,
    "geminiSummary": {
      "mission": "'[GEO 마케터 채용] 콘텐츠 마케팅 경력자를 찾습니다리드젠랩서울전체1년이상학력무관~11.03(화)오늘 뜬' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-247",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 12,
        "commentsCount": 1,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-249",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "[쿠팡CFS] ★입사축하금 시행★ 현장관리자 정규직 대규모 채용쿠팡풀필먼트서비스(유)서울전체 외경력무관학력무관~09.30(수)인사·노무·HRD 지원 TOP100",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54894443",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 504,
    "viewCount": 3900,
    "geminiSummary": {
      "mission": "'[쿠팡CFS] ★입사축하금 시행★ 현장관리자 정규직 대규모 채용쿠팡풀필먼트서비스(유)서울전체 외경력무관학력무관~09.30(수)인사·노무·HRD 지원 TOP100' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-248",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 5,
        "commentsCount": 2,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  },
  {
    "id": "real-job-250",
    "companyName": "태양광기업",
    "companyLogo": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&auto=format&fit=crop&q=80",
    "companyCategory": "실시간 채용중",
    "title": "생산팀 신입/경력직, 공무팀 경력직 사원 모집 (3조2교대)에스와이에너지(주)충북전체경력무관학력무관D-3생산 지원 급상승",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=list&rec_idx=54667739",
    "experienceLevel": "경력무관",
    "location": "서울/수도권",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "saramin"
    ],
    "sourceSummaryText": "굿잡 AI 검증 완료",
    "sourceType": "CRAWLED",
    "tags": [
      "정규직",
      "소프트웨어",
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 506,
    "viewCount": 3915,
    "geminiSummary": {
      "mission": "'생산팀 신입/경력직, 공무팀 경력직 사원 모집 (3조2교대)에스와이에너지(주)충북전체경력무관학력무관D-3생산 지원 급상승' 포지션 핵심 프로젝트 개발 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 장비 지원",
      "generatedAt": "방금 전 실시간 수집 및 Gemini AI 분석 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-249",
        "authorVerifiedOrg": "현직자 멘토",
        "authorRole": "소프트웨어 엔지니어",
        "tenureYears": "2년차",
        "rating": 4.5,
        "content": "이 포지션은 기본기(자료구조/알고리즘)와 협업 프로젝트 경험을 중요하게 봅니다. 지원서에 문제 해결 과정을 솔직하게 녹여내면 큰 가산점을 받을 수 있습니다!",
        "likes": 6,
        "commentsCount": 0,
        "createdAt": "1일 전",
        "isLikedByUser": false
      }
    ]
  }
];
