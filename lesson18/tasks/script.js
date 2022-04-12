/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';
//=====================task1===================
// const event = {
//   guests: [
//     { name: 'Tom', age: 17, email: 'T@gmail.com' },
//     { name: 'Bob', age: 18, email: 'b@gmail.com' },
//   ],
//   message: 'Welcome to the party!',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };

// console.log(event.getInvitations());
//===============task2=======================
// const wallet = {
//   transactions: [1, 2, 3, 5, 6, 676, 4332, 646456, 34, -9],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   },
// };
// console.log(wallet.getMax());
// console.log(wallet.getMin());
//===================task3=====
// function sumOfSquares() {
//   return [...arguments].reduce((acc, el) => el * el + acc);
// }
// console.log(sumOfSquares(1, 2, 3));
//========================task4================
//input: func
//output: func and memorize datas in property (callsHistory)

function saveFuncCalls(func) {
  return function withMemory() {
    if (Array.isArray(withMemory.calls)) {
      withMemory.calls.push([...arguments]);
    } else {
      withMemory.calls = [[...arguments]];
    }

    return func.apply(this, arguments);
  };
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
console.log(sumWithMemory(4, 2)); // ===> 6
console.log(sumWithMemory(9, 1)); // ===> 10

console.log(sumWithMemory.calls); // ===> [ [4, 2], [9, 1] ]

// example 2
// function addDelta(array, delta) {
//   return array.map(el => el + delta);
// }

// const addDeltaWithMemory = saveFuncCalls(addDelta);
// addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
// addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

// addDeltaWithMemory.calls; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// example 3
// const user = {
//   name: 'John',
//   sayHi() {
//     return this.name;
//   },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.calls); // [ [] ]
