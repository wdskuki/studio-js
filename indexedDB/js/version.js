var db = null
var request = window.indexedDB.open('test-db1', 4)


request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
}

request.onupgradeneeded = event => {
  console.log('数据库进行升级', event)
  db = event.target.result
  var objectStore = null
  switch(event.oldVersion) {
    case 0:
      objectStore = db.createObjectStore('test-object-store-001', { autoIncrement: true })
    case 1:
      objectStore = db.createObjectStore('test-object-store-002', { autoIncrement: true })
    case 2:
      var objectStore = event.target.transaction.objectStore('test-object-store-002')
      objectStore.createIndex('nameIndex', 'name', {unique: true});
    case 3:
      var objectStore = event.target.transaction.objectStore('test-object-store-002')
      objectStore.deleteIndex('nameIndex');
  }
}