import getRandomInt from '../utils.js';
import { roundСount, engine } from '../engine.js';

const isPrime = (int) => {
  if (int < 2) {
    return 'no';
  }
  for (let i = 2; i <= int / 2; i += 1) {
    if (int % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameDescription = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const generateRound = () => {
  const randomInt = getRandomInt(2, 99);
  const question = randomInt;
  const answer = isPrime(randomInt);
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
