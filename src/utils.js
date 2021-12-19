import { roundСount, engine } from './engine.js';

const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRaundsData = (gameDescription, game) => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};

export { getRandInt, generateRaundsData };
