const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

dm = [[]];
assert(tsp_ls(dm) == 0);
let result = tsp_ls(dm);
console.log(`Test Case 1: Expected: 0, Actual: ${result}`);
assert(result === 0);

dm = [[0]];
assert(tsp_ls(dm) == 0);
result = tsp_ls(dm);
console.log(`Test Case 2: Expected: 0, Actual: ${result}`);
assert(result === 0);

dm = [[0,0,0],
      [0,0,0],
      [0,0,0]];
assert(tsp_ls(dm) == 0);
result = tsp_ls(dm);
console.log(`Test Case 3: Expected: 0, Actual: ${result}`);
assert(result === 0);

dm = [[0,1,2],
      [1,0,2],
      [2,2,0]];
assert(tsp_ls(dm) >= 3);
result = tsp_ls(dm);
console.log(`Test Case 4: Expected: >= 3, Actual: ${result}`);
assert(result >= 3);

// https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];
assert(tsp_ls(dm) >= 13);
result = tsp_ls(dm);
console.log(`Test Case 5: Expected: >= 13, Actual: ${result}`);
assert(result >= 13);
