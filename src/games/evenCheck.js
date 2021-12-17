import getRandInt from '../getRandInt.js';
import { thisEven as getCorrctAnsw } from '../getCorrctAnsw.js';

const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const evenCheck = () => {
  const randInt = getRandInt(1, 100);
  const quest = randInt;
  const corrctAnsw = getCorrctAnsw(randInt);
  const QA = [quest, corrctAnsw];
  console.log(QA);
  return QA;
};

export { gameRule, evenCheck };
