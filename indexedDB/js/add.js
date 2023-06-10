var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result
  add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });
  add({ id: 2, name: '李四', age: 25, email: 'lisi@example.com', post: 123123 });
  add({ id: 3, name: '王五', age: 25, email: 'wangwu@example.com' });
  add({ id: 4, hello: 'world' });
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


function add(obj) {
  var t = db.transaction(['person'], 'readwrite')
  var objectStore = t.objectStore('person')
  var request = objectStore.add(obj)
  request.onsuccess = event => {
    console.log('数据写入成功', event);
  };

  request.onerror = event => {
    console.error('数据写入失败', event);
  }
}

