import getRandomInt from '../utils.js';
import { roundСount, engine } from '../engine.js';

const isEven = (int) => {
  if (int % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const generateRound = () => {
  const randomInt = getRandomInt(1, 99);
  const question = randomInt;
  const answer = isEven(randomInt);
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
