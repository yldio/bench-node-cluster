const http = require('http');
const util = require('util');

const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

var msg = util.format('Hello World %s %s ', port, process.pid);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(msg + Date.now());
}).listen(port, hostname);


// setInterval(() => {
//   var start = Date.now(); while (Date.now() - start < 50);
// }, 100);

