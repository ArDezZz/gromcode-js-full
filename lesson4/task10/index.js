/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-const */
let res = 0;
for (let index = 0; index <= 1000; index += 1) {
  res += index;
}
let div;
div = res / 1234;
let mod;
mod = res % 1234;

console.log(div > mod ? true : false);
