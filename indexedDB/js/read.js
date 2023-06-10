var db = null
var request = window.indexedDB.open('test-db1', 4)

request.onerror = event => {
  console.error('打开数据库出错', event)
}
request.onsuccess = event => {
  console.log('打开数据库成功', event)
  db = event.target.result
  // debugger
  read()
}

request.onupgradeneeded = event => {
  console.log('数据库进行升级', event)
}

function read() {
  var transaction = db.transaction(['person'], 'readonly');
  var objectStore = transaction.objectStore('person');
  var request = objectStore.get(4);

  request.onerror = function(event) {
    console.log('事务失败');
  };

  request.onsuccess = function( event) {
     if (request.result) {
       console.log('读取数据成功', request.result)
     } else {
       console.log('未获得数据记录');
     }
  };
}