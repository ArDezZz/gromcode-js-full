/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';
//=====================task1===================
// const user = {
//   firstName: 'Joe',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(user.getFullName());
//====================task2===================
// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     console.log(this);
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };
// callbackPrompt.showDeferredPrompt(1000);
//==================task3==============
// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.apply(this, arguments), ms);
//   };
// }
// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'am ${this.name}!`);
//   },
//   //   sum(a, b) {
//   //     console.log(a + b);
//   //   },
// };

// const deferredHi = defer(user.sayHi, 1000);
// deferredHi.call({ name: 'Bob' });
//================task4==============
/* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// function sayName() {
//   console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// sayName.call(student);

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// sayName.call({ name: 'Bruce' });

// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// greeting.call(company, 'Bob', 'Marley');

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const res = getPopulation.call(country, 43000);
// console.log(res);
// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// transaction.printTransaction.call(anotherTransaction);
//===================task5===============
// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// function sayName() {
//   console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// sayName.apply(student);

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// sayName.apply({ name: 'Bruce' });

// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// greeting.apply(company, ['Bob', 'Marley']);

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// const res = getPopulation.apply(country, [43000]);
// console.log(res);

// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// // вызовите метод transactionprintTransaction. так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// transaction.printTransaction.apply(anotherTransaction);
//===============task6=============
// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// function sayName() {
//   console.log(this.name);
// }

// /*
//  * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
//  * используйте .bind и ф-цию sayName
//  */
// const sayStudentName = sayName.bind(student);
// sayStudentName();

// /*
//  * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
//  * используйте ф-цию sayName и .bind с нужным объектом
//  */
// const sayBruceName = sayName.bind({ name: 'Bruce' });
// sayBruceName();
// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft',
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// /*
//  * создайте ф-цию specialGreeting которая будет выводить в консоль
//  * 'Hello, Bob Marley. Welcome to the Microsoft`
//  * используйте ф-цию greeting и .bind с нужным объектом и аргументами
//  * specialGreeting не должна принимать ни одного аргумента
//  */
// const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
// specialGreeting();
// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv',
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// /*
//  * создайте ф-цию getUkrainePopulation которая будет возвращать строку
//  * 'Population in Ukraine is 43000`
//  * 43000 передавайте в виде числа
//  * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
//  * getUkrainePopulation не должна принимать ни одного аргумента
//  */
// const getUkrainePopulation = getPopulation.bind(country, 43000);
// getUkrainePopulation();
// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//     console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   },
// };

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// /*
//  * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
//  * '400 USD - buy on NASDAQ`
//  * используйте метод transaction.printTransaction и .bind с нужным объектом
//  * printSpecialTransaction не должна принимать ни одного аргумента
//  */
// const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
// printSpecialTransaction();
//================task7==================
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const words = fullName.split(' ');
//     this.firstName = words[0];
//     this.lastName = words[1];
//   },
// };
// console.log(user.getFullName());
