const http = require("http");
const fs = require("fs");
const port = 8082;

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const data = fs.readFileSync("./static/no-cache-and-no-store.html");
      res.end(data);
    } else if (req.url === "/static/drug.png" || req.url === "/static/index2.css" || req.url === "/static/index.js" || req.url === "/static/home.png") {
      const data = fs.readFileSync(`.${req.url}`);
      // res.setHeader("Cache-Control", "no-cache");
      // res.setHeader('Cache-Control', 'max-age=0');
      res.setHeader("Cache-control", "no-store");
      res.end(data);
    }
  })
  .listen(port, () => {
    console.log(`port ${port} is listening ...`);
  });
