var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result

  update()
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
}


function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '张三123', age: 35, email: 'zhangsan@example.com' });

  request.onsuccess = function (event) {
    console.log('数据更新成功', event);
  };

  request.onerror = function (event) {
    console.error('数据更新失败', event);
  }
}


