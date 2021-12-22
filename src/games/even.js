import { getRandomInt, generateRoundsData } from '../utils.js';
import { engine } from '../engine.js';

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const game = () => {
  const randomInt = getRandomInt(1, 99);
  const question = randomInt;
  const answer = isEven(randomInt);
  return [question, answer];
};

export default () => engine(gameDescription, generateRoundsData(game));
