import { getRandomInt, generateRoundsData } from '../utils.js';
import { engine } from '../engine.js';

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
  const startInt = getRandomInt(1, 10);
  const step = getRandomInt(2, 10);
  const length = getRandomInt(5, 16);
  const answerPosition = getRandomInt(0, length - 1);
  const gameProgression = getProgression(startInt, step, length);
  const answer = String(gameProgression[answerPosition]);
  gameProgression[answerPosition] = '..';
  const question = gameProgression.join(' ');
  return [question, answer];
};

export default () => engine(gameDescription, generateRoundsData(game));
