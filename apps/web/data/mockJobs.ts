import { JobPosting } from '../types/job';

// 굿잡(GoodJob) 실시간 취준생 맞춤 마감일정 & 기술태그 동기화 데이터
export const MOCK_JOBS: JobPosting[] = [
  {
    "id": "real-job-1",
    "companyName": "(주)이씨오",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzApIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zsnbQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[이씨오] 도서관 웹 솔루션 Back-end JAVA개발자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54931567&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 종로구 신입·경력 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 8,
    "viewCount": 180,
    "geminiSummary": {
      "mission": "'[이씨오] 도서관 웹 솔루션 Back-end JAVA개발자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)이노에이엑스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzEpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zsnbQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "기술연구소 솔루션 웹개발자경력 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54831243&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 송파구 경력 대졸↑ 정규직",
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
    "applicantCount": 10,
    "viewCount": 195,
    "geminiSummary": {
      "mission": "'기술연구소 솔루션 웹개발자경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "인스피언(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzIpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7snbjsiqQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[청년디지털일자리]2026년 상반기 Java 기반 EAI개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54928451&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 금천구 신입·경력 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 12,
    "viewCount": 210,
    "geminiSummary": {
      "mission": "'[청년디지털일자리]2026년 상반기 Java 기반 EAI개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)테크랩스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzMpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zthYw8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자팀원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54866200&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 2~5년 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 14,
    "viewCount": 225,
    "geminiSummary": {
      "mission": "'백엔드개발자팀원' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜지에스아이티엠",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzQpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7sp4Dsl5A8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "유통 SI 프로젝트 PM / PL /개발자/ DBA 대규모 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54914981&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 종로구 경력4년↑ 학력무관 정규직",
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
    "applicantCount": 16,
    "viewCount": 240,
    "geminiSummary": {
      "mission": "'유통 SI 프로젝트 PM / PL /개발자/ DBA 대규모 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)미디어윌네트웍스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzUpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iIzExMTgyNyIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zrr7g8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[알바천국본사] AI개발자정규직 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54869932&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력1년↑ 대졸↑ 정규직",
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
    "applicantCount": 18,
    "viewCount": 255,
    "geminiSummary": {
      "mission": "'[알바천국본사] AI개발자정규직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "(주)비트컴퓨터",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzYpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zruYQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[비트컴퓨터] 신사업 풀스택개발자(Product Engineer)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54894579&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력무관 학력무관 정규직",
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
    "applicantCount": 20,
    "viewCount": 270,
    "geminiSummary": {
      "mission": "'[비트컴퓨터] 신사업 풀스택개발자(Product Engineer)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "굿모닝아이텍(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzcpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7qtb/rqqg8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "굿모닝아이텍(주)개발자모집 합니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54922479&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 고양시 덕양구 신입·경력 대졸↑ 정규직",
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
    "applicantCount": 22,
    "viewCount": 285,
    "geminiSummary": {
      "mission": "'굿모닝아이텍(주)개발자모집 합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)미소정보기술",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzgpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zrr7g8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "(주)미소정보기술 기술연구소개발자채용합니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54910344&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입·경력 대졸↑ 정규직",
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
    "applicantCount": 24,
    "viewCount": 300,
    "geminiSummary": {
      "mission": "'(주)미소정보기술 기술연구소개발자채용합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)아이앤텍",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgc3RvcC1vcGFjaXR5PSIwLjg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHJ4PSIzMiIgZmlsbD0idXJsKCNncmFkXzkpIiAvPgogIDx0ZXh0IHg9IjY0IiB5PSI2NiIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1ByZXRlbmRhcmQnLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj7so7zslYQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "아이앤텍[부산] 대학 증명발급 시스템 운영팀(신입개발자) 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54918879&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 해운대구 신입 초대졸↑ 정규직",
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
    "applicantCount": 26,
    "viewCount": 315,
    "geminiSummary": {
      "mission": "'아이앤텍[부산] 대학 증명발급 시스템 운영팀(신입개발자) 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)모다이노칩",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xMCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuqqDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[본부] 모다아울렛 전산팀개발자모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54926489&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 수정구 경력무관 대졸↑ 정규직",
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
    "applicantCount": 28,
    "viewCount": 330,
    "geminiSummary": {
      "mission": "'[본부] 모다아울렛 전산팀개발자모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)인터엑스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xMSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyduDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "백엔드 (Backend) ​개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54856268&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입·경력 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 30,
    "viewCount": 345,
    "geminiSummary": {
      "mission": "'백엔드 (Backend) ​개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "삼중테크(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xMikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyCvOykkTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[창원] 주차시스템 관제 S/W개발자채용 (C#/.NET, IoT·로봇제어)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54658592&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경남 창원시 성산구 신입·경력 초대졸↑ 정규직",
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
    "applicantCount": 32,
    "viewCount": 360,
    "geminiSummary": {
      "mission": "'[창원] 주차시스템 관제 S/W개발자채용 (C#/.NET, IoT·로봇제어)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "어니컴(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xMykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyWtOuLiDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[어니컴(주)] 데이터 분석 서비스개발자모집 (경력 무관)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54679464&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 용산구 경력무관 대졸↑ 정규직",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 34,
    "viewCount": 375,
    "geminiSummary": {
      "mission": "'[어니컴(주)] 데이터 분석 서비스개발자모집 (경력 무관)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "(주)쿨스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xNCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOy/qDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[ICT사업부] 프론트/백엔드/챗봇/인공지능 웹개발자정규직 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54891699&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 강서구 경력무관 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 36,
    "viewCount": 390,
    "geminiSummary": {
      "mission": "'[ICT사업부] 프론트/백엔드/챗봇/인공지능 웹개발자정규직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "엑소더스이엔티(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xNSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyXkeyGjDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "엑소더스이엔티(주)에서 백엔드/인프라개발자채용합니다",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54934336&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 화성시 경력무관 대졸↑ 정규직 3,800 만원",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 38,
    "viewCount": 405,
    "geminiSummary": {
      "mission": "'엑소더스이엔티(주)에서 백엔드/인프라개발자채용합니다' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)케이비드",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xNikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOy8gDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[정규직] 신입 웹서비스(Back-End, Front-End)개발자모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54883690&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "대구 수성구 경력무관 학력무관 정규직",
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
    "applicantCount": 40,
    "viewCount": 420,
    "geminiSummary": {
      "mission": "'[정규직] 신입 웹서비스(Back-End, Front-End)개발자모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)앰진",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xNykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyVsDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)앰진개발자신입·경력 채용공고",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54892613&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 송파구 신입·경력 대졸↑ 정규직",
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
    "applicantCount": 42,
    "viewCount": 435,
    "geminiSummary": {
      "mission": "'(주)앰진개발자신입·경력 채용공고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "한영회계법인",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xOCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2VnOyYgTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[EY한영] 세무IT 풀스택개발자(경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54922370&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 경력3년↑ 대졸↑ 정규직",
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
    "applicantCount": 44,
    "viewCount": 450,
    "geminiSummary": {
      "mission": "'[EY한영] 세무IT 풀스택개발자(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)이든크루",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8xOSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOydtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)이든크루에서 Lucy Studio Front개발자를 찾고 있어요",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54941395&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 신입 학력무관 정규직",
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
    "applicantCount": 46,
    "viewCount": 465,
    "geminiSummary": {
      "mission": "'(주)이든크루에서 Lucy Studio Front개발자를 찾고 있어요' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)투게더스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yMCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2IrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)투게더스에서 웹개발자채용합니다",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54749026&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "인천 부평구 경력무관 학력무관 정규직",
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
    "applicantCount": 48,
    "viewCount": 480,
    "geminiSummary": {
      "mission": "'(주)투게더스에서 웹개발자채용합니다' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "태경씨앤코(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yMSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2DnOqyvTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "태경씨앤코(주) AI 활용 백엔드개발자모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54918869&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 강서구 경력무관 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 50,
    "viewCount": 495,
    "geminiSummary": {
      "mission": "'태경씨앤코(주) AI 활용 백엔드개발자모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)티윈",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yMikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2LsDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[LG 협력사] 백엔드개발자채용 (상현역/마곡역)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54843332&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 용인시 수지구 경력3년↑ 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 52,
    "viewCount": 510,
    "geminiSummary": {
      "mission": "'[LG 협력사] 백엔드개발자채용 (상현역/마곡역)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)윈드밀소프트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yMykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyciDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "Salesforce 세일즈포스개발자신입/경력(3년 이상) 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54829469&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 마포구 신입·경력 초대졸↑ 정규직",
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
    "applicantCount": 54,
    "viewCount": 525,
    "geminiSummary": {
      "mission": "'Salesforce 세일즈포스개발자신입/경력(3년 이상) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)엔디소프트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yNCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "모바일개발자채용(경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54908427&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 학력무관 정규직",
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
    "applicantCount": 56,
    "viewCount": 540,
    "geminiSummary": {
      "mission": "'모바일개발자채용(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)글로벌비전",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yNSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOq4gDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI개발자. 바이브코딩. 오픈클로 실무 경험자 채용합니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54830916&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강서구 신입·경력 초대졸↑ 정규직 300 만원",
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
    "applicantCount": 58,
    "viewCount": 555,
    "geminiSummary": {
      "mission": "'AI개발자. 바이브코딩. 오픈클로 실무 경험자 채용합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "(주)에버스핀",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yNikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[신입/경력] 웹개발자(Web Developer)채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54914357&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 동작구 경력무관 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 60,
    "viewCount": 570,
    "geminiSummary": {
      "mission": "'[신입/경력] 웹개발자(Web Developer)채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)이트리즈시스템",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yNykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOydtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[SI/SM] JAVA 기반 웹개발자신입 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54934006&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 신입 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 62,
    "viewCount": 585,
    "geminiSummary": {
      "mission": "'[SI/SM] JAVA 기반 웹개발자신입 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)마이패스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yOCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuniDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)마이패스에서 웹개발자와 함께 성장해요",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54698018&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 관악구 경력무관 학력무관 정규직",
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
    "applicantCount": 64,
    "viewCount": 600,
    "geminiSummary": {
      "mission": "'(주)마이패스에서 웹개발자와 함께 성장해요' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)엠바스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8yOSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXoDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "웹(앱)개발자모집 [백엔드 - 계약직]",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54897224&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 연제구 경력무관 학력무관 계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 66,
    "viewCount": 615,
    "geminiSummary": {
      "mission": "'웹(앱)개발자모집 [백엔드 - 계약직]' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)식스스타스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zMCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyLnTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "철도 관제시스템 분야 소프트웨어개발자(신입·경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54941317&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 광명시 신입·경력 대졸↑ 정규직",
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
    "applicantCount": 68,
    "viewCount": 630,
    "geminiSummary": {
      "mission": "'철도 관제시스템 분야 소프트웨어개발자(신입·경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)로지브라더스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zMSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuhnDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[코드모스] 백엔드개발자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54775232&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입·경력 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 70,
    "viewCount": 645,
    "geminiSummary": {
      "mission": "'[코드모스] 백엔드개발자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "다원컴퓨팅(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zMikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuLpOybkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[신입]개발자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54923826&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 용인시 기흥구 신입 대졸↑ 정규직",
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
    "applicantCount": 72,
    "viewCount": 660,
    "geminiSummary": {
      "mission": "'[신입]개발자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "글로우업리즈(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zMykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuq4gOuhnDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "글로우업리즈(주)개발자채용합니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54936215&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력무관 학력무관 정규직",
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
    "applicantCount": 74,
    "viewCount": 675,
    "geminiSummary": {
      "mission": "'글로우업리즈(주)개발자채용합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "이비엠엔지니어링(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zNCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuydtOu5hDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI개발자채용 공고",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54570990&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 마포구 경력무관 대졸↑ 정규직",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 76,
    "viewCount": 690,
    "geminiSummary": {
      "mission": "'AI개발자채용 공고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "크럭스데이타(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zNSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2BrOufrTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "금융IT 솔루션 풀스택개발자채용(신입, 경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54616321&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력무관 대졸↑ 정규직·계약직",
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
    "applicantCount": 78,
    "viewCount": 705,
    "geminiSummary": {
      "mission": "'금융IT 솔루션 풀스택개발자채용(신입, 경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "주식회사 지원금 24",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zNikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyLnTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "대한민국 대표 지원금 플랫폼을 만들[백엔드개발자]를 찾습니다",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54812656&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력무관 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 80,
    "viewCount": 720,
    "geminiSummary": {
      "mission": "'대한민국 대표 지원금 플랫폼을 만들[백엔드개발자]를 찾습니다' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "바로그의원강남점",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zNykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuwlOuhnDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[바로그네트워크]웹개발자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54911646&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 1~5년 학력무관 정규직",
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
    "applicantCount": 82,
    "viewCount": 735,
    "geminiSummary": {
      "mission": "'[바로그네트워크]웹개발자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)더블에치코",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zOCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuNlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "홍대입구 바로 앞 젊은 이커머스 회사개발자모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54924969&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 마포구 신입·경력 학력무관 정규직 3,000 만원",
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
    "applicantCount": 84,
    "viewCount": 750,
    "geminiSummary": {
      "mission": "'홍대입구 바로 앞 젊은 이커머스 회사개발자모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)디코나이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF8zOSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuUlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[㈜디코나이] 방송용 콘텐츠 관리 통합관제플랫폼개발자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54932326&location=ts&searchword=%EA%B0%9C%EB%B0%9C%EC%9E%90&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 경력 3~20년 학력무관 정규직",
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
    "applicantCount": 86,
    "viewCount": 765,
    "geminiSummary": {
      "mission": "'[㈜디코나이] 방송용 콘텐츠 관리 통합관제플랫폼개발자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)머드",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuouDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)머드에서프론트엔드/모바일 풀스택 엔지니어를 찾고 있어요",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54869024&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 마포구 경력무관 학력무관 정규직 3,000 만원",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 88,
    "viewCount": 780,
    "geminiSummary": {
      "mission": "'(주)머드에서프론트엔드/모바일 풀스택 엔지니어를 찾고 있어요' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)슬립포레스트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyKrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "꿀잠닥터를 이어받을프론트엔드개발자를 찾습니다",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54898755&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 동대문구 경력3년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 90,
    "viewCount": 795,
    "geminiSummary": {
      "mission": "'꿀잠닥터를 이어받을프론트엔드개발자를 찾습니다' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)세스코",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyEuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)세스코 IoT 플랫폼개발 리딩(백엔드/프론트엔드) 담당자채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54828990&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강동구 경력10년↑ 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 92,
    "viewCount": 810,
    "geminiSummary": {
      "mission": "'(주)세스코 IoT 플랫폼개발 리딩(백엔드/프론트엔드) 담당자채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)하이브랩",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2VmDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[하이브랩]프론트엔드개발자 채용 (6년차 이상)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54944052&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력6년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 94,
    "viewCount": 825,
    "geminiSummary": {
      "mission": "'[하이브랩]프론트엔드개발자 채용 (6년차 이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)뉴엔에이아이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuJtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[계약직]프론트엔드개발자 채용합니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54671317&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 고양시 일산서구 경력무관 학력무관 계약직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 96,
    "viewCount": 840,
    "geminiSummary": {
      "mission": "'[계약직]프론트엔드개발자 채용합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)티맥스티베로",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2LsDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[신입] SysMasterDB프론트엔드개발(전문연구요원 가능)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54784607&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 신입 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 98,
    "viewCount": 855,
    "geminiSummary": {
      "mission": "'[신입] SysMasterDB프론트엔드개발(전문연구요원 가능)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "엔에이치엔(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyXlOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[NHN Dooray] 협업 서비스프론트엔드개발",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54742604&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력6년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 100,
    "viewCount": 870,
    "geminiSummary": {
      "mission": "'[NHN Dooray] 협업 서비스프론트엔드개발' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)웹젠",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOybuTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[웹젠]프론트엔드개발(경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54923187&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력8년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 102,
    "viewCount": 885,
    "geminiSummary": {
      "mission": "'[웹젠]프론트엔드개발(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)더블미디어",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuNlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드엔지니어 (부산)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54735520&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 해운대구 경력5년↑ 학력무관 정규직",
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
    "applicantCount": 104,
    "viewCount": 900,
    "geminiSummary": {
      "mission": "'프론트엔드엔지니어 (부산)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)띵킹프렌즈",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNDkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF80OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOudtTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[띵킹프렌즈] 웹/앱프론트엔드개발자 (Flutter/React) 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54728378&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력1년↑ 대졸↑ 정규직 3,600 만원",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 106,
    "viewCount": 915,
    "geminiSummary": {
      "mission": "'[띵킹프렌즈] 웹/앱프론트엔드개발자 (Flutter/React) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "넛지헬스케어(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuEm+yngDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[캐시워크]프론트엔드개발 채용전환형 인턴",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54810667&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입 대졸↑ 인턴직",
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
      "React",
      "TypeScript",
      "프론트엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 108,
    "viewCount": 930,
    "geminiSummary": {
      "mission": "'[캐시워크]프론트엔드개발 채용전환형 인턴' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)아이트럭",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyVhDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드하이브리드 앱 개발자 (React / Ionic) 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54569886&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력 5~10년 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 110,
    "viewCount": 945,
    "geminiSummary": {
      "mission": "'프론트엔드하이브리드 앱 개발자 (React / Ionic) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)와탭랩스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyZgDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54717586&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력 3~10년 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 112,
    "viewCount": 960,
    "geminiSummary": {
      "mission": "'프론트엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)와이디엔에스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyZgDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[웹개발]프론트엔드&백엔드 경력자 모집(5년 ~ 15년)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54875362&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 수정구 경력 5~15년 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 114,
    "viewCount": 975,
    "geminiSummary": {
      "mission": "'[웹개발]프론트엔드&백엔드 경력자 모집(5년 ~ 15년)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "헬리오센(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2XrOumrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "헬리오센(주) 3D 웹프론트엔드개발자 부분 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54921734&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력5년↑ 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 116,
    "viewCount": 990,
    "geminiSummary": {
      "mission": "'헬리오센(주) 3D 웹프론트엔드개발자 부분 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)아인잡",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyVhDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자 (경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54839079&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 3~10년 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 118,
    "viewCount": 1005,
    "geminiSummary": {
      "mission": "'프론트엔드개발자 (경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)에듀서브",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[민트영어] 개발파트 백엔드(PHP) &프론트엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54740294&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 경력 2~6년 대졸↑ 정규직·계약직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 120,
    "viewCount": 1020,
    "geminiSummary": {
      "mission": "'[민트영어] 개발파트 백엔드(PHP) &프론트엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)학교종이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2VmTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자 (경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54866014&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "세종특별자치시 경력 2~3년 학력무관 계약직 4,200 만원",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 122,
    "viewCount": 1035,
    "geminiSummary": {
      "mission": "'프론트엔드개발자 (경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)델레오코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuNuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[델레오코리아]프론트엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54784797&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력6년↑ 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 124,
    "viewCount": 1050,
    "geminiSummary": {
      "mission": "'[델레오코리아]프론트엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)델레오코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNTkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF81OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuNuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[플랫폼개발팀]프론트엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54787794&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 6~13년 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 126,
    "viewCount": 1065,
    "geminiSummary": {
      "mission": "'[플랫폼개발팀]프론트엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)피피비스튜디오스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2UvDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[ppb studios]프론트엔드(React Native)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54773706&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 128,
    "viewCount": 1080,
    "geminiSummary": {
      "mission": "'[ppb studios]프론트엔드(React Native)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)칼리시",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOy5vDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[칼리시]프론트엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54596499&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "대전 유성구 경력1년↑ 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 130,
    "viewCount": 1095,
    "geminiSummary": {
      "mission": "'[칼리시]프론트엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)코딧",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOy9lDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자 (React.js 2년이상)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=51067870&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 경력2년↑ 학력무관 정규직",
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
    "applicantCount": 132,
    "viewCount": 1110,
    "geminiSummary": {
      "mission": "'프론트엔드개발자 (React.js 2년이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)헬로디지털",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2XrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자 (경력 2~5년, 기간제)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54710316&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력 2~5년 초대졸↑ 기간제·계약직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 134,
    "viewCount": 1125,
    "geminiSummary": {
      "mission": "'프론트엔드개발자 (경력 2~5년, 기간제)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)엑스홀딩스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXkTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI-Driven프론트엔드엔지니어 / 테크니컬 PM",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54822022&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력 학력무관 정규직·계약직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 136,
    "viewCount": 1140,
    "geminiSummary": {
      "mission": "'AI-Driven프론트엔드엔지니어 / 테크니컬 PM' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)에그풀",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "IT·광고 스타트업프론트엔드개발자 팀원 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54859249&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 안산시 단원구 경력무관 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 138,
    "viewCount": 1155,
    "geminiSummary": {
      "mission": "'IT·광고 스타트업프론트엔드개발자 팀원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "비에스일렉트릭 주식회사",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuu5hOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "비에스일렉트릭에서 에너지관리시스템프론트엔드개발자 모셔요",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54911259&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 과천시 경력 2~4년 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 140,
    "viewCount": 1170,
    "geminiSummary": {
      "mission": "'비에스일렉트릭에서 에너지관리시스템프론트엔드개발자 모셔요' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)클라이브",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2BtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[클라이브]  웹프론트엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54749841&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 중원구 경력무관 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 142,
    "viewCount": 1185,
    "geminiSummary": {
      "mission": "'[클라이브]  웹프론트엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)씽클레어",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyUvTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "웹 개발자 백엔드/프론트엔드중급 계약직 (경력 4년 이상)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54821194&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 경력4년↑ 대졸↑ 기간제·계약직 600 만원",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 144,
    "viewCount": 1200,
    "geminiSummary": {
      "mission": "'웹 개발자 백엔드/프론트엔드중급 계약직 (경력 4년 이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "엔투에이아이 주식회사",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNjkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF82OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyXlO2IrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "26년 하반기 N2AI IT 개발팀프론트엔드개발자(React) 채용.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54727910&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 경력3년↑ 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 146,
    "viewCount": 1215,
    "geminiSummary": {
      "mission": "'26년 하반기 N2AI IT 개발팀프론트엔드개발자(React) 채용.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)디케이닥터",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuUlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자 채용 (경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54837754&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 금천구 경력5년↑ 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 148,
    "viewCount": 1230,
    "geminiSummary": {
      "mission": "'프론트엔드개발자 채용 (경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "텐빌리언",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2FkOu5jDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발 경력 (2~5년)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54787893&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 경력 2~5년 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 150,
    "viewCount": 1245,
    "geminiSummary": {
      "mission": "'프론트엔드개발 경력 (2~5년)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)펫박스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2OqzwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드개발자_5년 이상",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54840071&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 마포구 경력 5~7년 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 152,
    "viewCount": 1260,
    "geminiSummary": {
      "mission": "'프론트엔드개발자_5년 이상' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "주식회사더게임",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyLnTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[더게임]프론트엔드개발자 채용 (정규직)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54520894&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력 3~5년 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 154,
    "viewCount": 1275,
    "geminiSummary": {
      "mission": "'[더게임]프론트엔드개발자 채용 (정규직)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)나나자레",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuCmDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "React / Next.js프론트엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54419894&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 중구 경력 2~5년 학력무관 프리랜서",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 156,
    "viewCount": 1290,
    "geminiSummary": {
      "mission": "'React / Next.js프론트엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "토글랩스(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPu2GoOq4gDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "이커머스 SaaS 소프트웨어프론트엔드개발자님을 찾습니다.",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54729277&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력3년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 158,
    "viewCount": 1305,
    "geminiSummary": {
      "mission": "'이커머스 SaaS 소프트웨어프론트엔드개발자님을 찾습니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "모달리(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuqqOuLrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI 에이전트 서비스프론트엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54772383&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력 2~10년 대졸↑ 정규직",
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
    "applicantCount": 160,
    "viewCount": 1320,
    "geminiSummary": {
      "mission": "'AI 에이전트 서비스프론트엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)모어다임",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuqqDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[웹개발]프론트엔드및 풀 스택 개발자 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54673742&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 용인시 기흥구 경력무관 초대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 162,
    "viewCount": 1335,
    "geminiSummary": {
      "mission": "'[웹개발]프론트엔드및 풀 스택 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)빅링크에이아이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOu5hTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "생성형 AI 빅데이터 마케팅 플랫폼프론트엔드(React) 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54673432&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입·경력 학력무관 정규직",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 1,
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
    "applicantCount": 164,
    "viewCount": 1350,
    "geminiSummary": {
      "mission": "'생성형 AI 빅데이터 마케팅 플랫폼프론트엔드(React) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)시스템노바",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfNzkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF83OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyLnDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "프론트엔드엔지니어(Front-end Engineer)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54726171&location=ts&searchword=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력5년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 166,
    "viewCount": 1365,
    "geminiSummary": {
      "mission": "'프론트엔드엔지니어(Front-end Engineer)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "스트라토",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyKpO2KuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자 경력 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54853074&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력5년↑ 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 168,
    "viewCount": 1380,
    "geminiSummary": {
      "mission": "'백엔드개발자 경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)빌드잇",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOu5jDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[AI/솔루션] Product Engineer/(백엔드개발 2년 이하)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54763590&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 신입·경력 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 170,
    "viewCount": 1395,
    "geminiSummary": {
      "mission": "'[AI/솔루션] Product Engineer/(백엔드개발 2년 이하)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)일주지앤에스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOydvDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "SDM실 하반기 개발자(백엔드· 프론트엔드/퍼블리셔) 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54698122&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 동래구 경력3년↑ 학력무관 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 172,
    "viewCount": 1410,
    "geminiSummary": {
      "mission": "'SDM실 하반기 개발자(백엔드· 프론트엔드/퍼블리셔) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "세무법인샘밀",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyEuOustDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[세무법인샘밀]백엔드웹개발자 경력 채용 (서초역)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54932764&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력3년↑ 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 174,
    "viewCount": 1425,
    "geminiSummary": {
      "mission": "'[세무법인샘밀]백엔드웹개발자 경력 채용 (서초역)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "데이원 주식회사",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuNsOydtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "Python&딥러닝&백엔드/서버개발外 정규직 채용 - 신입사원",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54875243&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 신입 초대졸↑ 정규직 3,200 만원",
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
      "Spring Boot",
      "Java",
      "백엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 176,
    "viewCount": 1440,
    "geminiSummary": {
      "mission": "'Python&딥러닝&백엔드/서버개발外 정규직 채용 - 신입사원' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)디오",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuUlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)디오 AI Platform백엔드/API 개발",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54907642&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강서구 신입·경력 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 178,
    "viewCount": 1455,
    "geminiSummary": {
      "mission": "'(주)디오 AI Platform백엔드/API 개발' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)트윔",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2KuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI 플랫폼백엔드개발자(전문연구요원 가능)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54906318&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 화성시 신입·경력 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 180,
    "viewCount": 1470,
    "geminiSummary": {
      "mission": "'AI 플랫폼백엔드개발자(전문연구요원 가능)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)이너버스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOydtDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자 (신입)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54871744&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 영등포구 신입 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 182,
    "viewCount": 1485,
    "geminiSummary": {
      "mission": "'백엔드개발자 (신입)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)디엑스솔루션즈",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuUlDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "R&D본부 플랫폼팀백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54599124&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경남 창원시 경력무관 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 184,
    "viewCount": 1500,
    "geminiSummary": {
      "mission": "'R&D본부 플랫폼팀백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)비즈비",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfODkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNTlFMEIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF84OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjMTExODI3IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOu5hDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[Java/Spring] 모바일 앱  쇼핑몰백엔드개발",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54824609&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 신입·경력 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 186,
    "viewCount": 1515,
    "geminiSummary": {
      "mission": "'[Java/Spring] 모바일 앱  쇼핑몰백엔드개발' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)에코마린",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85MCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyXkDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "소프트웨어 개발 (백엔드Back-end)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54871504&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "부산 해운대구 경력무관 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 188,
    "viewCount": 1530,
    "geminiSummary": {
      "mission": "'소프트웨어 개발 (백엔드Back-end)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)크루컴퍼니",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwRDk0ODgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85MSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvO2BrDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "Java React.JS 기반백엔드, 프론트엔드 SI 웹 개발자 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54920796&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 신입 학력무관 정규직 3,000 만원",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 190,
    "viewCount": 1545,
    "geminiSummary": {
      "mission": "'Java React.JS 기반백엔드, 프론트엔드 SI 웹 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)유니유니",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMTFENDgiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85MikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOycoDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)유니유니에서 JAVA백엔드개발자를 찾고 있어요",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54876292&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 신입·경력 학력무관 정규직·기간제 3,600 만원",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 192,
    "viewCount": 1560,
    "geminiSummary": {
      "mission": "'(주)유니유니에서 JAVA백엔드개발자를 찾고 있어요' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "나노소프트(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxRTI5M0IiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85MykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuuCmOuFuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "나노소프트(주) iOS 및 Android 앱 개발 -백엔드개발자 우대",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54863967&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "대전 유성구 신입·경력 학력무관 정규직·계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 194,
    "viewCount": 1575,
    "geminiSummary": {
      "mission": "'나노소프트(주) iOS 및 Android 앱 개발 -백엔드개발자 우대' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)넥사코드",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzRUIiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85NCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOuEpTwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "[백엔드]백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54931478&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 금천구 경력3년↑ 대졸↑ 기간제·계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 196,
    "viewCount": 1590,
    "geminiSummary": {
      "mission": "'[백엔드]백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)씨어스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTUiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3QzNBRUQiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85NSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyUqDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자 경력 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54852445&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력 5~20년 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 198,
    "viewCount": 1605,
    "geminiSummary": {
      "mission": "'백엔드개발자 경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)세스코",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMTgyRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85NikiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOyEuDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "(주)세스코 IoT 플랫폼백엔드개발 담당자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54829194&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강동구 경력5년↑ 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 200,
    "viewCount": 1620,
    "geminiSummary": {
      "mission": "'(주)세스코 IoT 플랫폼백엔드개발 담당자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)유비온",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMEI5ODEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85NykiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOycoDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "AI 교육 플랫폼백엔드경력 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54879779&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "충남 천안시 동남구 경력 1~5년 학력무관 프리랜서",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 202,
    "viewCount": 1635,
    "geminiSummary": {
      "mission": "'AI 교육 플랫폼백엔드경력 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "에스엘라이프(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTgiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85OCkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyXkOyKpDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자 담당자 모집",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54840940&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 성동구 경력7년↑ 학력무관 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 204,
    "viewCount": 1650,
    "geminiSummary": {
      "mission": "'백엔드개발자 담당자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)제네시스네스트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfOTkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4QjVDRjYiIHN0b3Atb3BhY2l0eT0iMC44NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMzIiIGZpbGw9InVybCgjZ3JhZF85OSkiIC8+CiAgPHRleHQgeD0iNjQiIHk9IjY2IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUHJldGVuZGFyZCcsICdTZWdvZSBVSScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDQiIGZvbnQtd2VpZ2h0PSI5MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBsZXR0ZXItc3BhY2luZz0iLTEiPuyjvOygnDwvdGV4dD4KPC9zdmc+",
    "companyCategory": "실시간 채용중",
    "title": "Java백엔드개발자 [경력 1~8년]",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54908188&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 용인시 수지구 경력 1~8년 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 206,
    "viewCount": 1665,
    "geminiSummary": {
      "mission": "'Java백엔드개발자 [경력 1~8년]' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "엠아이큐브솔루션(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTAwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTAwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jeg7JWEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[엠아이큐브솔루션]백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54854189&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력5년↑ 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 208,
    "viewCount": 1680,
    "geminiSummary": {
      "mission": "'[엠아이큐브솔루션]백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)인텔리빅스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTAxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTAxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87J24PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[SW개발팀] 출입통제백엔드개발 및 프로젝트 관리 정규직 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54786102&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 서초구 경력5년↑ 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 210,
    "viewCount": 1695,
    "geminiSummary": {
      "mission": "'[SW개발팀] 출입통제백엔드개발 및 프로젝트 관리 정규직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)크레버스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTAyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTAyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87YGsPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[크레버스] AX Planning Team백엔드엔지니어 정규직",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54784989&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 3~10년 고졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 212,
    "viewCount": 1710,
    "geminiSummary": {
      "mission": "'[크레버스] AX Planning Team백엔드엔지니어 정규직' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "매드업",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTAzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTAzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66ek65OcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[개발 본부]백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54616301&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 1~4년 대졸↑ 정규직·전문연구요원",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 214,
    "viewCount": 1725,
    "geminiSummary": {
      "mission": "'[개발 본부]백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)솔트룩스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87IaUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[베트남] 개발차 채용(앱개발자/프론트엔드/백엔드/AI엔지니어)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54685300&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 송파구 경력무관 대졸↑ 정규직",
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
    "applicantCount": 216,
    "viewCount": 1740,
    "geminiSummary": {
      "mission": "'[베트남] 개발차 채용(앱개발자/프론트엔드/백엔드/AI엔지니어)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)하이브랩",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87ZWYPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[하이브랩] Java / Spring백엔드개발자 채용 (6년 이상)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54698506&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력6년↑ 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 218,
    "viewCount": 1755,
    "geminiSummary": {
      "mission": "'[하이브랩] Java / Spring백엔드개발자 채용 (6년 이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "미디어젠(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66+465SUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[미디어젠(주)]백엔드개발자(경력)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54748128&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강서구 경력4년↑ 초대졸↑ 기간제·계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 220,
    "viewCount": 1770,
    "geminiSummary": {
      "mission": "'[미디어젠(주)]백엔드개발자(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)다이퀘스트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO864ukPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[다이퀘스트] AI 서비스백엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54824378&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 송파구 경력5년↑ 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 222,
    "viewCount": 1785,
    "geminiSummary": {
      "mission": "'[다이퀘스트] AI 서비스백엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "패스트레인(여신티켓)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Yyo7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54634029&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강남구 경력 7~13년 학력무관 정규직",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "🔥 오늘 23:59 마감!",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 1,
    "collectedSources": [
      "saramin"
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
    "applicantCount": 224,
    "viewCount": 1800,
    "geminiSummary": {
      "mission": "'백엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)에스티유니타스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTA5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTA5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[ST UNITAS]백엔드개발(계약) 인재 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54570822&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 구로구 경력3년↑ 학력무관 계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 226,
    "viewCount": 1815,
    "geminiSummary": {
      "mission": "'[ST UNITAS]백엔드개발(계약) 인재 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)레인보우로보틱스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTEwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTEwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO866CIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주)레인보우로보틱스 web백엔드개발",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54650330&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "세종특별자치시 경력5년↑ 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 228,
    "viewCount": 1830,
    "geminiSummary": {
      "mission": "'(주)레인보우로보틱스 web백엔드개발' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "(주)사람인에이치에스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTExIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTExKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87IKsPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[국내유명 대기업 계열사 / 정규직] Web백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54814141&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "세종특별자치시 경력5년↑ 대졸↑ 정규직",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 230,
    "viewCount": 1845,
    "geminiSummary": {
      "mission": "'[국내유명 대기업 계열사 / 정규직] Web백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "이도에코원(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTEyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTEyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7J2064+EPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "이도에스테이트 IT사업팀백엔드/ 웹 개발 채용 (단기계약직)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54877109&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 중구 경력7년↑ 초대졸↑ 계약직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 232,
    "viewCount": 1860,
    "geminiSummary": {
      "mission": "'이도에스테이트 IT사업팀백엔드/ 웹 개발 채용 (단기계약직)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "티엔에이치(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTEzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTEzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Yuw7JeUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54753694&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 성남시 분당구 경력 3~5년 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 234,
    "viewCount": 1875,
    "geminiSummary": {
      "mission": "'백엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)엑스페릭스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87JeRPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자 채용",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54709947&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 송파구 경력 5~15년 대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 236,
    "viewCount": 1890,
    "geminiSummary": {
      "mission": "'백엔드개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)인터엑스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87J24PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[울산] SDF백엔드개발자",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54854921&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "울산 중구 신입·경력 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 238,
    "viewCount": 1905,
    "geminiSummary": {
      "mission": "'[울산] SDF백엔드개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)베스텔라랩",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO867KgPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드·인프라 풀스택 엔지니어",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54897052&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "경기 안양시 동안구 경력 2~10년 초대졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 240,
    "viewCount": 1920,
    "geminiSummary": {
      "mission": "'백엔드·인프라 풀스택 엔지니어' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)에스피코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자(4~6년)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54822623&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강서구 경력 4~6년 고졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 242,
    "viewCount": 1935,
    "geminiSummary": {
      "mission": "'백엔드개발자(4~6년)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "(주)에스피코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드개발자(1~3년)",
    "originUrl": "https://www.saramin.co.kr/zf_user/jobs/relay/view?view_type=search&rec_idx=54822617&location=ts&searchword=%EB%B0%B1%EC%97%94%EB%93%9C&searchType=search",
    "experienceLevel": "신입/경력무관",
    "location": "서울 강서구 경력 1~3년 고졸↑ 정규직",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 244,
    "viewCount": 1950,
    "geminiSummary": {
      "mission": "'백엔드개발자(1~3년)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "대한상공회의소",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTE5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTE5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64yA7ZWcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[대한상공회의소] 취업연계 첨단기술 교육생 모집(반도체/AI/응용SW/로봇/스마트제조/IoT)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49896432",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 246,
    "viewCount": 1965,
    "geminiSummary": {
      "mission": "'[대한상공회의소] 취업연계 첨단기술 교육생 모집(반도체/AI/응용SW/로봇/스마트제조/IoT)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "(주)상상력집단",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTIwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTIwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87IOBPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "인디게임 해커톤 멘토를 찾아요(기획, 디자인, 개발)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49792657",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 248,
    "viewCount": 1980,
    "geminiSummary": {
      "mission": "'인디게임 해커톤 멘토를 찾아요(기획, 디자인, 개발)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜휴먼교육센터",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTIxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTIxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Zy066i8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[국비최대무료/취업연계/기숙사제공]AI인공지능/빅데이터/풀스택/부트캠프",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49750169",
    "experienceLevel": "신입/경력",
    "location": "충남",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 250,
    "viewCount": 1995,
    "geminiSummary": {
      "mission": "'[국비최대무료/취업연계/기숙사제공]AI인공지능/빅데이터/풀스택/부트캠프' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "㈜사각코퍼레이션",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTIyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTIyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IKs6rCBPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "중국 소싱·무역 담당자 (상품개발·기획)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917341",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 252,
    "viewCount": 2010,
    "geminiSummary": {
      "mission": "'중국 소싱·무역 담당자 (상품개발·기획)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜넥슨",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTIzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTIzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64Sl7IqoPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[넥슨컴퍼니] 2026 넥토리얼 for Game Programmer",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49843485",
    "experienceLevel": "신입",
    "location": "경기",
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
    "applicantCount": 254,
    "viewCount": 2025,
    "geminiSummary": {
      "mission": "'[넥슨컴퍼니] 2026 넥토리얼 for Game Programmer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "HL Klemove",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SEw8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[HL클레무브] [R&D, 영업, 구매, 생산기술] 2026 하반기 HL그룹 신입사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49895421",
    "experienceLevel": "신입",
    "location": "경기",
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
    "applicantCount": 256,
    "viewCount": 2040,
    "geminiSummary": {
      "mission": "'[HL클레무브] [R&D, 영업, 구매, 생산기술] 2026 하반기 HL그룹 신입사원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜디에스이트레이드",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+65SU7JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[경력] 데이터 사이언티스트 - 수요예측 / 시계열 모델링",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49865298",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 258,
    "viewCount": 2055,
    "geminiSummary": {
      "mission": "'[경력] 데이터 사이언티스트 - 수요예측 / 시계열 모델링' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "한국투자공사",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZWc6rWtPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "한국투자공사 2026년 신입직원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49859689",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 260,
    "viewCount": 2070,
    "geminiSummary": {
      "mission": "'한국투자공사 2026년 신입직원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "(주)인바디",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87J24PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주)인바디 2026 하반기 GBD 신입 채용 - 통합 직무",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49864674",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 262,
    "viewCount": 2085,
    "geminiSummary": {
      "mission": "'(주)인바디 2026 하반기 GBD 신입 채용 - 통합 직무' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "현대해상화재보험㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZiE64yAPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 현대해상 대졸 신입사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908299",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 264,
    "viewCount": 2100,
    "geminiSummary": {
      "mission": "'2026년 현대해상 대졸 신입사원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜우리은행",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTI5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTI5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jqw66asPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 우리은행 채용 (일반 / 전문(통역, 변호사, 회계사, 세무사))",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49849071",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 266,
    "viewCount": 2115,
    "geminiSummary": {
      "mission": "'2026년 우리은행 채용 (일반 / 전문(통역, 변호사, 회계사, 세무사))' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜케이티KT그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTMwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTMwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7LyA7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 KT 대졸신입 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49840603",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 268,
    "viewCount": 2130,
    "geminiSummary": {
      "mission": "'2026년 KT 대졸신입 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜에이피알",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTMxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTMxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JeQ7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026 하반기 에이피알 신입 대규모 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49886710",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 270,
    "viewCount": 2145,
    "geminiSummary": {
      "mission": "'2026 하반기 에이피알 신입 대규모 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜안랩",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTMyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTMyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWI656pPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[안랩] 2026년 9월 신입/경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916989",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 272,
    "viewCount": 2160,
    "geminiSummary": {
      "mission": "'[안랩] 2026년 9월 신입/경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "NC",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTMzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTMzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TkM8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "엔씨소프트 전 부문 수시 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/48921028",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 274,
    "viewCount": 2175,
    "geminiSummary": {
      "mission": "'엔씨소프트 전 부문 수시 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "유비벨록스㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jyg67mEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "유비벨록스 분야별 인원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891339",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 276,
    "viewCount": 2190,
    "geminiSummary": {
      "mission": "'유비벨록스 분야별 인원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "솔탑",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IaU7YORPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜솔탑 2026년도 위성/항공/경영 분야 신입/경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49884726",
    "experienceLevel": "신입/경력",
    "location": "세종",
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
    "applicantCount": 278,
    "viewCount": 2205,
    "geminiSummary": {
      "mission": "'㈜솔탑 2026년도 위성/항공/경영 분야 신입/경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "웍스피어(유)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JuN7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[웍스피어] FE개발 (3년이상)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49907118",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 280,
    "viewCount": 2220,
    "geminiSummary": {
      "mission": "'[웍스피어] FE개발 (3년이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "웍스피어(유)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JuN7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[웍스피어] BE개발 (3년이상)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49907121",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 282,
    "viewCount": 2235,
    "geminiSummary": {
      "mission": "'[웍스피어] BE개발 (3년이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜세화",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IS47ZmUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜세화 2026년도 하반기 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49872590",
    "experienceLevel": "신입/경력",
    "location": "대전",
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
    "applicantCount": 284,
    "viewCount": 2250,
    "geminiSummary": {
      "mission": "'㈜세화 2026년도 하반기 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "샘표식품㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTM5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTM5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IOY7ZGcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026 샘표식품 신입/경력 수시채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917517",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 286,
    "viewCount": 2265,
    "geminiSummary": {
      "mission": "'2026 샘표식품 신입/경력 수시채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜KB데이타시스템KB금융그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+S0I8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "KB데이타시스템 IT분야 경력직원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908157",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 288,
    "viewCount": 2280,
    "geminiSummary": {
      "mission": "'KB데이타시스템 IT분야 경력직원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "크레신㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YGs66CIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "HW(HW, 무선HW), ERP, 자동화 설계, 영업, 기술 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49904920",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 290,
    "viewCount": 2295,
    "geminiSummary": {
      "mission": "'HW(HW, 무선HW), ERP, 자동화 설계, 영업, 기술 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "솔탑",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IaU7YORPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜솔탑 2026년도 위성 연구소 분야 신입/경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49884728",
    "experienceLevel": "신입/경력",
    "location": "세종",
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
    "applicantCount": 292,
    "viewCount": 2310,
    "geminiSummary": {
      "mission": "'㈜솔탑 2026년도 위성 연구소 분야 신입/경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "대원제약(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64yA7JuQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "대원제약 DNA 채용 (신입/경력 수시 채용)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916443",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 294,
    "viewCount": 2325,
    "geminiSummary": {
      "mission": "'대원제약 DNA 채용 (신입/경력 수시 채용)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜ SIMPAC",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U0k8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[SIMPAC GROUP] 각 부문별 신입/경력사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49895403",
    "experienceLevel": "신입/경력",
    "location": "인천",
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
    "applicantCount": 296,
    "viewCount": 2340,
    "geminiSummary": {
      "mission": "'[SIMPAC GROUP] 각 부문별 신입/경력사원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜ABB코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QUI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "㈜ABB코리아 각 부문 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902095",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 298,
    "viewCount": 2355,
    "geminiSummary": {
      "mission": "'㈜ABB코리아 각 부문 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "포스코플로우㈜포스코그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Y+s7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 포스코플로우 신입/경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49910467",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 300,
    "viewCount": 2370,
    "geminiSummary": {
      "mission": "'2026년 하반기 포스코플로우 신입/경력직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
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
    "companyName": "테슬라코리아",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YWM7IqsPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Tesla Korea 2026 대규모 공개 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49889651",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 302,
    "viewCount": 2385,
    "geminiSummary": {
      "mission": "'Tesla Korea 2026 대규모 공개 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜포스코퓨처엠포스코그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Y+s7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "포스코퓨처엠 신입/경력사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902326",
    "experienceLevel": "신입/경력",
    "location": "경북",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 304,
    "viewCount": 2400,
    "geminiSummary": {
      "mission": "'포스코퓨처엠 신입/경력사원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜우신화장품",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTQ5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTQ5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jqw7IugPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "우신화장품 관리부[인사] 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49926060",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 306,
    "viewCount": 2415,
    "geminiSummary": {
      "mission": "'우신화장품 관리부[인사] 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜시몬스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTUwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTUwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Iuc66qsPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 각 부문별 신입/경력 채용공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49901481",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 308,
    "viewCount": 2430,
    "geminiSummary": {
      "mission": "'2026년 하반기 각 부문별 신입/경력 채용공고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜범천정밀",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTUxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTUxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+67KU7LKcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜범천정밀 하반기 각 부문별 신입 및 경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49887451",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 310,
    "viewCount": 2445,
    "geminiSummary": {
      "mission": "'㈜범천정밀 하반기 각 부문별 신입 및 경력직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
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
    "companyName": "디팜스테크",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTUyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTUyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+65SU7YycPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜디팜스테크 각 부문 신입/경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49825723",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 312,
    "viewCount": 2460,
    "geminiSummary": {
      "mission": "'㈜디팜스테크 각 부문 신입/경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "모나용평㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTUzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTUzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66qo64KYPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 모나용평 신입/경력사원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908448",
    "experienceLevel": "신입/경력",
    "location": "강원",
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
    "applicantCount": 314,
    "viewCount": 2475,
    "geminiSummary": {
      "mission": "'2026년 모나용평 신입/경력사원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜비아이매트릭스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+67mE7JWEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 비아이매트릭스 하반기 신입 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49843194",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 316,
    "viewCount": 2490,
    "geminiSummary": {
      "mission": "'2026년 비아이매트릭스 하반기 신입 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "동아에스티",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64+Z7JWEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "동아ST 2026년 하반기 정기채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49911615",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 318,
    "viewCount": 2505,
    "geminiSummary": {
      "mission": "'동아ST 2026년 하반기 정기채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜모백스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66qo67CxPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 하반기 공개채용 [건설현장 공무/건축설계/기술영업/안전관리]",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49895345",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 320,
    "viewCount": 2520,
    "geminiSummary": {
      "mission": "'2026년 하반기 공개채용 [건설현장 공무/건축설계/기술영업/안전관리]' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜다우기술다우키움그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64uk7JqwPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "다우기술 경력·신입 대규모 인재영입",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49866612",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 322,
    "viewCount": 2535,
    "geminiSummary": {
      "mission": "'다우기술 경력·신입 대규모 인재영입' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "안국약품㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWI6rWtPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "안국약품㈜ 9월 신입 및 경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49911443",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 324,
    "viewCount": 2550,
    "geminiSummary": {
      "mission": "'안국약품㈜ 9월 신입 및 경력직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜윈스테크넷",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTU5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTU5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JyI7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "9월 윈스테크넷 월간채용(신입)-보안관제, CERT, 개발, 영업, 클라우드MSP",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49911986",
    "experienceLevel": "신입",
    "location": "경기",
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
    "applicantCount": 326,
    "viewCount": 2565,
    "geminiSummary": {
      "mission": "'9월 윈스테크넷 월간채용(신입)-보안관제, CERT, 개발, 영업, 클라우드MSP' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "제주신화월드㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTYwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTYwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KCc7KO8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "제주신화월드 하반기 사원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49905261",
    "experienceLevel": "신입/경력",
    "location": "제주",
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
    "applicantCount": 328,
    "viewCount": 2580,
    "geminiSummary": {
      "mission": "'제주신화월드 하반기 사원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜한솔케미칼",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTYxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTYxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZWc7IaUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026 하반기 한솔케미칼 경력사원 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49856286",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 330,
    "viewCount": 2595,
    "geminiSummary": {
      "mission": "'2026 하반기 한솔케미칼 경력사원 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "한국국제협력단",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTYyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTYyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZWc6rWtPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "2026년 2차 KOICA 코디네이터 모집·선발 공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49893209",
    "experienceLevel": "경력",
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
    "applicantCount": 332,
    "viewCount": 2610,
    "geminiSummary": {
      "mission": "'2026년 2차 KOICA 코디네이터 모집·선발 공고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "웍스피어(유)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTYzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTYzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JuN7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[웍스피어] 잡코리아 알바몬 PO (1년 이상)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49877226",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 334,
    "viewCount": 2625,
    "geminiSummary": {
      "mission": "'[웍스피어] 잡코리아 알바몬 PO (1년 이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "웍스피어(유)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JuN7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[웍스피어] AI 매칭 엔진 PO (5년이상)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49901713",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 336,
    "viewCount": 2640,
    "geminiSummary": {
      "mission": "'[웍스피어] AI 매칭 엔진 PO (5년이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "㈜에스앤아이코퍼레이션",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JeQ7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[경력] 시설관리(전기, 기계) 정규직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49852084",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 338,
    "viewCount": 2655,
    "geminiSummary": {
      "mission": "'[경력] 시설관리(전기, 기계) 정규직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜글로우서울",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+6riA66GcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[글로우서울/본사] 시공팀 인테리어·공무 견적 담당 채용 - 경력",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49917820",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 340,
    "viewCount": 2670,
    "geminiSummary": {
      "mission": "'[글로우서울/본사] 시공팀 인테리어·공무 견적 담당 채용 - 경력' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
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
    "companyName": "웍스피어(유)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JuN7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[웍스피어] DataOps (3년이상)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49835779",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 342,
    "viewCount": 2685,
    "geminiSummary": {
      "mission": "'[웍스피어] DataOps (3년이상)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "㈜미디어로그LG그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66+465SUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "미디어로그(LG그룹) 채용연계형 인턴(신입) 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891743",
    "experienceLevel": "신입",
    "location": "서울",
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
    "applicantCount": 344,
    "viewCount": 2700,
    "geminiSummary": {
      "mission": "'미디어로그(LG그룹) 채용연계형 인턴(신입) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "인하대학교 산학협력단",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTY5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTY5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7J247ZWYPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "AI기반 미래자동차 자율주행 소프트웨어 개발자 전액무료 교육 (2026 KDT)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891189",
    "experienceLevel": "신입/경력",
    "location": "인천",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 346,
    "viewCount": 2715,
    "geminiSummary": {
      "mission": "'AI기반 미래자동차 자율주행 소프트웨어 개발자 전액무료 교육 (2026 KDT)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "휴먼교육센터",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTcwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTcwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Zy066i8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[국비최대무료/기숙사무료/취업연계]AI/빅데이터/풀스택/KDT단기심화",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49745394",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 348,
    "viewCount": 2730,
    "geminiSummary": {
      "mission": "'[국비최대무료/기숙사무료/취업연계]AI/빅데이터/풀스택/KDT단기심화' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "한국ICT인재개발원",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTcxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTcxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZWc6rWtPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[국비지원IT취업교육]인공지능/풀스택/웹앱/JAVA파이썬/프론트엔드/백엔드/빅데이터 외 취업과정",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908190",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
    "applicantCount": 350,
    "viewCount": 2745,
    "geminiSummary": {
      "mission": "'[국비지원IT취업교육]인공지능/풀스택/웹앱/JAVA파이썬/프론트엔드/백엔드/빅데이터 외 취업과정' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "주식회사 솔트룩스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTcyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTcyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87IudPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[베트남] 개발자 채용(앱개발자/프론트엔드/백엔드/AI엔지니어)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49785149",
    "experienceLevel": "경력",
    "location": "서울",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 352,
    "viewCount": 2760,
    "geminiSummary": {
      "mission": "'[베트남] 개발자 채용(앱개발자/프론트엔드/백엔드/AI엔지니어)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "㈜삼성에이엑스아이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTczIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTczKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IK87ISxPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[숙식교육무료]삼성SDS RPA 채용연계 AI부트캠프",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49517249",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 354,
    "viewCount": 2775,
    "geminiSummary": {
      "mission": "'[숙식교육무료]삼성SDS RPA 채용연계 AI부트캠프' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "해태제과식품(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZW07YOcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "해태제과식품(주) 채용연계형 인턴 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49916380",
    "experienceLevel": "신입",
    "location": "경기",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 356,
    "viewCount": 2790,
    "geminiSummary": {
      "mission": "'해태제과식품(주) 채용연계형 인턴 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "엠비씨(MBC)아카데미 컴퓨터교육센터",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jeg67mEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[서울/경기/인천/대전/부산] 최대 전액지원 AI 무료 취업교육생과정 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49592545",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 358,
    "viewCount": 2805,
    "geminiSummary": {
      "mission": "'[서울/경기/인천/대전/부산] 최대 전액지원 AI 무료 취업교육생과정 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "㈜아이엠뱅크",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWE7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "안드로이드 개발자 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49807386",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 360,
    "viewCount": 2820,
    "geminiSummary": {
      "mission": "'안드로이드 개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "주성엔지니어링㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO87ISxPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[기간 연장] 2026년 8월 신입 Engineer(R&D, C/S, 제조) 집중 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49861249",
    "experienceLevel": "신입",
    "location": "경기",
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
    "applicantCount": 362,
    "viewCount": 2835,
    "geminiSummary": {
      "mission": "'[기간 연장] 2026년 8월 신입 Engineer(R&D, C/S, 제조) 집중 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "크림(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YGs66a8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Partner Backend 개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49762829",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 364,
    "viewCount": 2850,
    "geminiSummary": {
      "mission": "'Partner Backend 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "유니닥스㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTc5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTc5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jyg64uIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "유니닥스㈜ 개발자 채용(경력)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49904572",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 366,
    "viewCount": 2865,
    "geminiSummary": {
      "mission": "'유니닥스㈜ 개발자 채용(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜시옷",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTgwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTgwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Iuc7Ji3PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49888581",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 368,
    "viewCount": 2880,
    "geminiSummary": {
      "mission": "'개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜그렙",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTgxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTgxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+6re466CZPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[프로그래머스] 백엔드 온라인 교육생 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49914201",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 370,
    "viewCount": 2895,
    "geminiSummary": {
      "mission": "'[프로그래머스] 백엔드 온라인 교육생 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜젠솔소프트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTgyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTgyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KCg7IaUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "소프트웨어 개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49891048",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 372,
    "viewCount": 2910,
    "geminiSummary": {
      "mission": "'소프트웨어 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜쎄트렉아이",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTgzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTgzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7I6E7Yq4PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "쎄트렉아이 2026 하반기 신입 채용, SI Future-Ship 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49861140",
    "experienceLevel": "신입",
    "location": "대전",
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
    "applicantCount": 374,
    "viewCount": 2925,
    "geminiSummary": {
      "mission": "'쎄트렉아이 2026 하반기 신입 채용, SI Future-Ship 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜인스웨이브",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7J247IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[정규직] 웹스퀘어 UI공통 개발자 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49833682",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 376,
    "viewCount": 2940,
    "geminiSummary": {
      "mission": "'[정규직] 웹스퀘어 UI공통 개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜마크로젠",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66eI7YGsPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "㈜마크로젠 JAVA개발자 경력 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49853128",
    "experienceLevel": "경력",
    "location": "인천",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 378,
    "viewCount": 2955,
    "geminiSummary": {
      "mission": "'㈜마크로젠 JAVA개발자 경력 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜퓨전소프트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZOo7KCEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "SI 및 웹 개발자 채용(프리랜서)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49749499",
    "experienceLevel": "경력",
    "location": "대구",
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
    "applicantCount": 380,
    "viewCount": 2970,
    "geminiSummary": {
      "mission": "'SI 및 웹 개발자 채용(프리랜서)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "크림(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YGs66a8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Android 서비스 개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49762329",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 382,
    "viewCount": 2985,
    "geminiSummary": {
      "mission": "'Android 서비스 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜컴퓨존",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Lu07ZOoPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "PHP웹개발자 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49701185",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 384,
    "viewCount": 3000,
    "geminiSummary": {
      "mission": "'PHP웹개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜에스앤케이인스티튜트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTg5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTg5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JeQ7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "PC 애플리케이션 개발자 모집(경력직)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49715072",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 386,
    "viewCount": 3015,
    "geminiSummary": {
      "mission": "'PC 애플리케이션 개발자 모집(경력직)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜세윤씨앤에스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTkwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTkwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7IS47JykPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "JAVA 및 마이크로소프트(Microsoft) ERP (D365 F&O) 경력 개발자",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49757741",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 388,
    "viewCount": 3030,
    "geminiSummary": {
      "mission": "'JAVA 및 마이크로소프트(Microsoft) ERP (D365 F&O) 경력 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "클레온",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTkxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTkxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YG066CIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[클레온] AI 디지털 휴먼 Android 개발자 (5년차 이상 SDK 개발)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49909100",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 390,
    "viewCount": 3045,
    "geminiSummary": {
      "mission": "'[클레온] AI 디지털 휴먼 Android 개발자 (5년차 이상 SDK 개발)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "(주)미래아이엔씨",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTkyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTkyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KO866+4PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주)미래아이엔씨 개발자 모집(경력)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49869890",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 392,
    "viewCount": 3060,
    "geminiSummary": {
      "mission": "'(주)미래아이엔씨 개발자 모집(경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜아이엠뱅크",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTkzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTkzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWE7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "뱅킹 개발자 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49807459",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 394,
    "viewCount": 3075,
    "geminiSummary": {
      "mission": "'뱅킹 개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "와디즈㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JmA65SUPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Java 백엔드 개발자 - 회원 개발",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49745937",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 396,
    "viewCount": 3090,
    "geminiSummary": {
      "mission": "'Java 백엔드 개발자 - 회원 개발' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "아이아이컴바인드",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWE7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[GENTLE MONSTER] Unreal Engine 클라이언트 개발자",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49613956",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 398,
    "viewCount": 3105,
    "geminiSummary": {
      "mission": "'[GENTLE MONSTER] Unreal Engine 클라이언트 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "엘에스웨어㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JeY7JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "소프트웨어 경력 개발자 모집공고",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49822928",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 400,
    "viewCount": 3120,
    "geminiSummary": {
      "mission": "'소프트웨어 경력 개발자 모집공고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "네이버웹툰네이버그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64Sk7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "경력 개발자 인재 Pool",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49648616",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 402,
    "viewCount": 3135,
    "geminiSummary": {
      "mission": "'경력 개발자 인재 Pool' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜퓨전소프트",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZOo7KCEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "공공 LMS 풀스택 개발자 채용(재택 프리랜서)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49786395",
    "experienceLevel": "경력",
    "location": "대구",
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
    "applicantCount": 404,
    "viewCount": 3150,
    "geminiSummary": {
      "mission": "'공공 LMS 풀스택 개발자 채용(재택 프리랜서)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "크림(주)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMTk5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMTk5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7YGs66a8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Service Backend 개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49762398",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 406,
    "viewCount": 3165,
    "geminiSummary": {
      "mission": "'Service Backend 개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜동양건설산업",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjAwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjAwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64+Z7JaRPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[라인그룹] 앱 개발자, 토목 경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49862421",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 408,
    "viewCount": 3180,
    "geminiSummary": {
      "mission": "'[라인그룹] 앱 개발자, 토목 경력직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "카카오모빌리티카카오그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjAxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjAxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Lm07Lm0PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[카카오모빌리티] 내비게이션 3D 지도 렌더링 엔진 개발자",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49538288",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 410,
    "viewCount": 3195,
    "geminiSummary": {
      "mission": "'[카카오모빌리티] 내비게이션 3D 지도 렌더링 엔진 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
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
    "companyName": "나이스평가정보㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjAyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjAyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64KY7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[NICE평가정보] 2026년 하반기 신입/경력 직원 수시채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49861942",
    "experienceLevel": "신입/경력",
    "location": "서울",
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
      "IT/인터넷",
      "신입환영"
    ],
    "isBookmarked": false,
    "applicantCount": 412,
    "viewCount": 3210,
    "geminiSummary": {
      "mission": "'[NICE평가정보] 2026년 하반기 신입/경력 직원 수시채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜데이타솔루션",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjAzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjAzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+642w7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[중견기업/IT] 데이타솔루션 VDI포털 개발자(경력) 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49900807",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 414,
    "viewCount": 3225,
    "geminiSummary": {
      "mission": "'[중견기업/IT] 데이타솔루션 VDI포털 개발자(경력) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
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
    "companyName": "㈜제니엘",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7KCc64uIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[제니엘그룹] IT ERP개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49713393",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 416,
    "viewCount": 3240,
    "geminiSummary": {
      "mission": "'[제니엘그룹] IT ERP개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜씨어스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JSo7Ja0PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[경력] PyQt GUI 개발자",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49879182",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 418,
    "viewCount": 3255,
    "geminiSummary": {
      "mission": "'[경력] PyQt GUI 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜픽소니어",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZS97IaMPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "소프트웨어 개발자(C#)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49729941",
    "experienceLevel": "경력",
    "location": "대전",
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
    "applicantCount": 420,
    "viewCount": 3270,
    "geminiSummary": {
      "mission": "'소프트웨어 개발자(C#)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "메가존클라우드㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66mU6rCAPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "SW 개발자 (ServiceNow 솔루션) 채용(신입/경력)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49800891",
    "experienceLevel": "신입/경력",
    "location": "경기",
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
    "applicantCount": 422,
    "viewCount": 3285,
    "geminiSummary": {
      "mission": "'SW 개발자 (ServiceNow 솔루션) 채용(신입/경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜그라비티",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+6re46528PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[그라비티] 풀스택 개발자 경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49842552",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 424,
    "viewCount": 3300,
    "geminiSummary": {
      "mission": "'[그라비티] 풀스택 개발자 경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜인라이플",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjA5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjA5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7J246528PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[인라이플] 프론트엔드 개발자(Vue)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49778973",
    "experienceLevel": "경력",
    "location": "서울",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 426,
    "viewCount": 3315,
    "geminiSummary": {
      "mission": "'[인라이플] 프론트엔드 개발자(Vue)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "피에스앤마케팅(주)SK 그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjEwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjEwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZS87JeQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[피에스앤마케팅] 웹개발자(백엔드) 경력 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49865064",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 428,
    "viewCount": 3330,
    "geminiSummary": {
      "mission": "'[피에스앤마케팅] 웹개발자(백엔드) 경력 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜다날",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjExIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjExKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64uk64KgPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주)다날 [경력] MVNO 서비스 BE 개발자",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49908271",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 430,
    "viewCount": 3345,
    "geminiSummary": {
      "mission": "'(주)다날 [경력] MVNO 서비스 BE 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜온품",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjEyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjEyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Jio7ZKIPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "풀스택 웹개발자 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49789143",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 432,
    "viewCount": 3360,
    "geminiSummary": {
      "mission": "'풀스택 웹개발자 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜핑거",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjEzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjEzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ZWR6rGwPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(프리랜서) 웹스퀘어 기반 뱅킹 시스템(통합단말) Java 개발자 모집합니다.",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49822308",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 434,
    "viewCount": 3375,
    "geminiSummary": {
      "mission": "'(프리랜서) 웹스퀘어 기반 뱅킹 시스템(통합단말) Java 개발자 모집합니다.' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜에이피알",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JeQ7J20PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[IT] 백엔드 개발자 경력사원 모집",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49716061",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 436,
    "viewCount": 3390,
    "geminiSummary": {
      "mission": "'[IT] 백엔드 개발자 경력사원 모집' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "모비젠",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66qo67mEPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주) 모비젠 생성형 AI Agent 개발자 채용 (정규직)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49871186",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 438,
    "viewCount": 3405,
    "geminiSummary": {
      "mission": "'(주) 모비젠 생성형 AI Agent 개발자 채용 (정규직)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "㈜카카오스타일",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Lm07Lm0PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "백엔드 개발자 (물류 시스템)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49530013",
    "experienceLevel": "경력",
    "location": "경기",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 440,
    "viewCount": 3420,
    "geminiSummary": {
      "mission": "'백엔드 개발자 (물류 시스템)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "㈜리드코프",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+66as65OcPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "(주)리드데이터시스템즈 AI서비스 개발자 모집((주)리드코프 계열사)",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49902418",
    "experienceLevel": "경력",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 442,
    "viewCount": 3435,
    "geminiSummary": {
      "mission": "'(주)리드데이터시스템즈 AI서비스 개발자 모집((주)리드코프 계열사)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
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
    "companyName": "알서포트㈜",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7JWM7IScPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "[코스닥 상장사] macOS 개발자 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49700978",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 444,
    "viewCount": 3450,
    "geminiSummary": {
      "mission": "'[코스닥 상장사] macOS 개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜딜라이브MBK파트너스그룹",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjE5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjE5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+65Sc6528PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "개발자(계약직/3개월/외부 프로젝트 연장시 연장 가능) 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49758469",
    "experienceLevel": "경력",
    "location": "서울",
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
    "applicantCount": 446,
    "viewCount": 3465,
    "geminiSummary": {
      "mission": "'개발자(계약직/3개월/외부 프로젝트 연장시 연장 가능) 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "㈜포스콤",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjIwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjIwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Y+s7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "의료기기 펌웨어 (FW) 개발자 경력직 채용",
    "originUrl": "https://www.jobkorea.co.kr/Recruit/GI_Read/49614015",
    "experienceLevel": "경력",
    "location": "경기",
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
    "applicantCount": 448,
    "viewCount": 3480,
    "geminiSummary": {
      "mission": "'의료기기 펌웨어 (FW) 개발자 경력직 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Cloudflare",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjIxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjIxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q2w8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "VoidZero Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/voidzero-engineer-at-cloudflare-4451214079",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 450,
    "viewCount": 3495,
    "geminiSummary": {
      "mission": "'VoidZero Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Speechify",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjIyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjIyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U3A8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Platform - Busan, South Korea",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-platform-busan-south-korea-at-speechify-4462127288",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "부산",
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
    "applicantCount": 452,
    "viewCount": 3510,
    "geminiSummary": {
      "mission": "'Software Engineer, Platform - Busan, South Korea' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "JNPMEDI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjIzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjIzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Sk48L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Back-end Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/back-end-software-engineer-at-jnpmedi-4460208243",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "송도국제도시",
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
    "applicantCount": 454,
    "viewCount": 3525,
    "geminiSummary": {
      "mission": "'Back-end Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "PUBLISH Protocol",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+UFU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "서비스 개발자",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90-at-publish-protocol-4436969492",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 456,
    "viewCount": 3540,
    "geminiSummary": {
      "mission": "'서비스 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Hopae",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-at-hopae-4454930804",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 458,
    "viewCount": 3555,
    "geminiSummary": {
      "mission": "'Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "토스증권 (Toss Securities)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Yag7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Node.js Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/node-js-developer-at-toss-securities-4429364046",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 460,
    "viewCount": 3570,
    "geminiSummary": {
      "mission": "'Node.js Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "Toss Place(토스플레이스)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Node.js Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/node-js-developer-at-toss-place-%ED%86%A0%EC%8A%A4%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4-4429356076",
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
    "applicantCount": 462,
    "viewCount": 3585,
    "geminiSummary": {
      "mission": "'Node.js Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "Bear Robotics",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-at-bear-robotics-4161557340",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 464,
    "viewCount": 3600,
    "geminiSummary": {
      "mission": "'Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Vertical Bar - Process Analytics & DevOps for Oracle NetSuite",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjI5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjI5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Fullstack Engineer - Seoul, On-site",
    "originUrl": "https://kr.linkedin.com/jobs/view/fullstack-engineer-seoul-on-site-at-vertical-bar-process-analytics-devops-for-oracle-netsuite-4459758496",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 466,
    "viewCount": 3615,
    "geminiSummary": {
      "mission": "'Fullstack Engineer - Seoul, On-site' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "FriendliAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjMwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjMwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RnI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer - Full Stack",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-full-stack-at-friendliai-4454907120",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 468,
    "viewCount": 3630,
    "geminiSummary": {
      "mission": "'Software Engineer - Full Stack' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "SearchApi",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjMxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjMxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U2U8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Browser / Kernel Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/browser-kernel-engineer-at-searchapi-4431704709",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 470,
    "viewCount": 3645,
    "geminiSummary": {
      "mission": "'Browser / Kernel Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "PUBLISH Protocol",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjMyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjMyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+UFU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "DID 개발자",
    "originUrl": "https://kr.linkedin.com/jobs/view/did-%EA%B0%9C%EB%B0%9C%EC%9E%90-at-publish-protocol-4436979201",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
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
    "applicantCount": 472,
    "viewCount": 3660,
    "geminiSummary": {
      "mission": "'DID 개발자' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Ericsson",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjMzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjMzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RXI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "IPECS - Backend Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/ipecs-backend-developer-at-ericsson-4429261176",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
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
    "applicantCount": 474,
    "viewCount": 3675,
    "geminiSummary": {
      "mission": "'IPECS - Backend Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "ujet.cx",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+dWo8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer - Full Stack",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-full-stack-at-ujet-cx-4436836921",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 476,
    "viewCount": 3690,
    "geminiSummary": {
      "mission": "'Software Engineer - Full Stack' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "eBay",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+ZUI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Search Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/search-engineer-at-ebay-4456562412",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 478,
    "viewCount": 3705,
    "geminiSummary": {
      "mission": "'Search Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Tata Consultancy Services",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VGE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "개발자– Oracle, PL/SQL",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EA%B0%9C%EB%B0%9C%EC%9E%90%E2%80%93-oracle-pl-sql-at-tata-consultancy-services-4460222163",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "인천, 대한민국",
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
    "applicantCount": 480,
    "viewCount": 3720,
    "geminiSummary": {
      "mission": "'개발자– Oracle, PL/SQL' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Fieldguide",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Rmk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer - All Levels (Korea)",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-all-levels-korea-at-fieldguide-4421245060",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 482,
    "viewCount": 3735,
    "geminiSummary": {
      "mission": "'Software Engineer - All Levels (Korea)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Electronic Arts (EA)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RWw8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Client Engineer - Unannounced Project",
    "originUrl": "https://kr.linkedin.com/jobs/view/client-engineer-unannounced-project-at-electronic-arts-ea-4452532696",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 484,
    "viewCount": 3750,
    "geminiSummary": {
      "mission": "'Client Engineer - Unannounced Project' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "NeuroFusion Inc",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjM5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjM5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Back End Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/back-end-developer-at-neurofusion-inc-4444060387",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 486,
    "viewCount": 3765,
    "geminiSummary": {
      "mission": "'Back End Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Edwards Vacuum",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RWQ8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Sr. Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/sr-software-engineer-at-edwards-vacuum-4447694271",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "아산",
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
    "applicantCount": 488,
    "viewCount": 3780,
    "geminiSummary": {
      "mission": "'Sr. Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "SAP",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U0E8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Platform Engineer (Full-stack)",
    "originUrl": "https://kr.linkedin.com/jobs/view/platform-engineer-full-stack-at-sap-4446974983",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울 인천 지역",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 490,
    "viewCount": 3795,
    "geminiSummary": {
      "mission": "'Platform Engineer (Full-stack)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "AUMOVIO",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QVU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer – Orin/Thor ADAS in Architecture and Network Solutions R&D | AUMOVIO Korea",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-%E2%80%93-orin-thor-adas-in-architecture-and-network-solutions-r-d-aumovio-korea-at-aumovio-4452458864",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 492,
    "viewCount": 3810,
    "geminiSummary": {
      "mission": "'Software Engineer – Orin/Thor ADAS in Architecture and Network Solutions R&D | AUMOVIO Korea' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "서울로보틱스",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7ISc7Jq4PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer- Autonomy",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-autonomy-at-seoul-robotics-4460192661",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
    "applicantCount": 494,
    "viewCount": 3825,
    "geminiSummary": {
      "mission": "'Software Engineer- Autonomy' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "SecuriON - 시큐리온",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U2U8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "백엔드(Back-end)개발자 채용",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EB%B0%B1%EC%97%94%EB%93%9C-back-end-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B1%84%EC%9A%A9-at-securion-%EC%8B%9C%ED%81%90%EB%A6%AC%EC%98%A8-4460955070",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울 인천 지역",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 496,
    "viewCount": 3840,
    "geminiSummary": {
      "mission": "'백엔드(Back-end)개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
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
    "companyName": "CLO Virtual Fashion",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0w8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, R&D",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-r-d-at-clo-virtual-fashion-3999021527",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 498,
    "viewCount": 3855,
    "geminiSummary": {
      "mission": "'Software Engineer, R&D' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "당근",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64u56re8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Frontend - 로컬 잡스",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-frontend-%EB%A1%9C%EC%BB%AC-%EC%9E%A1%EC%8A%A4-at-karrot-4450861105",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 500,
    "viewCount": 3870,
    "geminiSummary": {
      "mission": "'Software Engineer, Frontend - 로컬 잡스' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
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
    "companyName": "Duruper",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RHU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-at-duruper-4458052963",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성환",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
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
    "applicantCount": 502,
    "viewCount": 3885,
    "geminiSummary": {
      "mission": "'Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "Tata Consultancy Services",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VGE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Application Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-application-engineer-at-tata-consultancy-services-4460961228",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 504,
    "viewCount": 3900,
    "geminiSummary": {
      "mission": "'Software Application Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
    "companyName": "42dot",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjQ5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjQ5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+NDI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "System Framework Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/system-framework-engineer-at-42dot-4443321782",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 506,
    "viewCount": 3915,
    "geminiSummary": {
      "mission": "'System Framework Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
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
  },
  {
    "id": "real-job-251",
    "companyName": "당근",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjUwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjUwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+64u56re8PC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Backend - 광고",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-backend-%EA%B4%91%EA%B3%A0-at-karrot-4452526603",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 508,
    "viewCount": 3930,
    "geminiSummary": {
      "mission": "'Software Engineer, Backend - 광고' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-250",
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
    "id": "real-job-252",
    "companyName": "imweb (아임웹)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjUxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjUxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+aW08L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Back-end Engineer (Core)",
    "originUrl": "https://kr.linkedin.com/jobs/view/back-end-engineer-core-at-%EC%95%84%EC%9E%84%EC%9B%B9-imweb-4462795110",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 510,
    "viewCount": 3945,
    "geminiSummary": {
      "mission": "'Back-end Engineer (Core)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-251",
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
    "id": "real-job-253",
    "companyName": "FuriosaAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjUyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjUyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RnU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Compiler (Front-end)",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-compiler-front-end-at-furiosaai-4454170468",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 512,
    "viewCount": 3960,
    "geminiSummary": {
      "mission": "'Software Engineer, Compiler (Front-end)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-252",
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
    "id": "real-job-254",
    "companyName": "Virev AI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjUzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjUzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Vmk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Founding engineer (Product, full-stack)",
    "originUrl": "https://kr.linkedin.com/jobs/view/founding-engineer-product-full-stack-at-virev-ai-4445426464",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울 인천 지역",
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
    "applicantCount": 514,
    "viewCount": 3975,
    "geminiSummary": {
      "mission": "'Founding engineer (Product, full-stack)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-253",
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
    "id": "real-job-255",
    "companyName": "AMD",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QU08L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff Software Development Technology Engineer - Games",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-software-development-technology-engineer-games-at-amd-4438458138",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울 인천 지역",
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
    "applicantCount": 516,
    "viewCount": 3990,
    "geminiSummary": {
      "mission": "'Staff Software Development Technology Engineer - Games' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-254",
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
    "id": "real-job-256",
    "companyName": "UNISOC",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VU48L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "LXC容器开发工程师8242",
    "originUrl": "https://kr.linkedin.com/jobs/view/lxc%E5%AE%B9%E5%99%A8%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%888242-at-unisoc-4440979114",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "안산",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 518,
    "viewCount": 4005,
    "geminiSummary": {
      "mission": "'LXC容器开发工程师8242' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-255",
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
    "id": "real-job-257",
    "companyName": "Fever",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Senior Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/senior-software-engineer-at-fever-4258441265",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 520,
    "viewCount": 4020,
    "geminiSummary": {
      "mission": "'Senior Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-256",
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
    "id": "real-job-258",
    "companyName": "Hopae",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Senior Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/senior-software-engineer-at-hopae-4454941081",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 522,
    "viewCount": 4035,
    "geminiSummary": {
      "mission": "'Senior Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-257",
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
    "id": "real-job-259",
    "companyName": "Ericsson",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RXI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "SW Developer - Radio Unit",
    "originUrl": "https://kr.linkedin.com/jobs/view/sw-developer-radio-unit-at-ericsson-4451109304",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 524,
    "viewCount": 4050,
    "geminiSummary": {
      "mission": "'SW Developer - Radio Unit' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-258",
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
    "id": "real-job-260",
    "companyName": "CJ ENM ENTERTAINMENT DIV.",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjU5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjU5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0o8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[CJ ENM] Mnet Plus_Frontend Engineer_경력채용",
    "originUrl": "https://kr.linkedin.com/jobs/view/cj-enm-mnet-plus-frontend-engineer-%EA%B2%BD%EB%A0%A5%EC%B1%84%EC%9A%A9-at-cj-enm-entertainment-div-4347682108",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 526,
    "viewCount": 4065,
    "geminiSummary": {
      "mission": "'[CJ ENM] Mnet Plus_Frontend Engineer_경력채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-259",
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
    "id": "real-job-261",
    "companyName": "BGROW",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjYwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjYwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Qkc8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[BGROW] AI 디벨로퍼 부문 (신입/경력)",
    "originUrl": "https://kr.linkedin.com/jobs/view/bgrow-ai-%EB%94%94%EB%B2%A8%EB%A1%9C%ED%8D%BC-%EB%B6%80%EB%AC%B8-%EC%8B%A0%EC%9E%85-%EA%B2%BD%EB%A0%A5-at-bgrow-4443091875",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 528,
    "viewCount": 4080,
    "geminiSummary": {
      "mission": "'[BGROW] AI 디벨로퍼 부문 (신입/경력)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-260",
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
    "id": "real-job-262",
    "companyName": "Swif.ai",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjYxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjYxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U3c8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Frontend Engineer (Vue, Browser Extensions, AI Agent)",
    "originUrl": "https://kr.linkedin.com/jobs/view/frontend-engineer-vue-browser-extensions-ai-agent-at-swif-ai-4280003481",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 530,
    "viewCount": 4095,
    "geminiSummary": {
      "mission": "'Frontend Engineer (Vue, Browser Extensions, AI Agent)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-261",
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
    "id": "real-job-263",
    "companyName": "hyperstar AI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjYyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjYyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+aHk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "시니어 백엔드 / 풀스택 개발자 (Senior Backend / Full-Stack Engineer)",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%8B%9C%EB%8B%88%EC%96%B4-%EB%B0%B1%EC%97%94%EB%93%9C-%ED%92%80%EC%8A%A4%ED%83%9D-%EA%B0%9C%EB%B0%9C%EC%9E%90-senior-backend-full-stack-engineer-at-hyperstar-ai-4460012443",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 532,
    "viewCount": 4110,
    "geminiSummary": {
      "mission": "'시니어 백엔드 / 풀스택 개발자 (Senior Backend / Full-Stack Engineer)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-262",
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
    "id": "real-job-264",
    "companyName": "Sonatus",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjYzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjYzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer - Customer Integration",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-customer-integration-at-sonatus-4439980699",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울 인천 지역",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 534,
    "viewCount": 4125,
    "geminiSummary": {
      "mission": "'Software Engineer - Customer Integration' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-263",
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
    "id": "real-job-265",
    "companyName": "delight.ai",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+ZGU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, AI Agent",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-ai-agent-at-delight-ai-4450481657",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 536,
    "viewCount": 4140,
    "geminiSummary": {
      "mission": "'Software Engineer, AI Agent' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-264",
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
    "id": "real-job-266",
    "companyName": "FuriosaAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RnU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Senior Software Engineer, Inference Engine (Platform Software)",
    "originUrl": "https://kr.linkedin.com/jobs/view/senior-software-engineer-inference-engine-platform-software-at-furiosaai-4454155715",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 538,
    "viewCount": 4155,
    "geminiSummary": {
      "mission": "'Senior Software Engineer, Inference Engine (Platform Software)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-265",
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
    "id": "real-job-267",
    "companyName": "ActAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QWM8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "iOS Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/ios-software-engineer-at-actai-4461386153",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
    "applicantCount": 540,
    "viewCount": 4170,
    "geminiSummary": {
      "mission": "'iOS Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-266",
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
    "id": "real-job-268",
    "companyName": "DALPHA",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+REE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "AI Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/ai-engineer-at-dalpha-4454787337",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 542,
    "viewCount": 4185,
    "geminiSummary": {
      "mission": "'AI Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-267",
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
    "id": "real-job-269",
    "companyName": "Commvault",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer - Backend",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-backend-at-commvault-4439989774",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 544,
    "viewCount": 4200,
    "geminiSummary": {
      "mission": "'Software Engineer - Backend' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-268",
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
    "id": "real-job-270",
    "companyName": "MediaTek",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjY5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjY5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TWU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "GNSS Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/gnss-software-engineer-at-mediatek-4437330891",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 546,
    "viewCount": 4215,
    "geminiSummary": {
      "mission": "'GNSS Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-269",
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
    "id": "real-job-271",
    "companyName": "LVIS",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjcwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjcwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TFY8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Backend Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/backend-software-engineer-at-lvis-4434953668",
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
    "applicantCount": 548,
    "viewCount": 4230,
    "geminiSummary": {
      "mission": "'Backend Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-270",
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
    "id": "real-job-272",
    "companyName": "Playtag",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjcxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjcxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+UGw8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Backend Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/backend-engineer-at-playtag-4445615810",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 550,
    "viewCount": 4245,
    "geminiSummary": {
      "mission": "'Backend Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-271",
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
    "id": "real-job-273",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjcyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjcyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff, Back-end Engineer (Advertiser Platform)",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-back-end-engineer-advertiser-platform-at-coupang-4410461803",
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
    "applicantCount": 552,
    "viewCount": 4260,
    "geminiSummary": {
      "mission": "'Staff, Back-end Engineer (Advertiser Platform)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-272",
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
    "id": "real-job-274",
    "companyName": "5010 Technologies",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjczIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjczKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+NTA8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "퀀트 리서처",
    "originUrl": "https://kr.linkedin.com/jobs/view/%ED%80%80%ED%8A%B8-%EB%A6%AC%EC%84%9C%EC%B2%98-at-5010-technologies-4461725554",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 554,
    "viewCount": 4275,
    "geminiSummary": {
      "mission": "'퀀트 리서처' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-273",
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
    "id": "real-job-275",
    "companyName": "AIM AI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QUk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Forward Deployed Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/forward-deployed-engineer-at-aim-ai-4384387548",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
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
    "applicantCount": 556,
    "viewCount": 4290,
    "geminiSummary": {
      "mission": "'Forward Deployed Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-274",
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
    "id": "real-job-276",
    "companyName": "Harper",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SGE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Forward Deployed Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/forward-deployed-engineer-at-harper-4461939908",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
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
    "applicantCount": 558,
    "viewCount": 4305,
    "geminiSummary": {
      "mission": "'Forward Deployed Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-275",
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
    "id": "real-job-277",
    "companyName": "American Bureau of Shipping (ABS)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QW08L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Engineer I, Senior, Technology",
    "originUrl": "https://kr.linkedin.com/jobs/view/engineer-i-senior-technology-at-american-bureau-of-shipping-abs-4459843771",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "부산",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 560,
    "viewCount": 4320,
    "geminiSummary": {
      "mission": "'Engineer I, Senior, Technology' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-276",
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
    "id": "real-job-278",
    "companyName": "Fieldguide",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Rmk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "AI Engineer (Korea)",
    "originUrl": "https://kr.linkedin.com/jobs/view/ai-engineer-korea-at-fieldguide-4421227964",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 562,
    "viewCount": 4335,
    "geminiSummary": {
      "mission": "'AI Engineer (Korea)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-277",
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
    "id": "real-job-279",
    "companyName": "Beyond Honeycomb",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Artificial Intelligence Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/artificial-intelligence-engineer-at-beyond-honeycomb-4453503447",
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
    "applicantCount": 564,
    "viewCount": 4350,
    "geminiSummary": {
      "mission": "'Artificial Intelligence Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-278",
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
    "id": "real-job-280",
    "companyName": "VMIC AVIATION",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjc5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjc5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Vk08L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "에어스트림(Air Stream) R&D 기획자/개발자 채용",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%97%90%EC%96%B4%EC%8A%A4%ED%8A%B8%EB%A6%BC-air-stream-r-d-%EA%B8%B0%ED%9A%8D%EC%9E%90-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B1%84%EC%9A%A9-at-vmic-aviation-4460224665",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 566,
    "viewCount": 4365,
    "geminiSummary": {
      "mission": "'에어스트림(Air Stream) R&D 기획자/개발자 채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-279",
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
    "id": "real-job-281",
    "companyName": "gehealthcare",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjgwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjgwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Z2U8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-software-engineer-at-ge-healthcare-4430463431",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
    "applicantCount": 568,
    "viewCount": 4380,
    "geminiSummary": {
      "mission": "'Staff Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-280",
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
    "id": "real-job-282",
    "companyName": "Neon",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjgxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjgxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Forward Deployed Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/forward-deployed-engineer-at-neon-4447573950",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "대한민국",
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
    "applicantCount": 570,
    "viewCount": 4395,
    "geminiSummary": {
      "mission": "'Forward Deployed Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-281",
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
    "id": "real-job-283",
    "companyName": "Quest Global",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjgyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjgyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+UXU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "AUTOSAR BSW development",
    "originUrl": "https://kr.linkedin.com/jobs/view/autosar-bsw-development-at-quest-global-4319555151",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 572,
    "viewCount": 4410,
    "geminiSummary": {
      "mission": "'AUTOSAR BSW development' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-282",
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
    "id": "real-job-284",
    "companyName": "Speechify",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjgzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjgzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+U3A8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Data Infrastructure & Acquisition - Seoul, South Korea",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-data-infrastructure-acquisition-seoul-south-korea-at-speechify-4460370373",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 574,
    "viewCount": 4425,
    "geminiSummary": {
      "mission": "'Software Engineer, Data Infrastructure & Acquisition - Seoul, South Korea' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-283",
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
    "id": "real-job-285",
    "companyName": "Bucketplace (오늘의집)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QnU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Fullstack Engineer, Payment",
    "originUrl": "https://kr.linkedin.com/jobs/view/fullstack-engineer-payment-at-bucketplace-ohouse-4342910335",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 576,
    "viewCount": 4440,
    "geminiSummary": {
      "mission": "'Fullstack Engineer, Payment' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-284",
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
    "id": "real-job-286",
    "companyName": "Toss Bank(토스뱅크)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Server Developer (여신)",
    "originUrl": "https://kr.linkedin.com/jobs/view/server-developer-%EC%97%AC%EC%8B%A0-at-toss-bank-%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC-4429356068",
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
    "applicantCount": 578,
    "viewCount": 4455,
    "geminiSummary": {
      "mission": "'Server Developer (여신)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-285",
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
    "id": "real-job-287",
    "companyName": "토스증권 (Toss Securities)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Yag7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Server Developer (Market Platform)",
    "originUrl": "https://kr.linkedin.com/jobs/view/server-developer-market-platform-at-toss-securities-4429349073",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 580,
    "viewCount": 4470,
    "geminiSummary": {
      "mission": "'Server Developer (Market Platform)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-286",
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
    "id": "real-job-288",
    "companyName": "Toss Bank(토스뱅크)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Server Developer (Product)",
    "originUrl": "https://kr.linkedin.com/jobs/view/server-developer-product-at-toss-bank-%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC-4429365057",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 582,
    "viewCount": 4485,
    "geminiSummary": {
      "mission": "'Server Developer (Product)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-287",
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
    "id": "real-job-289",
    "companyName": "Bucketplace (오늘의집)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QnU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Backend Engineer, Ads",
    "originUrl": "https://kr.linkedin.com/jobs/view/backend-engineer-ads-at-bucketplace-ohouse-4462159980",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
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
    "applicantCount": 584,
    "viewCount": 4500,
    "geminiSummary": {
      "mission": "'Backend Engineer, Ads' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-288",
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
    "id": "real-job-290",
    "companyName": "Toss Bank(토스뱅크)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjg5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjg5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+VG88L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Frontend Developer (Product)",
    "originUrl": "https://kr.linkedin.com/jobs/view/frontend-developer-product-at-toss-bank-%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC-4460242901",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 586,
    "viewCount": 4515,
    "geminiSummary": {
      "mission": "'Frontend Developer (Product)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-289",
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
    "id": "real-job-291",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjkwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjkwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff, Back-end Engineer (Traffic Management)",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-back-end-engineer-traffic-management-at-coupang-4463322523",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 588,
    "viewCount": 4530,
    "geminiSummary": {
      "mission": "'Staff, Back-end Engineer (Traffic Management)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-290",
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
    "id": "real-job-292",
    "companyName": "42dot",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjkxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjkxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+NDI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Media Framework Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/media-framework-engineer-at-42dot-4443329500",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 590,
    "viewCount": 4545,
    "geminiSummary": {
      "mission": "'Media Framework Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-291",
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
    "id": "real-job-293",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjkyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjkyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff, Back-end Engineer (Rocket Pay)",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-back-end-engineer-rocket-pay-at-coupang-4454499583",
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
    "applicantCount": 592,
    "viewCount": 4560,
    "geminiSummary": {
      "mission": "'Staff, Back-end Engineer (Rocket Pay)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-292",
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
    "id": "real-job-294",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjkzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjkzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Sr-Staff Backend Engineer (Core Member & Infra Platform Team)",
    "originUrl": "https://kr.linkedin.com/jobs/view/sr-staff-backend-engineer-core-member-infra-platform-team-at-coupang-4457697359",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
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
      "Spring Boot",
      "Java",
      "백엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 594,
    "viewCount": 4575,
    "geminiSummary": {
      "mission": "'Sr-Staff Backend Engineer (Core Member & Infra Platform Team)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-293",
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
    "id": "real-job-295",
    "companyName": "BJAK",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Qko8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Lead Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/lead-software-engineer-at-bjak-4459678457",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 596,
    "viewCount": 4590,
    "geminiSummary": {
      "mission": "'Lead Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-294",
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
    "id": "real-job-296",
    "companyName": "CJ OLIVE YOUNG",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0o8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Back-end Engineer (공통영역개선)",
    "originUrl": "https://kr.linkedin.com/jobs/view/back-end-engineer-%EA%B3%B5%ED%86%B5%EC%98%81%EC%97%AD%EA%B0%9C%EC%84%A0-at-cj-olive-young-4436497382",
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
    "applicantCount": 598,
    "viewCount": 4605,
    "geminiSummary": {
      "mission": "'Back-end Engineer (공통영역개선)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-295",
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
    "id": "real-job-297",
    "companyName": "Hyundai Motor Company",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SHk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Development of Mobile Robot Application Software",
    "originUrl": "https://kr.linkedin.com/jobs/view/development-of-mobile-robot-application-software-at-hyundai-motor-company-4451274690",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
    "applicantCount": 600,
    "viewCount": 4620,
    "geminiSummary": {
      "mission": "'Development of Mobile Robot Application Software' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-296",
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
    "id": "real-job-298",
    "companyName": "CLO Virtual Fashion",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0w8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Frontend Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/frontend-developer-at-clo-virtual-fashion-4398113283",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 602,
    "viewCount": 4635,
    "geminiSummary": {
      "mission": "'Frontend Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-297",
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
    "id": "real-job-299",
    "companyName": "토스증권 (Toss Securities)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7Yag7IqkPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Frontend Developer (2026년 커뮤니티 대규모 채용)",
    "originUrl": "https://kr.linkedin.com/jobs/view/frontend-developer-2026%EB%85%84-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EB%8C%80%EA%B7%9C%EB%AA%A8-%EC%B1%84%EC%9A%A9-at-toss-securities-4460244857",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 604,
    "viewCount": 4650,
    "geminiSummary": {
      "mission": "'Frontend Developer (2026년 커뮤니티 대규모 채용)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-298",
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
    "id": "real-job-300",
    "companyName": "CJ OLIVE YOUNG",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMjk5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMjk5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0o8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "커머스플랫폼유닛 Front-end 개발채용",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%BB%A4%EB%A8%B8%EC%8A%A4%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9C%A0%EB%8B%9B-front-end-%EA%B0%9C%EB%B0%9C%EC%B1%84%EC%9A%A9-at-cj-olive-young-4429713238",
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
    "applicantCount": 606,
    "viewCount": 4665,
    "geminiSummary": {
      "mission": "'커머스플랫폼유닛 Front-end 개발채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-299",
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
    "id": "real-job-301",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzAwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzAwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Staff Frontend Engineer (Coupang Eats)",
    "originUrl": "https://kr.linkedin.com/jobs/view/staff-frontend-engineer-coupang-eats-at-coupang-4443306386",
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
      "React",
      "TypeScript",
      "프론트엔드"
    ],
    "isBookmarked": false,
    "applicantCount": 608,
    "viewCount": 4680,
    "geminiSummary": {
      "mission": "'Staff Frontend Engineer (Coupang Eats)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "React",
        "TypeScript"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-300",
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
    "id": "real-job-302",
    "companyName": "Coupang",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzAxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzAxKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q288L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[Coupang Pay] Senior Staff, Back-end Engineer (New Fintech Product Engineering)",
    "originUrl": "https://kr.linkedin.com/jobs/view/coupang-pay-senior-staff-back-end-engineer-new-fintech-product-engineering-at-coupang-4439492750",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 610,
    "viewCount": 4695,
    "geminiSummary": {
      "mission": "'[Coupang Pay] Senior Staff, Back-end Engineer (New Fintech Product Engineering)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-301",
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
    "id": "real-job-303",
    "companyName": "MUSINSA 무신사",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzAyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzAyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TVU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Backend Engineer (SCM Platform)",
    "originUrl": "https://kr.linkedin.com/jobs/view/backend-engineer-scm-platform-at-musinsa-%EB%AC%B4%EC%8B%A0%EC%82%AC-4463351224",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
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
    "applicantCount": 612,
    "viewCount": 4710,
    "geminiSummary": {
      "mission": "'Backend Engineer (SCM Platform)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Spring Boot",
        "Java"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-302",
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
    "id": "real-job-304",
    "companyName": "FuriosaAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzAzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzAzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RnU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Kernel Programming",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-kernel-programming-at-furiosaai-4454175458",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
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
    "applicantCount": 614,
    "viewCount": 4725,
    "geminiSummary": {
      "mission": "'Software Engineer, Kernel Programming' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-303",
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
    "id": "real-job-305",
    "companyName": "Harper",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SGE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Founding Engineer, AI Agent",
    "originUrl": "https://kr.linkedin.com/jobs/view/founding-engineer-ai-agent-at-harper-4434102794",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 616,
    "viewCount": 4740,
    "geminiSummary": {
      "mission": "'Founding Engineer, AI Agent' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-304",
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
    "id": "real-job-306",
    "companyName": "42dot",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+NDI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Update Engineer(Software Update Application)",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-update-engineer-software-update-application-at-42dot-4414522760",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/17(목) 마감",
    "deadlineDateStr": "2026.09.17(목) 23:59",
    "deadlineDaysLeft": 12,
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
    "applicantCount": 618,
    "viewCount": 4755,
    "geminiSummary": {
      "mission": "'Software Update Engineer(Software Update Application)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-305",
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
    "id": "real-job-307",
    "companyName": "Hyundai Autoever (현대오토에버)",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+SHk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[SDx] Service Engineer - 스마트팩토리 시스템(스마트태그) 개발 및 운영",
    "originUrl": "https://kr.linkedin.com/jobs/view/sdx-service-engineer-%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8C%A9%ED%86%A0%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%83%9C%EA%B7%B8-%EA%B0%9C%EB%B0%9C-%EB%B0%8F-%EC%9A%B4%EC%98%81-at-hyundai-autoever-4426917613",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "울산, 대한민국",
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
    "applicantCount": 620,
    "viewCount": 4770,
    "geminiSummary": {
      "mission": "'[SDx] Service Engineer - 스마트팩토리 시스템(스마트태그) 개발 및 운영' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-306",
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
    "id": "real-job-308",
    "companyName": "FriendliAI",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBEOTQ4OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMEQ5NDg4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+RnI8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer – AI Inference Engine",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-%E2%80%93-ai-inference-engine-at-friendliai-4404274188",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 622,
    "viewCount": 4785,
    "geminiSummary": {
      "mission": "'Software Engineer – AI Inference Engine' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-307",
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
    "id": "real-job-309",
    "companyName": "CJ OLIVE YOUNG",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0UxMUQ0OCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRTExRDQ4IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0o8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "AI Engineer (추천)",
    "originUrl": "https://kr.linkedin.com/jobs/view/ai-engineer-%EC%B6%94%EC%B2%9C-at-cj-olive-young-4429700454",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
      "Python",
      "SQL",
      "데이터/AI"
    ],
    "isBookmarked": false,
    "applicantCount": 624,
    "viewCount": 4800,
    "geminiSummary": {
      "mission": "'AI Engineer (추천)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-308",
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
    "id": "real-job-310",
    "companyName": "Bear Robotics",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzA5IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFFMjkzQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUUyOTNCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzA5KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Senior Software Engineer",
    "originUrl": "https://kr.linkedin.com/jobs/view/senior-software-engineer-at-bear-robotics-4278556431",
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
    "applicantCount": 626,
    "viewCount": 4815,
    "geminiSummary": {
      "mission": "'Senior Software Engineer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-309",
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
    "id": "real-job-311",
    "companyName": "Bear Robotics",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzEwIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI1NjNFQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M0VCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzEwKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Systems Software Engineer (Linux Platform)",
    "originUrl": "https://kr.linkedin.com/jobs/view/systems-software-engineer-linux-platform-at-bear-robotics-4411324046",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
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
    "applicantCount": 628,
    "viewCount": 4830,
    "geminiSummary": {
      "mission": "'Systems Software Engineer (Linux Platform)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-310",
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
    "id": "real-job-312",
    "companyName": "채널톡",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzExIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzExKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+7LGE64SQPC90ZXh0Pgo8L3N2Zz4=",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer, Senior",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-senior-at-channel-talk-4460867390",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "강남구",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 630,
    "viewCount": 4845,
    "geminiSummary": {
      "mission": "'Software Engineer, Senior' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-311",
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
    "id": "real-job-313",
    "companyName": "DEEPX",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzEyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxODJGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzE4MkY2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzEyKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+REU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[SW] Android BSP",
    "originUrl": "https://kr.linkedin.com/jobs/view/sw-android-bsp-at-deepx-4437986734",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "성남",
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
      "소프트웨어",
      "IT/인터넷"
    ],
    "isBookmarked": false,
    "applicantCount": 632,
    "viewCount": 4860,
    "geminiSummary": {
      "mission": "'[SW] Android BSP' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-312",
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
    "id": "real-job-314",
    "companyName": "KRAFTON Inc.",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzEzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTBCOTgxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzEzKSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+S1I8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "[KRAFTON JUNGLE] 크래프톤 정글 SW Engineer (1년 이상 / 계약직)",
    "originUrl": "https://kr.linkedin.com/jobs/view/krafton-jungle-%ED%81%AC%EB%9E%98%ED%94%84%ED%86%A4-%EC%A0%95%EA%B8%80-sw-engineer-1%EB%85%84-%EC%9D%B4%EC%83%81-%EA%B3%84%EC%95%BD%EC%A7%81-at-krafton-inc-4456145877",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "분당",
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
    "applicantCount": 634,
    "viewCount": 4875,
    "geminiSummary": {
      "mission": "'[KRAFTON JUNGLE] 크래프톤 정글 SW Engineer (1년 이상 / 계약직)' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-313",
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
    "id": "real-job-315",
    "companyName": "Lam Research",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzE0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNjM2NkYxIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzE0KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+TGE8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer Sys 2",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-sys-2-at-lam-research-4398101792",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "용인",
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
    "applicantCount": 636,
    "viewCount": 4890,
    "geminiSummary": {
      "mission": "'Software Engineer Sys 2' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-314",
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
    "id": "real-job-316",
    "companyName": "CJ OLIVE YOUNG",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzE1IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzE1KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0o8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "엔터프라이즈플랫폼유닛 Front-end 개발채용",
    "originUrl": "https://kr.linkedin.com/jobs/view/%EC%97%94%ED%84%B0%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9C%A0%EB%8B%9B-front-end-%EA%B0%9C%EB%B0%9C%EC%B1%84%EC%9A%A9-at-cj-olive-young-4456706073",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/13(일) 마감",
    "deadlineDateStr": "2026.09.13(일) 23:59",
    "deadlineDaysLeft": 8,
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
    "applicantCount": 638,
    "viewCount": 4905,
    "geminiSummary": {
      "mission": "'엔터프라이즈플랫폼유닛 Front-end 개발채용' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-315",
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
    "id": "real-job-317",
    "companyName": "AIA생명",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzE2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0VDNDg5OSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzE2KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QUk8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Generative AI Systems Developer",
    "originUrl": "https://kr.linkedin.com/jobs/view/generative-ai-systems-developer-at-aia-korea-4451609695",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울, 대한민국",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/14(월) 마감",
    "deadlineDateStr": "2026.09.14(월) 23:59",
    "deadlineDaysLeft": 9,
    "collectedSources": [
      "linkedin"
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
    "applicantCount": 640,
    "viewCount": 4920,
    "geminiSummary": {
      "mission": "'Generative AI Systems Developer' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "Python",
        "SQL"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-316",
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
    "id": "real-job-318",
    "companyName": "CLO Virtual Fashion",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzE3IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1OUUwQiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjU5RTBCIiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzE3KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiMxMTE4MjciIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+Q0w8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Software Engineer (Alternative Military Service_전문연구요원), R&D",
    "originUrl": "https://kr.linkedin.com/jobs/view/software-engineer-alternative-military-service-%EC%A0%84%EB%AC%B8%EC%97%B0%EA%B5%AC%EC%9A%94%EC%9B%90-r-d-at-clo-virtual-fashion-3839936710",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/15(화) 마감",
    "deadlineDateStr": "2026.09.15(화) 23:59",
    "deadlineDaysLeft": 10,
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
    "applicantCount": 642,
    "viewCount": 4935,
    "geminiSummary": {
      "mission": "'Software Engineer (Alternative Military Service_전문연구요원), R&D' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-317",
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
    "id": "real-job-319",
    "companyName": "Bear Robotics",
    "companyLogo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRfMzE4IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRDNyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDI4NEM3IiBzdG9wLW9wYWNpdHk9IjAuODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjMyIiBmaWxsPSJ1cmwoI2dyYWRfMzE4KSIgLz4KICA8dGV4dCB4PSI2NCIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdQcmV0ZW5kYXJkJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9IjkwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGxldHRlci1zcGFjaW5nPSItMSI+QmU8L3RleHQ+Cjwvc3ZnPg==",
    "companyCategory": "실시간 채용중",
    "title": "Robotics Software Engineer, Navigation",
    "originUrl": "https://kr.linkedin.com/jobs/view/robotics-software-engineer-navigation-at-bear-robotics-4419824006",
    "experienceLevel": "경력무관 / 주니어 우대",
    "location": "서울",
    "salary": "회사내규에 따름 (초봉 협의가능)",
    "deadlineText": "📅 ~09/16(수) 마감",
    "deadlineDateStr": "2026.09.16(수) 23:59",
    "deadlineDaysLeft": 11,
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
    "applicantCount": 644,
    "viewCount": 4950,
    "geminiSummary": {
      "mission": "'Robotics Software Engineer, Navigation' 포지션 핵심 비즈니스 로직 설계 및 실무 역량 발휘",
      "requirements": "유관 전공 또는 포트폴리오를 보유한 신입/주니어 지원자",
      "cultureAndBenefits": "4대보험, 자율 연차, 유연 출퇴근제, 자기계발비 및 고사양 장비 지원",
      "generatedAt": "굿잡 AI 실시간 분석 및 정제 완료",
      "keywordHighlights": [
        "정규직",
        "소프트웨어",
        "IT/인터넷"
      ]
    },
    "blindReviews": [
      {
        "id": "rev-real-318",
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
  }
];
