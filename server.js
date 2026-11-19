const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "anti-fraud-simulator");
http.createServer(function (req, res) {
  const p = path.join(root, req.url === "/" ? "index.html" : req.url);
  fs.readFile(p, function (e, d) {
    if (e) { res.statusCode = 404; res.end("not found"); return; }
    res.setHeader("Content-Type", p.endsWith(".html") ? "text/html; charset=utf-8" : "application/octet-stream");
    res.end(d);
  });
}).listen(8931, function () { console.log("server up on 8931"); });
