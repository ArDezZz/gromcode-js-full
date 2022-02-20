function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let resArr = [];
  resArr = arr.map(function (currentValue) {
    return currentValue * currentValue;
  });
  return resArr;
}

const array = [3, 4, 5];

console.log(squareArray(array));
