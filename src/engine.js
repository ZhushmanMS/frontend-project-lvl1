import readlineSync from 'readline-sync';
import userName from './cli.js';

const roundСount = 3;

const engine = (gameDescription, rounds) => {
  console.log(gameDescription);
  for (let i = 0; i < roundСount; i += 1) {
    const [quest, correctAnswer] = rounds[i];
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { roundСount, engine };
