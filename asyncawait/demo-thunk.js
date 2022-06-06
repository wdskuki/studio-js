const fs = require('fs')

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

const g = readFileThunkGen()

g.next().value((err1, data1) => {
  if (err1) {
    throw err1;
  }
  g.next(data1).value((err2, data2) => {
    if (err2) {
      throw err2
    }
    g.next(data2)
  })
})


