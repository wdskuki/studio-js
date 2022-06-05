import co from 'co'
import axios from 'axios'
const baseURL = 'https://huatuce.com/api/debug'

function* foo() {
  const ret1 = yield axios(`${baseURL}/hello`)
  const ret2 = yield axios(`${baseURL}/${ret1.data.key}`)

  const ret = `hello ${ret1.data.key} ${ret2.data.key}`
  console.log(ret)
}

co(foo)