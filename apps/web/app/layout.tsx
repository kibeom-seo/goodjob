import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "굿잡 (GoodJob) - 취준생을 위한 스마트 채용 큐레이션 & 익명 라운지",
  description: "원티드, 점핏, 프로그래머스, 인크루트 공고를 실시간 통합 중복 제거! 자소서 마감 D-Day, 진짜 AI 매칭률, 현직자 익명 조언까지. Good Job! 당신의 첫 합격을 응원합니다.",
  keywords: [
    "굿잡", "GoodJob", "goodjob", "취업", "채용공고", "개발자 취업", "IT 채용", 
    "신입 개발자", "원티드", "점핏", "프로그래머스", "인크루트", "로켓펀치",
    "자소서 마감일", "D-Day", "취업 매칭률", "익명 커뮤니티", "직장인 라운지", "연봉 정보"
  ],
  authors: [{ name: "GoodJob Team" }],
  openGraph: {
    title: "굿잡 (GoodJob) - 스마트 채용 큐레이션 & 선배 라운지",
    description: "중복 광고 없는 클린 채용 정보와 24시간 미답변 없는 AI 멘토링 케어. 지금 바로 내 스펙 매칭률을 확인해보세요!",
    url: "https://www.goodjob.co.kr",
    siteName: "굿잡 (GoodJob)",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
