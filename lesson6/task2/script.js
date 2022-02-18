'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  let res = 0;
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      res += element;
    }
  }
  return res;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
