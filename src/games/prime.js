/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 5
        || randomNumber === 7) {
      return true;
    } if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomInRange(1, 200);
  const question = readlineSync.question(`Question: ${randomNumber} `);
  const answer = calculate(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  engine(gameRules, generateRound);
};
