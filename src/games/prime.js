import { getRandomInt, generateRoundsData } from '../utils.js';

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

const game = () => {
  const randomInt = getRandomInt(2, 100);
  const question = randomInt;
  const answer = isPrime(randomInt);
  return [question, answer];
};

export default () => generateRoundsData(gameDescription, game);
