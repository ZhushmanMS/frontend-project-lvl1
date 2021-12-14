import readlineSync from 'readline-sync';
import usrName from '../cli.js';
import getRandInt from '../getRandInt.js';

const evenCheck = () => {
  const roundСount = 3;
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  for (let i = 0; i < roundСount; i += 1) {
    const randInt = getRandInt(1, 100);
    console.log(`Question: ${randInt}`);
    const corrctAnsw = (randInt % 2 === 0) ? 'yes' : 'no';
    const usrAnsw = readlineSync.question('Your answer: ');
    if (usrAnsw === corrctAnsw) {
      console.log('Correct!');
    } else {
      console.log(`'${usrAnsw}' is wrong answer ;(. Correct answer was '${corrctAnsw}'.\nLet's try again, ${usrName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${usrName}!`);
};

export default evenCheck;
