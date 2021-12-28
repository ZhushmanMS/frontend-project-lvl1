import getRandomInt from '../utils.js';
import { roundsСount, engine } from '../engine.js';

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

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateRound = () => {
  const randomInt1 = getRandomInt(2, 29);
  const randomInt2 = getRandomInt(2, 9);
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${randomInt1} ${randomOperator} ${randomInt2}`;
  const answer = String(calc(randomOperator, randomInt1, randomInt2));
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
