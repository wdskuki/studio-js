var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
}

request.onupgradeneeded = event => {
  debugger
  console.log('数据库进行升级', event)
  db = event.target.result
  var objectStore = null
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' })
    objectStore.createIndex('nameIndex', 'name', { unique: true });
    objectStore.createIndex('emailIndex', 'email', { unique: true });
  }

  // if (!db.objectStoreNames.contains('person2')) {
  //   objectStore = db.createObjectStore('person2', { keyPath: 'id' })
  //   objectStore.createIndex('nameIndex', 'name', { unique: true });
  //   objectStore.createIndex('emailIndex', 'email', { unique: true });
  // }
}