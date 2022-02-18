/* eslint-disable no-else-return */
/* eslint-disable strict */
'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  let res = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index += 1) {
      let element = arr[index];
      if (element % 2 === 0) {
        res.push(element + delta);
      } else {
        res.push(element);
      }
    }
  }
  return res;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
