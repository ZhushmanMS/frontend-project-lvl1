import getRandInt from '../getRandInt.js';
import { getGCD as getCorrctAnsw } from '../getCorrctAnsw.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const randInt1 = getRandInt(3, 100);
  const randInt2 = getRandInt(3, 100);
  const quest = `${randInt1} ${randInt2}`;
  const corrctAnsw = String(getCorrctAnsw(randInt1, randInt2));
  const QA = [quest, corrctAnsw];
  console.log(QA);
  return QA;
};

export { gameRule, gcd };
