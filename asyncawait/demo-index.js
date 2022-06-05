const fs = require('fs')

fs.readFile('./data/text1.txt','utf-8', (err1, data1) => {
  fs.readFile('./data/text2.txt', 'utf-8', (err2, data2) => {
    console.log(`${data1} ${data2}`)
  })
})