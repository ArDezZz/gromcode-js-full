/* eslint-disable no-else-return */
'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  let res = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index += 1) {
      let element = arr[index];
      res.push(element * element);
    }
  }
  return res;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
