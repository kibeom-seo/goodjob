'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Flame, 
  PenSquare, 
  ShieldCheck, 
  Search, 
  ThumbsUp, 
  CheckCircle2, 
  Building2, 
  Send, 
  Sparkles,
  User,
  Clock,
  Flag,
  AlertTriangle,
  ShieldAlert,
  EyeOff,
  FileCheck
} from 'lucide-react';
import { useAlert } from '@/context/AlertContext';

export interface CommunityPost {
  id: string;
  category: 'interview' | 'company_blind' | 'talk' | 'career_advice';
  categoryLabel: string;
  title: string;
  content: string;
  authorTag: string; // '네카라쿠배 현직자', '3년차 백엔더', '취준생 멘티'
  authorCompanyBadge?: string;
  createdAt: string;
  likes: number;
  commentsCount: number;
  views: number;
  isLikedByUser?: boolean;
  reportCount: number;
  isBlinded: boolean;
  isMyPost?: boolean;
  isAppealing?: boolean;
  appealReason?: string;
  comments: {
    id: string;
    authorTag: string;
    content: string;
    createdAt: string;
    likes: number;
  }[];
}

const INITIAL_POSTS: CommunityPost[] = [
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
    isLikedByUser: false,
    reportCount: 0,
    isBlinded: false,
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
    isLikedByUser: true,
    reportCount: 1,
    isBlinded: false,
    comments: [
      {
        id: 'c-3',
        authorTag: '취준생 멘티',
        content: '공고에 포괄인지 명시 안 된 곳이 많은데 면접 때 물어봐도 감점 안 될까요?',
        createdAt: '30분 전',
        likes: 4
      }
    ]
  },
  {
    id: 'post-3',
    category: 'talk',
    categoryLabel: '취준 넋두리·위로',
    title: '서류 30번째 탈락하고 멘탈 나갔는데... 포기하지 마세요.',
    content: '저도 작년에 서류 47개 넣고 42개 광탈한 뒤 합격했습니다. 내 스펙이 부족해서가 아니라, 회사와 포지션의 핏(Fit)이 안 맞았을 뿐입니다. 굿잡에서 마감일정 챙기면서 하루 1개씩 묵묵히 넣다 보면 반드시 기회가 옵니다. 다들 힘내자!',
    authorTag: '2년차 주니어 개발자',
    authorCompanyBadge: '합격 선배',
    createdAt: '3시간 전',
    likes: 128,
    commentsCount: 1,
    views: 2100,
    isLikedByUser: true,
    reportCount: 0,
    isBlinded: false,
    comments: [
      {
        id: 'c-4',
        authorTag: '취준생 멘티',
        content: '오늘 서류 불합격 메일 받고 울고 있었는데 큰 위로가 되네요... 다시 자소서 쓰러 갑니다.',
        createdAt: '1시간 전',
        likes: 12
      }
    ]
  },
  {
    id: 'post-4',
    category: 'company_blind',
    categoryLabel: '기업 비하인드·연봉',
    title: '모 테크 유니콘 과제전형 채용 갑질 의혹 공론화 (내 작성글)',
    content: '모 유니콘 기업의 과제 전형에서 제출했던 풀스택 시스템 아키텍처 코드가 불합격 통보 후 2주 뒤 실제 해당 서비스 신규 기능으로 흡사하게 배포된 정황이 있습니다. 기술 면접관들의 성의 없는 태도와 과제 도용 의혹에 대해 진상 규명을 요구합니다.',
    authorTag: '취준생 멘티 (나의 글)',
    authorCompanyBadge: '굿잡 인증 구직자',
    createdAt: '4시간 전',
    likes: 5,
    commentsCount: 0,
    views: 420,
    isLikedByUser: false,
    reportCount: 5,
    isBlinded: true,
    isMyPost: true,
    isAppealing: false,
    comments: []
  }
];

export default function AnonymousCommunitySection() {
  const { showSuccess, showWarning } = useAlert();
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({
    'post-1': true
  });
  const [newCommentInput, setNewCommentInput] = useState<Record<string, string>>({});

  // MOD-09 신고 모달 상태
  const [reportingPost, setReportingPost] = useState<CommunityPost | null>(null);
  const [reportReason, setReportReason] = useState<'SPAM' | 'ABUSE' | 'PROMOTION' | 'INAPPROPRIATE'>('ABUSE');
  const [reportDetails, setReportDetails] = useState('');

  // MOD-10 소명 모달 상태
  const [appealingPost, setAppealingPost] = useState<CommunityPost | null>(null);
  const [appealStatement, setAppealStatement] = useState('');

  // 신규 글쓰기 폼 상태
  const [newPostCategory, setNewPostCategory] = useState<'interview' | 'company_blind' | 'talk' | 'career_advice'>('interview');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostAuthorTag, setNewPostAuthorTag] = useState('취준생 멘티 🦁');

  const handleLikePost = (postId: string) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id !== postId) return post;
        const isLiked = post.isLikedByUser;
        return {
          ...post,
          likes: isLiked ? post.likes - 1 : post.likes + 1,
          isLikedByUser: !isLiked
        };
      })
    );
  };

  const handleAddComment = (postId: string) => {
    const text = (newCommentInput[postId] || '').trim();
    if (!text) return;

    const newComment = {
      id: `comment-${Date.now()}`,
      authorTag: '익명 취준생 (굿잡 인증)',
      content: text,
      createdAt: '방금 전',
      likes: 0
    };

    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        return {
          ...p,
          commentsCount: p.commentsCount + 1,
          comments: [...p.comments, newComment]
        };
      })
    );

    setNewCommentInput(prev => ({ ...prev, [postId]: '' }));
    setExpandedComments(prev => ({ ...prev, [postId]: true }));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      showWarning('입력 누락 안내', '제목과 본문을 모두 입력해 주세요.');
      return;
    }

    const categoryLabels = {
      interview: '면접·서류 후기',
      company_blind: '기업 비하인드·연봉',
      talk: '취준 넋두리·위로',
      career_advice: '현직자 커리어 조언'
    };

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      category: newPostCategory,
      categoryLabel: categoryLabels[newPostCategory],
      title: newPostTitle,
      content: newPostContent,
      authorTag: newPostAuthorTag,
      authorCompanyBadge: '굿잡 100% 익명 인증',
      createdAt: '방금 전',
      likes: 1,
      commentsCount: 0,
      views: 1,
      isLikedByUser: true,
      reportCount: 0,
      isBlinded: false,
      isMyPost: true,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setIsWriteModalOpen(false);
    showSuccess(
      '익명 게시글 등록 완료', 
      '블라인드 익명 게시판에 글이 안전하게 등록되었습니다!\n개인정보는 SHA-256 단방향 암호화 처리되어 누구도 작성자를 특정할 수 없습니다.'
    );
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportingPost) return;

    setPosts(prev =>
      prev.map(p => {
        if (p.id !== reportingPost.id) return p;
        const newCount = p.reportCount + 1;
        const willBlind = newCount >= 3;
        return {
          ...p,
          reportCount: newCount,
          isBlinded: willBlind ? true : p.isBlinded
        };
      })
    );

    const targetTitle = reportingPost.title;
    setReportingPost(null);
    setReportDetails('');
    showWarning(
      '신고 접수 완료',
      `신고가 정상 접수되었습니다.\n\n• 사유: ${reportReason}\n• 대상: "${targetTitle}"\n\n🛡️ 허위·역어뷰징 방지 시스템에 의해 기록되며, 누적 신고 시 해당 글은 임시 블라인드 처리됩니다.`
    );
  };

  const handleSubmitAppeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appealingPost) return;

    setPosts(prev =>
      prev.map(p => {
        if (p.id !== appealingPost.id) return p;
        return {
          ...p,
          isAppealing: true,
          appealReason: appealStatement
        };
      })
    );

    setAppealingPost(null);
    setAppealStatement('');
    showSuccess(
      '소명 신청 접수 완료',
      '소명 신청이 성공적으로 접수되었습니다!\n\n전문 운영팀이 24시간 이내에 내용을 검토한 후 부당한 신고로 판명될 경우 즉시 블라인드가 해제됩니다.'
    );
  };

  const filteredPosts = posts.filter(post => {
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = q === '' || post.title.toLowerCase().includes(q) || post.content.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in duration-200">
      {/* 라운지 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2 border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% SHA-256 안심 익명 보장 · 취준생 & 현직자 굿잡 라운지</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            굿잡 라운지 (GoodJob Lounge)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            혼자 끙끙 앓지 마세요. 서류/면접 후기부터 솔직한 기업 썰까지 눈치 보지 않고 익명으로 묻고 답합니다.
          </p>
        </div>

        {/* 익명 글쓰기 버튼 */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="px-4 py-2.5 bg-[#3182F6] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-sm inline-flex items-center gap-2 transition-all shrink-0"
          >
            <PenSquare className="w-4 h-4" />
            <span>익명 글쓰기</span>
          </button>
        </div>
      </div>

      {/* 카테고리 필터 칩 */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/60 mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium pb-1 sm:pb-0">
          {[
            { id: 'all', label: '전체 이야기' },
            { id: 'interview', label: '🗣️ 면접·서류 후기' },
            { id: 'company_blind', label: '🤫 기업 비하인드·연봉' },
            { id: 'talk', label: '😭 취준 넋두리·위로' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="라운지 이야기 검색..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] text-slate-800"
          />
        </div>
      </div>

      {/* 게시글 피드 목록 */}
      <div className="space-y-4">
        {filteredPosts.map(post => {
          const isCommentsOpen = !!expandedComments[post.id];

          return (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/70 p-6 shadow-xs hover:shadow-md transition-all"
            >
              {/* 상단 메타 */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#3182F6] text-[11px] font-bold">
                    {post.categoryLabel}
                  </span>
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {post.authorTag}
                  </span>
                  {post.authorCompanyBadge && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold hidden sm:inline">
                      {post.authorCompanyBadge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{post.createdAt}</span>
                </div>
              </div>

              {/* 제목 & 본문 (블라인드 여부에 따른 분기) */}
              {post.isBlinded ? (
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 my-2">
                  <div className="flex items-start gap-3">
                    <EyeOff className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-amber-900">
                          다수의 사용자 신고(누적 {post.reportCount}건)로 인해 임시 블라인드 처리된 글입니다
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/70 text-amber-900">
                          {post.isAppealing ? '운영팀 소명 심사 중' : '검토 대기'}
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-700 mt-1 leading-relaxed">
                        본 게시글은 다중 신고 누적으로 자동 비공개되었습니다. 허위 사실 유포 및 음해 방지를 위한 커뮤니티 보호 정책이 적용 중입니다.
                      </p>

                      {post.isMyPost && (
                        <div className="mt-3 pt-2.5 border-t border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-[11px] font-bold text-amber-800">
                            내가 작성한 글인가요? 정당한 사유가 있다면 소명하세요.
                          </span>
                          <button
                            onClick={() => {
                              setAppealingPost(post);
                              setAppealStatement('');
                            }}
                            disabled={post.isAppealing}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0 ${
                              post.isAppealing
                                ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                                : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black'
                            }`}
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>{post.isAppealing ? '소명 심사진행 중' : '작성자 이의제기 / 소명하기 (MOD-10)'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-2 hover:text-[#3182F6] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-4 font-normal">
                    {post.content}
                  </p>
                </>
              )}

              {/* 하단 액션 버튼 */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleLikePost(post.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold transition-all ${
                      post.isLikedByUser ? 'bg-rose-50 text-rose-600' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLikedByUser ? 'fill-current' : ''}`} />
                    <span>도움돼요 {post.likes}</span>
                  </button>

                  <button
                    onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-slate-500 hover:bg-slate-100 font-semibold transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                    <span>댓글 {post.commentsCount}</span>
                  </button>

                  {/* MOD-09 신고 버튼 */}
                  <button
                    onClick={() => {
                      setReportingPost(post);
                      setReportReason('ABUSE');
                      setReportDetails('');
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all font-semibold"
                    title="불법·부적절 게시글 신고 (MOD-09)"
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>신고 {post.reportCount > 0 ? `(${post.reportCount})` : ''}</span>
                  </button>
                </div>

                <span className="text-[11px] text-slate-400">조회 {post.views}</span>
              </div>

              {/* 댓글 서랍 영역 */}
              {isCommentsOpen && (
                <div className="mt-4 pt-4 border-t border-slate-100/80 space-y-3">
                  {post.comments.map(c => (
                    <div key={c.id} className="bg-slate-50 rounded-2xl p-3.5 text-xs text-slate-700">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-800">{c.authorTag}</span>
                        <span className="text-[10px] text-slate-400">{c.createdAt}</span>
                      </div>
                      <p className="leading-relaxed">{c.content}</p>
                    </div>
                  ))}

                  {/* 댓글 작성창 */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={newCommentInput[post.id] || ''}
                      onChange={e => setNewCommentInput(prev => ({ ...prev, [post.id]: e.target.value }))}
                      onKeyDown={e => { if (e.key === 'Enter') handleAddComment(post.id); }}
                      placeholder="따뜻한 조언이나 궁금한 점을 익명으로 남겨보세요..."
                      className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] focus:bg-white text-slate-800 placeholder:text-slate-400"
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="px-3.5 py-2 bg-[#3182F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>등록</span>
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* 익명 글쓰기 모달 */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-4">
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                🔒 100% 완전 익명 보장
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-1">
                굿잡 라운지에 이야기 남기기
              </h3>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">카테고리 선택</label>
                <select
                  value={newPostCategory}
                  onChange={e => setNewPostCategory(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6]"
                >
                  <option value="interview">🗣️ 면접·서류 후기</option>
                  <option value="company_blind">🤫 기업 비하인드·연봉</option>
                  <option value="talk">😭 취준 넋두리·위로</option>
                  <option value="career_advice">💡 현직자 커리어 조언</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">익명 닉네임 / 직군 뱃지</label>
                <input
                  type="text"
                  value={newPostAuthorTag}
                  onChange={e => setNewPostAuthorTag(e.target.value)}
                  placeholder="예: 판교 백엔드 2년차, 취준생 멘티 등"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">제목 *</label>
                <input
                  type="text"
                  required
                  value={newPostTitle}
                  onChange={e => setNewPostTitle(e.target.value)}
                  placeholder="이야기할 주제를 입력하세요..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">본문 내용 *</label>
                <textarea
                  required
                  rows={6}
                  value={newPostContent}
                  onChange={e => setNewPostContent(e.target.value)}
                  placeholder="솔직하고 생생한 경험이나 질문을 남겨주세요. 취준생 동기들과 선배들이 답변해 드립니다."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#3182F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold shadow-xs"
                >
                  익명으로 게시하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MOD-09 게시글 신고 모달 */}
      {reportingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-rose-600 font-bold block">MOD-09 · REPORT</span>
                  <h3 className="text-lg font-extrabold text-slate-900">게시글 신고하기</h3>
                </div>
              </div>
              <button 
                onClick={() => setReportingPost(null)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold p-1"
              >
                닫기
              </button>
            </div>

            {/* 역어뷰징 방지 경고 배너 */}
            <div className="p-3.5 bg-rose-50 border border-rose-200/80 rounded-2xl mb-4 text-xs text-rose-900">
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">⚠️ 역어뷰징 및 허위 신고 방지 시스템</strong>
                  <p className="text-[11px] text-rose-800 leading-relaxed">
                    기업 평판 훼손 목적의 악의적 허위 신고나 보복성 다중 신고 적발 시, 신고자 계정 즉시 제재 및 신고 가중치 페널티가 영구 부여됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 신고자 신뢰도 지수 배너 */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200 mb-4 text-xs">
              <span className="text-slate-500 font-medium">내 신고자 신뢰도 지수:</span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                1.0x (클린 이용자 · 정상 가중치)
              </span>
            </div>

            <div className="mb-4">
              <span className="text-xs text-slate-400 block mb-1 font-medium">신고 대상 게시글</span>
              <p className="text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200 truncate">
                "{reportingPost.title}"
              </p>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-2">신고 사유 선택 *</label>
                <div className="space-y-2">
                  {[
                    { id: 'ABUSE', label: '🤬 욕설, 비방, 인신공격, 혐오 표현' },
                    { id: 'INAPPROPRIATE', label: '🚫 허위사실 유포, 사실 왜곡 및 명예훼손' },
                    { id: 'SPAM', label: '📢 상업적 광고, 도배성 스팸 게시글' },
                    { id: 'PROMOTION', label: '💼 기업 또는 영리 업체의 거짓 바이럴 마케팅' }
                  ].map(item => (
                    <label 
                      key={item.id}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        reportReason === item.id 
                          ? 'bg-blue-50/60 border-blue-300 text-blue-900 font-bold' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="reportReason"
                        value={item.id}
                        checked={reportReason === item.id}
                        onChange={() => setReportReason(item.id as any)}
                        className="text-[#3182F6]"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">상세 사유 설명 (선택)</label>
                <textarea
                  rows={3}
                  value={reportDetails}
                  onChange={e => setReportDetails(e.target.value)}
                  placeholder="구체적인 위반 사항을 적어주시면 운영팀 검토 시 적극 반영됩니다."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setReportingPost(null)}
                  className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-extrabold shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>신뢰도 기반 신고 접수하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MOD-10 블라인드 소명 및 이의제기 모달 */}
      {appealingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-600 font-bold block">MOD-10 · APPEAL</span>
                  <h3 className="text-lg font-extrabold text-slate-900">블라인드 소명 및 이의제기</h3>
                </div>
              </div>
              <button 
                onClick={() => setAppealingPost(null)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold p-1"
              >
                닫기
              </button>
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-2xl mb-4 text-xs text-amber-900">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">공정한 커뮤니티를 위한 작성자 소명권 보장</strong>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    본 게시글이 사실에 기반한 정당한 후기이거나 악의적 허위 신고로 블라인드 처리된 경우 소명 사유를 제출해 주세요. 
                    운영팀이 24시간 내 심사 후 즉시 블라인드를 해제합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs text-slate-400 block mb-1 font-medium">소명 대상 게시글</span>
              <p className="text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200 truncate">
                "{appealingPost.title}"
              </p>
            </div>

            <form onSubmit={handleSubmitAppeal} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">소명 취지 및 증빙 사실 설명 *</label>
                <textarea
                  required
                  rows={4}
                  value={appealStatement}
                  onChange={e => setAppealStatement(e.target.value)}
                  placeholder="예: 실제 해당 기업 면접에 참여한 사실이 있으며(면접 안내 메일 보유), 허위 사실이 아닌 사실만을 기재하였습니다."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3182F6] resize-none"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-500">
                <span>📎 면접 안내문 / 메일 스크린샷 첨부</span>
                <label className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-bold text-slate-700 cursor-pointer hover:bg-slate-50">
                  <span>파일 첨부</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAppealingPost(null)}
                  className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-black shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>운영팀에 소명서 제출하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
