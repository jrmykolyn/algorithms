const data = require('./data');

const l = [data];

const breadthFirstSearch = (n, levels) => {
  const { value, left, right } = (levels.shift() || {});
  // Hmmm... ensure that this is correct.
  levels.push(left, right);
  if (typeof value === 'undefined') return;
  if (value === n) return value;
  return breadthFirstSearch(n, levels);
};

const result = breadthFirstSearch(200, l);
console.log(result);
