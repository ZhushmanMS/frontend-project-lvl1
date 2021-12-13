import readlineSync from 'readline-sync';
import userName from './cli.js';
import getRandomInt from './getRandomInt.js';

const parityCheck = () => {
  const rounds = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomInt = getRandomInt(1, 100);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((randomInt % 2 === 0 && userAnswer === 'yes') || (randomInt % 2 === 1 && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default parityCheck;
