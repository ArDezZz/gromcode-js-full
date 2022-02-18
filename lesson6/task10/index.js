function cloneArr(arr) {
  const res = arr.slice();
  if (!Array.isArray(arr)) {
    return null;
  }
  return res;
}
