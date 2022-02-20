/* eslint-disable spaced-comment */
//Task6
// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(el => (el % 2 === 0 ? el + delta : el));
// }

// console.log(increaseEvenEl([1, 2, 3, 4, 5], 2));
//task7
// 'use strict';

// const withdraw = (clients, balances, client, amount) => {
//     const index = clients.indexOf(client);

//     return balances[index] >= amount ? (balances[index] -= amount) : -1;
//   };

// example 1:

// //input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
// task8
// const sum = arr => (Array.isArray(arr) ? arr.reduce((acm, num) => acm + num) : null);

// console.log(sum([2, 5, 6, 3, 0, 3, -1]));
//task9
// function filterNames(arr, text) {
//   const result = arr.filter(word => word.length > 5 && word.includes(text));
//   return result;
// }
// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
//task10
function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.reduce((acm, el) => acm + el);
  const finalRes = res / arr.length;
  return finalRes;
}
console.log(arrAverage([2, 5, 6, 3]));
