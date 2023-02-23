function foo(n) {
  let old = null
  let index = -1
  let num = -1
  while(n !== 0) {
    const a = n % 2
    n = Math.floor(n)
    ++index

    if(a === 1) {
      if(old === null) {
        old = index
      }else {

      }
      // if(old === null) {
      //   old = index
      // }else {
      //   if(num < index - old) {
      //     num = index - old
      //   }
      //   old = null
      // }
    }
    n = Math.floor(n / 2)
  }
  return num
}

const a = foo(22)
// console.log(a)