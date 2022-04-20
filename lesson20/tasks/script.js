/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');
'use strict';
//=====================task1===================
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }
//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   setAge(age) {
//     this.age = age;
//     if (age < 0) {
//       return false;
//     }
//     if (age >= 25) {
//       console.log(`New photo request was sent for ${this.name}`);
//     }
//     return age;
//   }
//   static createEmpty(name, age) {
//     const user = {
//       name: '',
//       age: null,
//     };
//     return user;
//   }
// }

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 27);
// console.log(user1);
//=====================task2===================
// class Vehicle {
//   constructor(name, numberOfWheels) {
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//   }
//   move() {
//     console.log(`${this.name} is moving`);
//   }
//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }
// class Ship extends Vehicle {
//   constructor(name, numberOfWheels, maxSpeed) {
//     super(name, numberOfWheels);

//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }
//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }
// const ship1 = new Ship('Argo', 0, 253);
// console.log(ship1);
// ship1.move();
//=====================task3=====================
// class Wallet {
//   constructor(balance) {
//     this.balance = 0;
//   }
//   getBalance() {
//     return this.balance;
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(`No enouhg funds`);
//       return;
//     }
//     this.balance -= amount;
//   }
// }
//=====================task4=====================
// class Order {
//   constructor(price, city, type) {
//     this.id = String(Math.random());
//     this.price = price;
//     this.dateCreated = new Date();
//     this.isConfirmed = false;
//     this.dateConfirmed;
//     this.city = city;
//     this.type = type;
//   }
//   checkPrice() {
//     if (this.price >= 1000) {
//       return true;
//     }
//     return false;
//   }
//   confirmOrder() {
//     this.isConfirmed = true;
//     this.dateConfirmed = new Date();
//   }
//   isValidType() {
//     if (this.type == 'Buy' || this.type == 'Sell') {
//       return true;
//     }
//     return false;
//   }
// }

// const ord1 = new Order(1200, 'Dnepr', 'Sell');
// console.log(ord1.checkPrice());
// console.log(ord1.isValidType());
// console.log(ord1);
// ord1.confirmOrder();
// console.log(ord1);

// const ord2 = new Order(1300, 'Kyiv', 'Buy');
// ord2.checkPrice();
// ord2.confirmOrder();
// console.log(ord2);
//=====================task5=====================
class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository extends User {
  constructor(users) {
    super();
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    return this._users.map(el => el._name);
  }
  getUserIds() {
    return this._users.map(el => el._id);
  }
  getUserNameById(id) {
    return this.users.find(el => el._id == id)._name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
