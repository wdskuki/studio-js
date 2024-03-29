// import co from 'co'
// import axios from 'axios'
// const baseURL = 'https://huatuce.com/api/debug'

// function* foo() {
//   const ret1 = yield axios(`${baseURL}/hello`)
//   const ret2 = yield axios(`${baseURL}/${ret1.data.key}`)

//   const ret = `hello ${ret1.data.key} ${ret2.data.key}`
//   console.log(ret)
// }

// co(foo)


const fs = require('fs')
const co = require('co')

// Thunk版本的readFile（单参数版本）
var readFileThunk = function (fileName) {
  return function (callback) {
    return fs.readFile(fileName, 'utf-8', callback);
  };
};

let ret = ''
function* readFileThunkGen() {
  const ret1 = yield readFileThunk('./data/text1.txt')
  ret += ret1 + ' '
  const ret2 = yield readFileThunk('./data/text2.txt')
  ret += ret2
  console.log(ret)
}

co(readFileThunkGen)




