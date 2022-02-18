function checker(arr) {
  let res = 0;
  let max = 0;
  let min = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  res = max + min;
  if (res > 1000) {
    return true;
  }
  return false;
}
console.log(checker([2, 3, 4, 5, 7, 10]));
