# baepo gaide mit teureobeulsyuting (Cloudflare Pages)

## Cloudflare Pages Next.js baepo chouejeokhwa gaide

bon projecteuneun Next.js SSR mit API rauteureul sayonghameuro, Cloudflare Pages baepo si @cloudflare/next-on-pages paekijireul sayonghayeo Edge Workerro keompailhaeya hamnida.

### 1. Build Command mit Output Directory munje
- wonin: Cloudflare daesibodeue Output Directoryga apps/web/outeuro seoljeongdoeo isseo, next-on-pagesga saengseonghaneun .vercel/output/static poldeoreul chatji mothae baepoe SILPAEhaneun hyeonsangi balsaenghaetseumnida.
- haegyeol bangan: daesibodeu seoljeongeul byeongyeonghaneun daesin, package.jsonui build seukeuripteureul daeumgwa gatchi seoljeonghayeo hohwanseongeul yujihamnida.
  build: npx @cloudflare/next-on-pages && rm -rf out && cp -r .vercel/output/static out
- ireotge seoljeonghamyeon Cloudflarega yoguhaneun out poldeo naee jeongjeok pailggawa _worker.jsga boksadoeeo jeongsang baepodoemnida.

### 2. Static Export (output: 'export') sayong bulga sayu
- projecteu naee /jobs/[id] wa gateuns dongjeok rauteuwa /api/jobs deung seobeosaideu dongjeok APIga jonjaehamnida.
- taraseo next.config.jseseo output: 'export'eul seoljeonghamyeon build gwajeongeseo generateStaticParams() bujae mit force-dynamic sokseong chungdollo inhae ereoga balsaenghamnida.
- hangsang output: 'standalone'eul yujihaeya hamnida.

### 3. npx @cloudflare/next-on-pages silhaeng si npm ERESOLVE (uijonseong chungdol) munje
- wonin: Cloudflare Pages build hwangyeongeseo npxreul tonghae jeukseogeuro paekijireul daunlodeuhaltae, gijon wrangler paekijiwaui Peer Dependency chungdol(ERESOLVE)ga balsaenghayeo buildga gangje jongryo(code: 1)doeeotseumnida.
- haegyeol bangan: package.jsonui devDependenciese @cloudflare/next-on-pages mit hohwandoeneun wrangler beojeoneuls myeongsijeogeuro chugahago, ruteue .npmrc(legacy-peer-deps=true)reul seoljeonghayeo uijonseong chungdoleuls musihago anjeonhage seolchidoedorok choejeokhwahaetseumnida.

### 4. Vercel CLI muhan rupeu ereo (JSON pasing oryu poham)
- wonin: next-on-pagesneun naebujeogeuro vercel buildreul hochulhaneunde, Vercel CLIneun package.jsonui build seukeuripteureul chatja silhaenghamnida. uriga build seukeuripteee npx @cloudflare/next-on-pagesreul neoeotgi ttaemune seoro muhan hochulhaneun rupeee ppajimnida.
- hYegyeol bangan: apps/web/vercel.jsoneul saengseonghayeo {"buildCommand": "next build"}reul jijeonghameurosseo, Vercel CLIga mujoggeon next buildman suhaenghadorok gangjehamnida. (ittae vercel.jsoneun bandeusi BOM eopneun sunsu UTF-8ro jojangdoeeoya hamnida.)

### 5. sajeon geomjeung jeolcha (pilsu)
- baepo jeon teseteu: apeuro unyeong seobeoee pushihagi jeoneneun bandeusi rokeoleseo npm run build mit npx @cloudflare/next-on-pagesreul silhaenghayeo buildga jeongsangjeogeuro wanryodoeneunji, incoding ereona sunhwan chamjo ereoga eopneunji jachae geomjeunghaeya hamnida.

### 6. SQLite hohwanseong (hyanghu choejeokhwa banghyang)
- better-sqlite3 ttoneun Node 22 bilteuin node:sqliteneun Cloudflare Edge Worker hwangyeongeseo dongjakhaji anhseumnida.
- hyeonjae claieonteu godeueseo API jangaesi MOCK_JOBSro Fallback hadorok guhyeondoeeo isseo