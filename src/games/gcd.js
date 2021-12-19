import getRandInt from '../utils/getRandInt.js';
import { roundСount, engine } from '../engine.js';

const getGCD = (int1, int2) => {
  if (!int2) {
    return int1;
  }
  return getGCD(int2, int1 % int2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const randInt1 = getRandInt(3, 100);
  const randInt2 = getRandInt(3, 100);
  const quest = `${randInt1} ${randInt2}`;
  const answer = String(getGCD(randInt1, randInt2));
  return [quest, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};
