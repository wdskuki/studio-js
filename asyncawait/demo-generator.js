import axios from 'axios'
const baseURL = 'https://huatuce.com/api/debug'


function* foo() {
  const a = yield 1.1 + 1.2

  console.log('a = ', a)
  const b = yield 2

  console.log('b = ', b)
  return 'end' + b 
}
const c = foo()
c.next() // {value: 1, done: false}
c.next() // {value: 2, done: false}
c.next('!!!') // {value: 'end!!!', done: true}
c.next() // {value: undefined, done: true}