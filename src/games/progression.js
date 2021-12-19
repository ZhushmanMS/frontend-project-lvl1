import getRandInt from '../utils/getRandInt.js';
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

const game = () => {
  const startInt = getRandInt(1, 10);
  const step = getRandInt(2, 10);
  const length = getRandInt(5, 16);
  const answerPosition = getRandInt(0, length - 1);
  const gameProgression = getProgression(startInt, step, length);
  const answer = String(gameProgression[answerPosition]);
  gameProgression[answerPosition] = '..';
  const quest = gameProgression.join(' ');
  return [quest, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};
