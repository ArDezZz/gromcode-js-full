/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */
//===============task1===============
// const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));
// const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

// const getNaN = arr => arr.filter(el => Number.isNaN(el));
// const getNaNV2 = arr => arr.filter(el => isNaN(el));

// const getIntegers = arr => arr.filter(el => Number.isInteger(el));
//===============task2=================
// const getParsedIntegers = arr => [...arr].map(el => Number.parseInt(el));
// const getParsedIntegersV2 = arr => [...arr].map(el => parseInt(el));

// const getParsedFloats = arr => [...arr].map(el => Number.parseFloat(el));
// const getParsedFloatsV2 = arr => [...arr].map(el => parseFloat(el));
//===============task3===============
// 'use strict';

// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// const multiRound = num => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   +num.toFixed(2),
// ];
// // examples
// console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
//=======================task4=======================
// const getMaxAbsoluteNumber = arr => {
//   if (!Array.isArray(arr) || !arr.length) {
//     return null;
//   }
//   const res = [...arr].map(el => Math.abs(el));

//   return Math.max(...res);
// };

// // examples
// console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
// console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
// getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
//================task5=======================
// function getTotalPrice(arr) {
//   const sum = arr.reduce((acc, el) => acc + el);

//   return `$${(Math.floor(sum * 100) / 100).toFixed(2)}`;
// }

// console.log(getTotalPrice([17.345, 18.456]));
//===============task6=====================
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// const getRandomNumbers = (length, from, to) => {
//   from = Math.ceil(from);
//   to = Math.floor(to);

//   if (from >= to) {
//     return null;
//   }

//   const result = [];

//   for (let i = 0; i < length; i++) {
//     result.push(Math.floor(Math.random() * (to - from + 1) + from));
//   }

//   return result;
// };

// // examples
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
//=========================task7============================
'use strict';

/**
 * @param {number} num
 * @return {number[]}
 */

const superRound = (num, prec) => {
  const pow = 10 ** prec;
  return [
    Math.floor(num * pow) / pow,
    Math.trunc(num * pow) / pow,
    Math.ceil(num * pow) / pow,
    Math.round(num * pow) / pow,
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
