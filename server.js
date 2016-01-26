const http = require('http');
const util = require('util');

const hostname = '127.0.0.1';
const port = process.env.PORT || 1337;

var msg = util.format('Hello World %s %s ', port, process.pid);
http.createServer((req, res) => {
//  var delay = Math.floor(Math.random() * 1000);
//  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg + Date.now());
  //}, delay);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

setInterval(() => {
  var start = Date.now();
  while (Date.now() - start < 10);
}, 50);
