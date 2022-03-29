const getMinSquaredNumber = arr => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  const res = arr.map(el => Math.abs(el));
  const res1 = Math.min(...res);
  return res1 * res1;
};

const arr = [-777, 3, -2, 6, 45, -20];
console.log(getMinSquaredNumber(arr));
