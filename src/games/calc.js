import { getRandomInt, generateRoundsData } from '../utils.js';

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
  const randomInt1 = getRandomInt(2, 30);
  const randomInt2 = getRandomInt(2, 10);
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomInt1} ${randomOperator} ${randomInt2}`;
  const answer = String(calc(randomOperator, randomInt1, randomInt2));
  return [question, answer];
};

export default () => generateRoundsData(gameDescription, game);
