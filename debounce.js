/**
 * 
 * @param {*} fn: 实际需要执行的函数
 * @param {*} delay: 时间间隔
 * 
 * 防抖函数
 * 1. 外部调用debounce函数，需等待delay间隔之后，才真正执行内部的fn函数
 * 2. 如果在delay间隔之内，外部重新调用了debounce函数，那么需清除上次等待执行fn函数的任务，重新开启一个新的等待执行fn函数任务
 */
function debounce(fn, delay) {
  let timer = null
  return function() {
    if(timer !== null) {
      clearTimeout(timer)
      this.timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

/** TEST BELOW */
function fn(par) {
  console.log('fn ', par)
}

const p = debounce(fn, 1000)
setTimeout(() => {
  p('1')
}, 100)
setTimeout(() => {
  p('2')
}, 900)
setTimeout(() => {
  p('3')
}, 500)
