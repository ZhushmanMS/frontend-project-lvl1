import { roundСount } from './engine.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRoundsData = (game) => {
  const rounds = [];
  for (let i = 0; i < roundСount; i += 1) {
    rounds.push(game());
  }
  return rounds;
};

export { getRandomInt, generateRoundsData };
