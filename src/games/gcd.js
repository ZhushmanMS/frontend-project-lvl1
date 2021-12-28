import getRandomInt from '../utils.js';
import { roundsСount, engine } from '../engine.js';

const getGCD = (int1, int2) => {
  if (!int2) {
    return int1;
  }
  return getGCD(int2, int1 % int2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const randomInt1 = getRandomInt(3, 99);
  const randomInt2 = getRandomInt(3, 99);
  const question = `${randomInt1} ${randomInt2}`;
  const answer = String(getGCD(randomInt1, randomInt2));
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
