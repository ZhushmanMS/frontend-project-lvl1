import { getRandomInt, generateRoundsData } from '../utils.js';
import { engine } from '../engine.js';

const getGCD = (int1, int2) => {
  if (!int2) {
    return int1;
  }
  return getGCD(int2, int1 % int2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const randomInt1 = getRandomInt(3, 100);
  const randomInt2 = getRandomInt(3, 100);
  const question = `${randomInt1} ${randomInt2}`;
  const answer = String(getGCD(randomInt1, randomInt2));
  return [question, answer];
};

export default () => engine(gameDescription, generateRoundsData(game));
