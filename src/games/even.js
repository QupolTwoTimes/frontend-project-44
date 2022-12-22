/* eslint-disable no-unused-expressions */
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomInRange(0, 100);
  const question = `Question: ${randomNumber} `;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
