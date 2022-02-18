'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
