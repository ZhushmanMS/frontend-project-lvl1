import getRandomInt from '../utils.js';
import { roundСount, engine } from '../engine.js';

const getProgression = (startInt, step, length) => {
  const progression = [];
  let temp = startInt;
  for (let i = 0; i < length; i += 1) {
    progression.push(temp);
    temp += step;
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {
  const startInt = getRandomInt(1, 9);
  const step = getRandomInt(2, 9);
  const length = getRandomInt(5, 15);
  const answerPosition = getRandomInt(0, length - 1);
  const gameProgression = getProgression(startInt, step, length);
  const answer = String(gameProgression[answerPosition]);
  gameProgression[answerPosition] = '..';
  const question = gameProgression.join(' ');
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(gameDescription, rounds);
};
