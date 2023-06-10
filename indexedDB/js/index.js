var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result

  index()
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


function index() {
  var transaction = db.transaction(['person'], 'readonly');
  var store = transaction.objectStore('person');
  var index = store.index('nameIndex');
  var request = index.get('李四');
  
  request.onsuccess = function (e) {
    var result = e.target.result;
    debugger
  }
}


