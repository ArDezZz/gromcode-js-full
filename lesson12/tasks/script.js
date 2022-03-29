/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');

//====================task1===================
// const calc = expression => {
//   const [a, operator, b] = expression.split(' ');
//   let result;
//   switch (operator) {
//     case '+':
//       result = Number(a) + Number(b);
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     case '/':
//       result = a / b;
//       break;
//   }
//   return `${expression} = ${result}`;
// };
// console.log(calc('1 + 2'));
//======================task2=====================
//input: string
//output: reverse string
// Algo
// 1)convert in to Array
// 2)reverse array
// 3)make a array in to string
// const reverseString = str => (str !== String(str) ? null : str.split('').reverse().join(''));
// const resStr1 = 'abcdefg';
// console.log(reverseString(resStr1));
//====================task3=====================
// input: array with tranzactions
// ouput: array with edit
// Algo
// 1)check el:
// 1. if el have letter - drop it.
// 2. if el have a space - drop it.
// 2)every el of array will have "$" and will have a two decimal places
// 3) output new array with edit.
// 4) starter array will not have an edit.
const cleanTransactionsList = arr => {
  const resArr = [];
  const timeArr = arr.slice();
  for (const el of timeArr) {
    if (isNaN(el)) {
      continue;
    }
    resArr.push('$'.concat((Math.ceil(el * 100) / 100).toFixed(2)));
  }
  return resArr;
};
// const cleanTransactionsList = arr =>
//   arr.map(el => (isNaN(el) ?  : '$'.concat((Math.ceil(el * 100) / 100).toFixed(2))));
const arr = ['1.9', '16.4', '17  ', '1 dollar', '123 //'];
console.log(cleanTransactionsList(arr));
