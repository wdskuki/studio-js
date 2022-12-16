var p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.reject(3);
Promise.all([p1, p2, p3]).then(function (results) {
    console.log(results);  // [1, 2, 3]
}).catch(e => {
  console.error(e)
})