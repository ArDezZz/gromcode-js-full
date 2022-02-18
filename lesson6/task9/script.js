function reverseArray(array) {
  const res = array.slice();
  if (!Array.isArray(array)) {
    return null;
  }
  res.reverse();
  return res;
}
console.log(reverseArray([2, 3, 4, 5]));
