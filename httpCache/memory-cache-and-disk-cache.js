const http = require("http");
const fs = require("fs");
const port = 8082;

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const data = fs.readFileSync("./static/memory-cache-and-disk-cache.html");
      res.end(data);
    } else if(req.url === '/static/drug.png' || req.url === '/static/index.css' || req.url === '/static/index.js') {
      const data = fs.readFileSync(`.${req.url}`);
      res.setHeader("Cache-Control", "no-cache");
      // res.setHeader('Expires', new Date(Date.now() + 100 * 1000).toUTCString()) // Expires
      res.end(data);
    }
  })
  .listen(port, () => {
    console.log(`port ${port} is listening ...`);
  });
