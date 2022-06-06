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

function run(genFn) {
  var gen = genFn();
  
  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}

run(readFileThunkGen)



