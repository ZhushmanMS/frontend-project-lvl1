import getRandInt from '../utils/getRandInt.js';
import { roundСount, engine } from '../engine.js';

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

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};
