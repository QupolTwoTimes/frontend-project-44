/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const calculate = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 5
        || randomNumber === 7) {
      return 'yes';
    } if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const randomNumber = generateRandomInRange(1, 200);
  return [readlineSync.question(`Question: ${randomNumber} `), calculate(randomNumber)];
};
export default () => {
  engine(gameRules, generateRound);
};
