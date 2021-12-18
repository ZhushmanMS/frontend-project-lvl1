import getRandInt from '../getRandInt.js';
import { calc as getCorrctAnsw } from '../getCorrctAnsw.js';

const gameRule = 'What is the result of the expression? \nNOTE: round a rational number to the nearest tenth!';

const calc = () => {
  const arrOperts = ['+', '-', '*', '/', '%'];
  const randInt1 = getRandInt(2, 30);
  const randInt2 = getRandInt(2, 10);
  const maxInt = Math.max(randInt1, randInt2);
  const minInt = Math.min(randInt1, randInt2);
  const randOpert = arrOperts[Math.floor(Math.random() * arrOperts.length)];
  const quest = `${maxInt} ${randOpert} ${minInt}`;
  const corrctAnsw = String(getCorrctAnsw(randOpert, maxInt, minInt));
  const QA = [quest, corrctAnsw];
  return QA;
};

export { gameRule, calc };
