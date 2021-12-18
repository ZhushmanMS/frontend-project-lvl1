import readlineSync from 'readline-sync';
import usrName from './cli.js';

const run = (gameRule, QA) => {
  const roundСount = 3;
  console.log(gameRule);
  for (let i = 0; i < roundСount; i += 1) {
    const [quest, corrctAnsw] = QA();
    console.log(corrctAnsw);
    console.log(`Question: ${quest}`);
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

export default run;
