import getRandInt from '../getRandInt.js';
import { isPrime as getCorrctAnsw } from '../getCorrctAnsw.js';

const gameRule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const prime = () => {
  const randInt = getRandInt(2, 100);
  const quest = randInt;
  const corrctAnsw = getCorrctAnsw(randInt);
  const QA = [quest, corrctAnsw];
  return QA;
};

export { gameRule, prime };
