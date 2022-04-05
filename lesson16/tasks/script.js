/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';

// const { wrapOutput } = require('prettier');

//=====================task1===================
// let a = 17;

// if (a) {
//   let a = 1;

//   console.log(a);
// }

// console.log(a);
//========================task2================
// var arr = [];

// for (let i = 0; i < 10; i += 1) {
//   arr[i] = function () {
//     return i;
//   };
// }

// export { arr };
//=====================task3====================
// input: num - arra length
// output arr with num length
// const createArrayOfFunctions = el => {
//   let arr = [];
//   if (!el) {
//     return arr;
//   }

//   if (isNaN(el)) {
//     return null;
//   }
//   arr.length = el;
//   for (let index = 0; index < arr.length; index++) {
//     arr[index] = function () {
//       return index;
//     };
//   }
//   return arr;
// };

// console.log(createArrayOfFunctions());
//=====================task3============

// var foo = 1;
// function bar() {
//   if (!foo) {
//     let foo = 10;
//   }
  
//   return foo;
// }

// var foo = bar();
// console.log(foo);
// export default foo;