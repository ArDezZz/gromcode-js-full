function findDivCount(a, b, n) {
  let res = 0;
  for (; a <= b; a += 1) {
    if (a % n === 0) {
      res += 1;
    }
  }
  return res;
}
