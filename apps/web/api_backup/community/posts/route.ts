import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve(process.cwd(), 'data/community_posts.json');

function ensureDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    const initialPosts = [
      {
        id: 'post-1',
        category: 'interview',
        categoryLabel: '면접·서류 후기',
        title: '현대오토에버 백엔드 1차 기술면접 후기 및 예상 질문 공유합니다.',
        content: '어제 면접 보고 왔습니다. 주로 Kafka 대용량 트래픽 처리 경험과 동시성 제어(Redis Lock)에 대해 집요하게 물어보시더군요. CS 전공 지식(OS 가상메모리, 인덱스 동작원리)도 꽤 비중 있게 다뤄졌습니다. 준비하시는 분들 포트폴리오 기술 질문 확실히 잡고 가세요!',
        authorTag: '판교 IT 테크 현직자',
        authorCompanyBadge: '현대오토에버 인증',
        createdAt: '10분 전',
        likes: 42,
        commentsCount: 2,
        views: 680,
        comments: [
          {
            id: 'c-1',
            authorTag: '취준생 라이언 🦁',
            content: '와 정말 필요한 정보였는데 감사합니다! 혹시 라이브 코딩테스트 난이도는 어떠셨나요?',
            createdAt: '8분 전',
            likes: 3
          },
          {
            id: 'c-2',
            authorTag: '판교 IT 테크 현직자',
            content: '라이브 코딩은 프로그래머스 Lv.2~3 수준의 구현 및 문자열 조작 위주였습니다. 긴장만 안 하시면 풀 수 있어요.',
            createdAt: '5분 전',
            likes: 5
          }
        ]
      },
      {
        id: 'post-2',
        category: 'company_blind',
        categoryLabel: '기업 비하인드·연봉',
        title: '요즘 스타트업 개발팀 연봉 테이블 & 포괄임금제 폐지 현황',
        content: '신입 기준 강남/판교 테크 스타트업 초봉은 4,000~4,800선으로 형성되어 있습니다. 요즘은 무늬만 야근시키는 곳은 취준생들도 기피해서 자율 출퇴근 + 비포괄임금제로 전환하는 추세가 확실하네요. 공고 볼 때 야근수당 별도 지급인지 꼭 확인하세요.',
        authorTag: '스타트업 5년차 리드',
        authorCompanyBadge: '강남 스타트업 인증',
        createdAt: '1시간 전',
        likes: 85,
        commentsCount: 1,
        views: 1240,
        comments: [
          {
            id: 'c-3',
            authorTag: '취준생 멘티',
            content: '공고에 포괄인지 명시 안 된 곳이 많은데 면접 때 물어봐도 감점 안 될까요?',
            createdAt: '30분 전',
            likes: 4
          }
        ]
      }
    ];
    fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
    fs.writeFileSync(dataFilePath, JSON.stringify(initialPosts, null, 2), 'utf-8');
  }
}

// GET: 게시글 목록 조회
export async function GET() {
  try {
    ensureDataFile();
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    const posts = JSON.parse(content);
    return NextResponse.json({ success: true, data: posts });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// POST: 게시글 등록
export async function POST(request: Request) {
  try {
    ensureDataFile();
    const body = await request.json();
    const { title, content, category, authorTag, authorBadge } = body;

    if (!title || !content) {
      return NextResponse.json({ success: false, message: '제목과 내용은 필수입니다.' }, { status: 400 });
    }

    const posts = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    const categoryLabels: Record<string, string> = {
      interview: '면접·서류 후기',
      company_blind: '기업 비하인드·연봉',
      talk: '취준 넋두리·위로',
      career_advice: '현직자 커리어 조언'
    };

    const newPost = {
      id: `post-${Date.now()}`,
      category: category || 'interview',
      categoryLabel: categoryLabels[category] || '취준 이야기',
      title,
      content,
      authorTag: authorTag || '취준생 멘티 🦁',
      authorCompanyBadge: authorBadge || '굿잡 익명 인증',
      createdAt: '방금 전',
      likes: 1,
      commentsCount: 0,
      views: 1,
      comments: []
    };

    posts.unshift(newPost);
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2), 'utf-8');

    return NextResponse.json({ success: true, data: newPost });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
