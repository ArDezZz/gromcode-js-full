/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-syntax */
//= ============task1===========
// const getAdults = obj => {
//   const res = [];
//   for (const key in obj) {
//     if (obj[key] >= 18) {
//       res.push(key);
//     }
//   }
//   return res;
// };

// // examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56
//==========================task2===================
// const copyObj = obj => Object.assign({}, obj);
//=========================task3====================
// 'use strict';

//   @param {object} obj
//   @return {undefined}

// function getKeys(obj) {
//   const res = Object.keys(obj);
//   res.map(elem => console.log(elem));
// }

// examples
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
//================task4======================
// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// function addPropertyV2(userData, userId) {
//   const resObj = {};
//   resObj.id = userId;
//   return Object.assign(userData, resObj);
// }

// function addPropertyV3(userData, userId) {
//   const resObj = {};
//   resObj.id = userId;
//   const res1 = Object.assign({}, userData);
//   const res2 = Object.assign(res1, resObj);
//   return res2;
// }

// function addPropertyV4(userData, userId) {
//   const resObj = {};
//   resObj.id = userId;
//   const res1 = { ...userData };
//   const res2 = Object.assign(res1, resObj);
//   return res2;
// }

// examples
// const user = {
//   name: 'Sam',
// };
// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567'));
// console.log(addPropertyV3(user, '1234567'));
// console.log(addPropertyV4(user, '1234567'));
//======================task5====================
// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign(obj2, obj1);
// }

// function mergeObjectsV3(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// function mergeObjectsV4(obj1, obj2) {
//   return { ...obj2, ...obj1 };
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
//==========================task6==================
// const getPeople = obj => {
//   return Object.entries(obj)
//     .reduce((acc, ell) => [...acc, ...ell[1]], [])
//     .map(user => user.name);
// };
// const rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Ann' }, { name: 'Denis' }, { name: 'Max' }],
//   room2: [{ name: 'Dan' }, { name: 'Leonid' }],
// };

// console.log(getPeople(rooms));
//=========================task7===================
// const getTotalRevenue = transactions => {
//   return [...transactions].reduce((sum, transaction) => sum + transaction.amount, 0);
// };

// // examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(result);
