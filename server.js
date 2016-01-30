const assert = require('assert');
const http = require('http');
const util = require('util');

const hostname = '0.0.0.0';
const port = process.env.PORT;
assert(port, 'need PORT env var');

var msg = util.format('Hello World %s %s ', port, process.pid);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(msg + Date.now());
}).listen(port, hostname);

