/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';
//=====================task1===================
const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  __proto__: vehicle,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};
ship.startMachine();
ship.stopMachine();
//=======================task2=====================
const obj1 = {
  name: 'John',
  age: '18',
};
function getOwnProps(ship) {
  let resArrProp = [];
  for (let key in ship) {
    if (ship.hasOwnProperty(key) && typeof ship[key] !== 'function') {
      resArrProp.push(key);
    }
  }
  return resArrProp;
}
console.log(getOwnProps(obj1));
//=====================task3======================
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  this.age = age;
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};
const user1 = new User('Tom', -1);
const user2 = new User('Bob', 27);
user1.setAge();
//=====================task4======================
const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
export default user;
