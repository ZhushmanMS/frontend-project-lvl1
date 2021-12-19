import { getRandInt, generateRaundsData } from '../utils.js';

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const game = () => {
  const randInt = getRandInt(1, 100);
  const quest = randInt;
  const answer = isEven(randInt);
  return [quest, answer];
};

export default () => generateRaundsData(gameDescription, game);
