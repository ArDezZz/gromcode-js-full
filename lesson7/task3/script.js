/* eslint-disable prefer-const */
function flatArray(arr) {
  let resultArray = arr.slice();
  let finalArray = resultArray.flat();
  return finalArray.sort((a, b) => a - b);
}

const array = [1, 2, 3, [5, 21, 30, 4]];
console.log(flatArray(array));
