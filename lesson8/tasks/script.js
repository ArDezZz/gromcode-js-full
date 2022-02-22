/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable spaced-comment */
//=============task1==========
// const transformToObject = arr => {
//   const obj = {};
//   arr.forEach(el => {
//     obj[el] = el;
//   });
//   return obj;
// };

//====================task2=============
// const concatProps = obj => {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// };

// // examples
// concatProps({ name: 'John Doe', age: 17, interest: 'football' }); //==> ['John Doe', 17, 'football']

//=========================task3======================
// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// /* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
// console.log(transaction.currency);

// /* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
// console.log(transaction['value']);

// const key = 'operation';
// /* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
// console.log(transaction['operation']);

// /* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
// console.log(transaction.agent['company']);

// /* 5. Выведи в консоль значение свойства 'country' используя точку */
// console.log(transaction.agent.country);

// /* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
// console.log(transaction['operation time']);
//===========================task4====================
// const user = {
//   name: 'Tom',
//   age: 17,
// };

// /* присвой объекту свойство hobby со значением 'football' с помощью точки */
// user.hobby = 'footbal';

// const anotherKey = 'married';
// /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
// user.married = false;

// /* присвой объекту свойство 'favorite music' со значением 'rock' */
// user['favorite music'] = 'rock';

// /* присвой объекту свойство 'address', которое будет пустым объкетом */
// user.address = {};

// /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
// user.address.counrty = 'Ukraine';

// /* присвой объекту в 'address' свойство 'building', со значением 17 */
// user.address.building = 17;
// /* выведи в консоль итоговый объект user */
// console.log(user);
//========================task5========================
// function getKeys(obj) {
//   for (const key in obj) {
//     console.log(key);
//   }
// }

// const obj = {
//   first: 'key',
//   second: 'none',
//   third: 'value',
// };

// console.log(getKeys(obj));
//====================task6=================
// const pickProps = (obj, props) => {
//   let res = {};
//   for (const key in obj) {
//     if (props.includes(key)) {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
//========================task7==================
const getAdults = obj => {
  const res = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
