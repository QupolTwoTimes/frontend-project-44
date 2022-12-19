/* eslint-disable import/no-unresolved */
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberFirst, numberSecond) => {
  if (numberFirst === 0) {
    return numberSecond;
  }
  return getGcd(numberSecond % numberFirst, numberFirst);
};

const generateRound = () => {
  const numberFirst = generateRandomInRange(1, 50);
  const numberSecond = generateRandomInRange(1, 50);
  const question = `Question: ${numberFirst} ${numberSecond} `;
  const answer = String(getGcd(numberFirst, numberSecond));
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
