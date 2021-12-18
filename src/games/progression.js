import getRandInt from '../getRandInt.js';
import { getArr } from '../getCorrctAnsw.js';

const gameRule = 'What number is missing in the progression?';

const progression = () => {
  const startIntArr = getRandInt(1, 10);
  const stepArr = getRandInt(2, 10);
  const lengthArr = getRandInt(5, 16);
  const answPosit = getRandInt(0, lengthArr - 1);
  const questArr = getArr(startIntArr, stepArr, lengthArr);
  const corrctAnsw = String(questArr[answPosit]);
  questArr[answPosit] = '..';
  const quest = questArr.join(' ');
  const QA = [quest, corrctAnsw];
  return QA;
};

export { gameRule, progression };
