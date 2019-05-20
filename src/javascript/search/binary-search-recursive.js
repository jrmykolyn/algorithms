const data = require('./data');

const binarySearch = (n, data) => {
  if (data.value === n) return n;
  if (data.value > n && data.left) return binarySearch(n, data.left);
  if (data.value < n && data.right) return binarySearch(n, data.right);
  return -1
};

const result = binarySearch(200, data);
console.log(result);
