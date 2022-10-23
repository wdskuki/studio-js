const http = require("http");
const fs = require("fs");
const etag = require('etag');
const port = 8082;

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const data = fs.readFileSync("./static/memory-cache-and-disk-cache.html");
      res.end(data);
    } else if (req.url === "/static/drug.png" || req.url === "/static/index.css" || req.url === "/static/index.js") {
      const data = fs.readFileSync(`.${req.url}`);

      // // Last-Modified & If-Modified-Since
      // const { mtime } = fs.statSync(`.${req.url}`);
      // const ifModifiedSince = req.headers["if-modified-since"];
      // if (ifModifiedSince === mtime.toUTCString()) {
      //   console.log("no data response: " + req.url);
      //   res.statusCode = 304;
      //   res.end();
      //   return;
      // }
      // res.setHeader('last-modified', mtime.toUTCString())
      // res.setHeader('Cache-Control', 'no-cache')
      // res.end(data);

      // Etag & If-None-Match
      const etagContent = etag(data);
      const ifNoneMatch = req.headers["if-none-match"];
      if (ifNoneMatch === etagContent) {
        console.log("no data response: " + req.url);
        res.statusCode = 304;
        res.end();
        return;
      }
      res.setHeader("etag", etagContent);
      res.setHeader("Cache-Control", "no-cache");
      res.end(data);
    }
  })
  .listen(port, () => {
    console.log(`port ${port} is listening ...`);
  });
