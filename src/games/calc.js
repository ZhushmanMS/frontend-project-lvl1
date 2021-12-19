import getRandInt from '../utils/getRandInt.js';
import { roundСount, engine } from '../engine.js';

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

const gameDescription = 'What is the result of the expression? \nNOTE: round a rational number to the nearest tenth!';

const game = () => {
  const arrOperts = ['+', '-', '*', '/', '%'];
  const randInt1 = getRandInt(2, 30);
  const randInt2 = getRandInt(2, 10);
  const maxInt = Math.max(randInt1, randInt2);
  const minInt = Math.min(randInt1, randInt2);
  const randOpert = arrOperts[Math.floor(Math.random() * arrOperts.length)];
  const quest = `${maxInt} ${randOpert} ${minInt}`;
  const answer = String(calc(randOpert, maxInt, minInt));
  return [quest, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};
