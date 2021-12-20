import { getRandomInt, generateRoundsData } from '../utils.js';

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const game = () => {
  const randomInt = getRandomInt(1, 100);
  const question = randomInt;
  const answer = isEven(randomInt);
  return [question, answer];
};

export default () => generateRoundsData(gameDescription, game);
