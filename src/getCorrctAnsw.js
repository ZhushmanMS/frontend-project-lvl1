const isEven = (randInt) => {
  if (randInt % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const calc = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '/':
      if (x % y === 0) {
        return x / y;
      } return (x / y).toFixed(1);
    case '*':
      return x * y;
    case '%':
      return x % y;
    default:
      return NaN;
  }
};

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const getArr = (startInt, step, length) => {
  const arr = [];
  let temp = startInt;
  for (let i = 0; i < length; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const isPrime = (int) => {
  const arrPrimeInt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  if (arrPrimeInt.includes(int)) {
    return 'yes';
  }
  return 'no';
};

export {
  isEven, calc, getGCD, getArr, isPrime,
};
