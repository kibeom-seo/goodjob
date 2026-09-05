# 배포 가이드 및 트러블슈팅 (Cloudflare Pages)

## Cloudflare D1 마이그레이션 안내 (필독)

현재 시스템은 Cloudflare Pages의 Edge Runtime 호환성을 위해 **정적 사이트(Static Export)** 모드로 1,250건의 공고를 성공적으로 서비스 중입니다.
하지만 관리자 실시간 통계, 운영자 권한 부여, B2B 결제 내역 저장 등 '백엔드 데이터베이스'가 필요한 기능들을 라이브 사이트에 복구하려면 기존의 로컬 SQLite 파일을 버리고 **Cloudflare D1 서버리스 DB**로 완전히 마이그레이션해야 합니다.

### D1 DB 생성 및 바인딩 절차 (유저 수행)
1. Cloudflare 대시보드 로그인 -> 좌측 메뉴 `Workers & Pages` -> `D1 SQL 데이터베이스`로 이동합니다.
2. `Create database` 버튼을 누르고 `goodjob-db`라는 이름으로 DB를 생성합니다.
3. 생성된 DB의 상세 페이지에서 `database_id` (긴 문자열)를 복사합니다.
4. 이 프로젝트의 `f:\AI\채용\apps\web\wrangler.toml` 파일을 열고 아래 내용을 붙여넣어 바인딩합니다.
```toml
[[d1_databases]]
binding = "DB"
database_name = "goodjob-db"
database_id = "여기에_복사한_아이디를_넣으세요"
```
5. 세팅이 완료되면 에이전트에게 알려주세요. `lib/db.ts`에 작성된 350줄의 기존 SQLite 코드를 D1 API 통신 방식(`env.DB.prepare().bind().all()`)으로 전면 교체해 드리겠습니다!

### 3. npx @cloudflare/next-on-pages silhaeng si npm ERESOLVE (uijonseong chungdol) munje
- wonin: Cloudflare Pages build hwangyeongeseo npxreul tonghae jeukseogeuro paekijireul daunlodeuhaltae, gijon wrangler paekijiwaui Peer Dependency chungdol(ERESOLVE)ga balsaenghayeo buildga gangje jongryo(code: 1)doeeotseumnida.
- haegyeol bangan: package.jsonui devDependenciese @cloudflare/next-on-pages mit hohwandoeneun wrangler beojeoneuls myeongsijeogeuro chugahago, ruteue .npmrc(legacy-peer-deps=true)reul seoljeonghayeo uijonseong chungdoleuls musihago anjeonhage seolchidoedorok choejeokhwahaetseumnida.

### 4. Vercel CLI muhan rupeu ereo (JSON pasing oryu poham)
- wonin: next-on-pagesneun naebujeogeuro vercel buildreul hochulhaneunde, Vercel CLIneun package.jsonui build seukeuripteureul chatja silhaenghamnida. uriga build seukeuripteee npx @cloudflare/next-on-pagesreul neoeotgi ttaemune seoro muhan hochulhaneun rupeee ppajimnida.
### 5. sajeon geomjeung jeolcha (pilsu)
- baepo jeon teseteu: apeuro unyeong seobeoee pushihagi jeoneneun bandeusi rokeoleseo npm run build mit npx @cloudflare/next-on-pagesreul silhaenghayeo buildga jeongsangjeogeuro wanryodoeneunji, incoding ereona sunhwan chamjo ereoga eopneunji jachae geomjeunghaeya hamnida.

### 6. SQLite hohwanseong (hyanghu choejeokhwa banghyang)
- better-sqlite3 ttoneun Node 22 bilteuin node:sqliteneun Cloudflare Edge Worker hwangyeongeseo dongjakhaji anhseumnida.
- hyeonjae claieonteu godeueseo API jangaesi MOCK_JOBSro Fallback hadorok guhyeondoeeo isseo