import getRandInt from '../utils/getRandInt.js';

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const game = () => {
  const randInt = getRandInt(1, 100);
  const quest = randInt;
  const answer = isEven(randInt);
  const QA = [quest, answer];
  return QA;
};

export { gameRule, game };
