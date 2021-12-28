import getRandomInt from '../utils.js';
import { roundsСount, engine } from '../engine.js';

const isEven = (int) => int % 2 === 0;

const gameDescription = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const generateRound = () => {
  const randomInt = getRandomInt(1, 99);
  const question = randomInt;
  const answer = isEven(randomInt) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
