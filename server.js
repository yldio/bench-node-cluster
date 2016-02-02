const assert = require('assert');
const http = require('http');
const util = require('util');

const hostname = '0.0.0.0';
const port = process.env.PORT;
assert(port, 'need PORT env var');

var msg = util.format('Hello World %s %s ', port, process.pid);

http.createServer((req, res) => {
  req.socket._writableState.highWaterMark = Infinity;

  // simulate processing
  var end = Date.now() + 2 + Math.floor(Math.random() * 10);
  while (Date.now() < end);

  // simulate IO
  setTimeout(reply, Math.floor(Math.random() * 300));

  function reply() {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg + Date.now());
  }
}).listen(port, hostname);


