const data = require('./data');

const depthFirstSearch = (n, data) => {
  let val;
  if (data.value === n) val = n;
  if (!val && data.left) val = depthFirstSearch(n, data.left);
  if (!val && data.right) val = depthFirstSearch(n, data.right);
  return val;
};

const result = depthFirstSearch(200, data);
console.log(result);
