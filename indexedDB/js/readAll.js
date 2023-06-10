var db = null;
var request = window.indexedDB.open("test-db1", 4);

request.onerror = (event) => {
  console.error("打开数据库出错", event);
};
request.onsuccess = (event) => {
  console.log("打开数据库成功", event);
  db = event.target.result;

  readAll()
  // getAll()
  // keyRange();
};

request.onupgradeneeded = (event) => {
  debugger;
  console.log("数据库进行升级", event);
  db = event.target.result;
  var objectStore = null;
  if (!db.objectStoreNames.contains("person")) {
    objectStore = db.createObjectStore("person", { keyPath: "id" });
    objectStore.createIndex("nameIndex", "name", { unique: true });
    objectStore.createIndex("emailIndex", "email", { unique: true });
  }
};

function readAll() {
  var objectStore = db.transaction(["person"], 'readonly').objectStore("person");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;

    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("没有更多数据了！");
    }
  };
}

function getAll() {
  var objectStore = db.transaction(["person"], 'readonly').objectStore("person");
  var request = objectStore.getAll();

  request.onerror = function (event) {
    console.log("事务失败");
  };

  request.onsuccess = function (event) {
    if (request.result) {
      console.log("读取数据成功", request.result);
    } else {
      console.log("未获得数据记录");
    }
  };
}

function keyRange() {
  const keyRangeValue = IDBKeyRange.bound(2, 3, false, false);

  var objectStore = db.transaction(["person"], 'readonly').objectStore("person");

  objectStore.openCursor(keyRangeValue).onsuccess = function (event) {
    var cursor = event.target.result;
    // debugger
    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("没有更多数据了！");
    }
  };
}
