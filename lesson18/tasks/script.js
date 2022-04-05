/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';
//=====================task1===================
// export const makeCounter = () => {
//   let count = 0;
//   return function () {
//     return count++;
//   }
// };
// const counter1 = makeCounter();
// const counter2 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter1());
// console.log(counter2());
//======================task2===================
// input: number
// output: object
// export function createCalculator() {
//   let number = 0;
//   function add(a) {
//     number += a;
//   }
//   function decrease(b) {
//     number -= b;
//   }
//   function reset() {
//     number = 0;
//   }
//   function getMemo() {
//     return number;
//   }
//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// }
// const calc = createCalculator();
// console.log(calc());
//=========================task3==================
'use strict';

/**
 * @return {object}
 */
export const createLogger = () => {
  let memory = [];
  let warn = text => memory.unshift({ message: text, dateTime: new Date(), type: 'warn' });
  let error = text => memory.unshift({ message: text, dateTime: new Date(), type: 'error' });
  let log = text => memory.unshift({ message: text, dateTime: new Date(), type: 'log' });
  let getRecords = text => {
    if (text == 'warn') return memory.filter(obj => obj.type == 'warn');
    if (text == 'error') return memory.filter(obj => obj.type == 'error');
    if (text == 'log') return memory.filter(obj => obj.type == 'log');
    return memory;
  };
  let logout = {
    warn,
    error,
    log,
    getRecords,
    memory,
  };
  return logout;
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
