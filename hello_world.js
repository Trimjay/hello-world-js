const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const msg = 'Hello World';
const fullMsg = `${msg}\n`;

const server = http.CreateServer((request, resposne) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(fullMsg);
});

server.listen(port, hostname, () => {
  console.log(`Application running at http://${hostname}:${port}/`);
});