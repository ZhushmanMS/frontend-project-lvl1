import getRandInt from '../getRandInt.js';

const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const evenCheck = () => {
  const randInt = getRandInt(1, 100);
  const corrctAnsw = (randInt % 2 === 0) ? 'yes' : 'no';
  const QA = [randInt, corrctAnsw];
  console.log(QA);
  return QA;
};

export { evenCheck, gameRule };
