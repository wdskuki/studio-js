/**
 * 
 * @param {*} fn: 实际需要执行的函数
 * @param {*} delay: 时间间隔
 * 
 * 截流函数: 规定时间之内只执行一次fn函数（第一次）
 */
function throttle(fn, delay) {
  let last = null
  return function() {
    if(last === null) {
      last = Date.now()
      fn.apply(this, arguments)
    }else {
      const now = Date.now()
      if(now - last >= delay) {
        fn.apply(this,arguments)
      }
    }
  }
}

/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 * 
 * 定时器实现
 */
function throttle2(fn, delay) {
  let timer = null
  return function() {
    if(timer === null) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}

/** TEST BELOW */

function fn(par) {
  console.log('fn ', par)
}

const p = throttle2(fn, 1000)
p('1')
setTimeout(() => {
  p('2')
}, 900)

setTimeout(() => {
  p('3')
}, 1111)