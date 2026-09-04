const http = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '8080', 10);
const hostname = '127.0.0.1';
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`>>> [굿잡 GoodJob] http://${hostname}:${port} 에서 실시간 구동 완료!`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
