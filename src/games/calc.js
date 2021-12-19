import { getRandInt, generateRaundsData } from '../utils.js';

const calc = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return 'Operator not found!';
  }
};

const gameDescription = 'What is the result of the expression?';

const game = () => {
  const operators = ['+', '-', '*'];
  const randInt1 = getRandInt(2, 30);
  const randInt2 = getRandInt(2, 10);
  const randOperator = operators[Math.floor(Math.random() * operators.length)];
  const quest = `${randInt1} ${randOperator} ${randInt2}`;
  const answer = String(calc(randOperator, randInt1, randInt2));
  return [quest, answer];
};

export default () => generateRaundsData(gameDescription, game);
