// console.log('hello world')

function bubble(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[i]) {
        let t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
      }
    }
  }
}

function qsort(arr, p, r) {
  if(p < r) {
    let q = partition(arr, p, r);
    qsort(arr, p, q - 1);
    qsort(arr, q + 1, r);
  }
}
function partition(arr, p, r) {
  /**
   * [p,i] 小于等于x
   * [i+1, j-1] 大于x
   * [j, r-1] 有待校验的
   * [2,8,7,1,3,5,6,4]
   * 
   */
  x = arr[r];
  i = p - 1;

  for(let j = p; j <= r - 1; j++) {
    if(arr[j] <= x) {
      i++;
      swap(arr, i, j);
   }
  }
  swap(arr, i+1, r);
  return i+1;
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

const arr = [4,1,2,3, 11, -1]
qsort(arr, 0, arr.length - 1);
console.log(arr);
