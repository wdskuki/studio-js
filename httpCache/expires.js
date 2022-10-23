const http = require('http')
const fs = require('fs')
const port = 8082

http.createServer((req, res) => {
  console.log(req.url)
  if(req.url === '/') {
    const data = fs.readFileSync('./static/index.html')
    res.end(data)
  }else if(req.url === '/static/drug.png') {
    console.log('drug.png')
    // Expires
    // res.setHeader('Expires', new Date(Date.now() + 10000).toUTCString())

    // Cache-Control
    // res.setHeader('Cache-Control', 'max-age=10')
    // res.setHeader('Cache-Control', 'no-store')

    const data = fs.readFileSync('./static/drug.png')
    res.end(data)
  }
}).listen(port, () => {
  console.log(`port ${port} is listening ...`)
})
