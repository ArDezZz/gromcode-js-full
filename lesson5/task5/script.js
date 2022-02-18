let res = 0;
function getSum(startInterval, endInterval) {
  for (let index = startInterval; index <= endInterval; index += 1) {
    if (index % 2 === 0) {
      res += index;
    }
  }
  return res;
}

console.log(getSum(1, 10));
