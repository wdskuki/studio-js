var db = null
var request = window.indexedDB.open('test-db1', 1)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result
  debugger
}

request.onupgradeneeded = event => {
  console.log('数据库进行升级', event)
}