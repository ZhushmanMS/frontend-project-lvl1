import { getRandInt, generateRaundsData } from '../utils.js';

const isPrime = (int) => {
  const arrPrimeInts = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  if (arrPrimeInts.includes(int)) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const game = () => {
  const randInt = getRandInt(2, 100);
  const quest = randInt;
  const answer = isPrime(randInt);
  return [quest, answer];
};

export default () => generateRaundsData(gameDescription, game);
