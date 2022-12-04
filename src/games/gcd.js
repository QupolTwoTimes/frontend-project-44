/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
let answer;

const calculate = (numberFirst, numberSecond) => {
  const array = [numberFirst, numberSecond];
  const bigNumber = Math.min.apply(null, array);
  const smallNumber = Math.max.apply(null, array);
  for (let i = 1; i <= smallNumber; i += 1) {
    if (bigNumber === smallNumber) {
      answer = String(bigNumber);
    } else if (bigNumber % i === 0 && smallNumber % i === 0) {
      answer = String(i);
    }
  }
  return answer;
};
const generateRound = () => {
  const numberFirst = generateRandomInRange(1, 50);
  const numberSecond = generateRandomInRange(1, 50);
  answer = calculate(numberFirst, numberSecond);
  return [readlineSync.question(`Question: ${numberFirst} ${numberSecond} `), answer];
};

export default () => {
  engine(gameRules, generateRound);
};
