const fs = require('fs')

const readFileWithPromise = function(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

let ret = ''

readFileWithPromise('./data/text1.txt').then(data => {
  ret += data + ' '
  return readFileWithPromise('./data/text2.txt')
}).then(data => {
  ret += data
  console.log(ret)
})