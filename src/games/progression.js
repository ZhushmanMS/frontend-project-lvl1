import getRandInt from '../utils/getRandInt.js';

const getArr = (startInt, step, length) => {
  const arr = [];
  let temp = startInt;
  for (let i = 0; i < length; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const gameRule = 'What number is missing in the progression?';

const game = () => {
  const startIntArr = getRandInt(1, 10);
  const stepArr = getRandInt(2, 10);
  const lengthArr = getRandInt(5, 16);
  const answerPosition = getRandInt(0, lengthArr - 1);
  const gameArr = getArr(startIntArr, stepArr, lengthArr);
  const answer = String(gameArr[answerPosition]);
  gameArr[answerPosition] = '..';
  const quest = gameArr.join(' ');
  const QA = [quest, answer];
  return QA;
};

export { gameRule, game };
