const http = require("http");
const fs = require("fs");
const port = 8082;

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const data = fs.readFileSync("./static/service-worker-and-memory-cache.html");
      res.end(data);
    } else if (req.url === "/static/drug.png" || req.url === "/static/index.css" || req.url === "/static/index.js") {
      const data = fs.readFileSync(`.${req.url}`);

      res.setHeader("Cache-Control", "max-age=10");
      // res.setHeader("Cache-Control", "no-cache");
      // res.setHeader("Cache-Control", "no-store");
      res.end(data);
    } else if (req.url === '/sw.js') {
      const data = fs.readFileSync("./static/sw.js");
      res.setHeader('Content-Type', 'application/javascript');
      res.end(data);
    }
  })
  .listen(port, () => {
    console.log(`port ${port} is listening ...`);
  });
