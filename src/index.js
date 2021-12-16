import readlineSync from 'readline-sync';

const run = (gameRule, QA) => {
  const roundСount = 3;
  console.log('Welcome to the Brain Games!');
  const usrName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${usrName}!`);
  console.log(gameRule);
  for (let i = 0; i < roundСount; i += 1) {
    const [quest, corrctAnsw] = QA();
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
