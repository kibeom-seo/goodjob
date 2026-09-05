# 배포 가이드 및 트러블슈팅 (Cloudflare Pages)

## Cloudflare Pages Next.js 배포 최적화 가이드

본 프로젝트는 Next.js SSR 및 API 라우트를 사용하므로, Cloudflare Pages 배포 시 @cloudflare/next-on-pages 패키지를 사용하여 Edge Worker로 컴파일해야 합니다.

### 1. Build Command 및 Output Directory 문제
- **원인**: Cloudflare 대시보드에 Output Directory가 pps/web/out으로 설정되어 있어, 
ext-on-pages가 생성하는 .vercel/output/static 폴더를 찾지 못해 배포에 실패하는 현상이 발생했습니다.
- **해결 방안**: 대시보드 설정을 변경하는 대신, package.json의 uild 스크립트를 다음과 같이 설정하여 호환성을 유지합니다.
  ``json
  "build": "npx @cloudflare/next-on-pages && rm -rf out && cp -r .vercel/output/static out"
  ``
- 이렇게 설정하면 Cloudflare가 요구하는 out 폴더 내에 정적 파일과 _worker.js가 복사되어 정상 배포됩니다.

### 2. Static Export (output: 'export') 사용 불가 사유
- 프로젝트 내에 /jobs/[id] 와 같은 동적 라우트와 /api/jobs 등 서버사이드 동적 API가 존재합니다.
- 따라서 
ext.config.js에서 output: 'export'를 설정하면 빌드 과정에서 generateStaticParams() 부재 및 orce-dynamic 속성 충돌로 인해 에러가 발생합니다.
- **항상 output: 'standalone'을 유지해야 합니다.**

### 3. SQLite 호환성 (향후 최적화 방향)
- etter-sqlite3 또는 Node 22 빌트인 
ode:sqlite는 Cloudflare Edge Worker 환경에서 동작하지 않습니다.
- 현재 클라이언트 코드에서 API 장애 시 MOCK_JOBS로 Fallback 하도록 구현되어 있어 서비스가 멈추지는 않지만, 완벽한 백엔드 운영을 위해서는 DB를 Cloudflare D1으로 마이그레이션하거나, 외부 DB(Supabase, PlanetScale 등)를 사용하도록 리팩토링해야 합니다.
