import readlineSync from 'readline-sync';
import usrName from '../cli.js';
import getRandInt from '../getRandInt.js';
import getCorrctAnsw from '../getCorrctAnsw.js';

const calc = () => {
  const roundСount = 3;
  const arrOperts = ['+', '-', '*', '/', '%'];
  console.log('What is the result of the expression?');
  for (let i = 0; i < roundСount; i += 1) {
    const randInt1 = getRandInt(1, 30);
    const randInt2 = getRandInt(1, 10);
    const maxInt = Math.max(randInt1, randInt2);
    const minInt = Math.min(randInt1, randInt2);
    const randOpert = arrOperts[Math.floor(Math.random() * arrOperts.length)];
    console.log(`Question: ${maxInt} ${randOpert} ${minInt}`);
    const usrAnsw = (readlineSync.question('Your answer: '));
    const corrctAnsw = String(getCorrctAnsw(randOpert, maxInt, minInt));
    if (usrAnsw === corrctAnsw) {
      console.log('Correct!');
    } else {
      console.log(`'${usrAnsw}' is wrong answer ;(. Correct answer was '${corrctAnsw}'.\nLet's try again, ${usrName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${usrName}!`);
};

export default calc;
