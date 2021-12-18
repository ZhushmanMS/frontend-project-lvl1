import getRandInt from '../utils/getRandInt.js';

const getGCD = (int1, int2) => {
  if (!int2) {
    return int1;
  }
  return getGCD(int2, int1 % int2);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const randInt1 = getRandInt(3, 50);
  const randInt2 = getRandInt(3, 50);
  const quest = `${randInt1} ${randInt2}`;
  const answer = String(getGCD(randInt1, randInt2));
  const QA = [quest, answer];
  return QA;
};

export { gameRule, game };
