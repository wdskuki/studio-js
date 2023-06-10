var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result

  // update()
  remove()
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


function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(3);

  request.onsuccess = function (event) {
    console.log('数据删除成功', event);
  };
}


