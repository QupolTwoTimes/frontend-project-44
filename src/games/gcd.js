/* eslint-disable import/no-unresolved */
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const num1 = generateRandomInRange(1, 50);
  const num2 = generateRandomInRange(1, 50);
  const question = `Question: ${num1} ${num2} `;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
