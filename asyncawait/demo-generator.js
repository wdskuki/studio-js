function* foo() {
  console.log('foo first next')
  const a = yield 1.1 + 1.2

  console.log('a = ', a)
  const b = yield 2

  console.log('b = ', b)
  return 'end' + b 
}
const f = foo()

f.next() // foo first next,  {value: 2.3, done: false}

f.next() // a = undefined,  {value: 2, done: false}

f.next(333) // b = 333,  {value: 'end333', done: true}
