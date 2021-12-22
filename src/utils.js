import { roundСount } from './engine.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRoundsData = (game) => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return rounds;
};

export { getRandomInt, generateRoundsData };
