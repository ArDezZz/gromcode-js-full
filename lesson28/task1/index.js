const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

let result = calc(5).add(40).subtract(5).mult(4).result();

console.log(result);
