/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');

//====================task1===================
export const reverseArray = arr => (Array.isArray(arr) ? [...arr].reverse() : null);

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  return balances[index] >= amount ? (balances[index] -= amount) : -1;
};
