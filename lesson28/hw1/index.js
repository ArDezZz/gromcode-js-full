const shmoment = initValue => {
  let result = new Date(initValue);
  const dateCalculator = {
    add(value, number) {
      if (value === 'years') {
        result.setFullYear(result.getFullYear() + number);
        return this;
      }
      if (value === 'months') {
        result.setMonth(result.getMonth() + number);
        return this;
      }
      if (value === 'days') {
        result.setDate(result.getDate() + number);
        return this;
      }
      if (value === 'hours') {
        result.setHours(result.getHours() + number);
        return this;
      }
      if (value === 'minutes') {
        result.setMinutes(result.getMinutes() + number);
        return this;
      }
      if (value === 'seconds') {
        result.setSeconds(result.getSeconds() + number);
        return this;
      }
      if (value === 'milliseconds') {
        result.setMilliseconds(result.getMilliseconds() + number);
        return this;
      }
    },
    subtract(value, number) {
      if (value === 'years') {
        result.setFullYear(result.getFullYear() - number);
        return this;
      }
      if (value === 'months') {
        result.setMonth(result.getMonth() - number);
        return this;
      }
      if (value === 'days') {
        result.setDate(result.getDate() - number);
        return this;
      }
      if (value === 'hours') {
        result.setHours(result.getHours() - number);
        return this;
      }
      if (value === 'minutes') {
        result.setMinutes(result.getMinutes() - number);
        return this;
      }
      if (value === 'seconds') {
        result.setSeconds(result.getSeconds() - number);
        return this;
      }
      if (value === 'milliseconds') {
        result.setMilliseconds(result.getMilliseconds() - number);
        return this;
      }
    },
    result() {
      return result;
    },
  };
  return dateCalculator;
};

let result = shmoment(new Date()).add('years', 2).subtract('years', 1).result();
console.log(result);
