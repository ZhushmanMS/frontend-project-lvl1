import getRandomInt from '../utils.js';
import { roundСount, engine } from '../engine.js';

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {
  const startInt = getRandomInt(1, 9);
  const step = getRandomInt(2, 9);
  const length = getRandomInt(5, 15);
  const progression = [];
  let temp = startInt;

  for (let i = 0; i < length; i += 1) {
    progression.push(temp);
    temp += step;
  }
  const answerPosition = getRandomInt(0, length - 1);
  const answer = String(progression[answerPosition]);
  progression[answerPosition] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
