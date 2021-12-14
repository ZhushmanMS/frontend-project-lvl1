const getCorrctAnsw = (operator, x, y) => {
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

export default getCorrctAnsw;
