/* eslint-disable no-else-return */
'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
  let res = 0;
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      res += element;
    }
  }
  if (res > 100) {
    return true;
  } else {
    return false;
  }
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
