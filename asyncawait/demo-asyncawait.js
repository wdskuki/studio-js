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

async function readFile() {
  const ret1 = await readFileWithPromise('./data/text1.txt')
  const ret2 = await readFileWithPromise('./data/text2.txt')
  console.log(`${ret1} ${ret2}`)
}

readFile()