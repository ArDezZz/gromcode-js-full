const add2 = value => value + 2;
const square = value => value * value;
const div2 = value => value / 2;

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };
const doEverything = compose(add2, square, div2);

console.log(doEverything(2));
