import { roundСount, engine } from './engine.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRoundsData = (gameDescription, game) => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return engine(gameDescription, rounds);
};

export { getRandomInt, generateRoundsData };
