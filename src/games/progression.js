/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'What number is missing in the progression?';
let randomElemFromArray;
let arrProgression = [];
let answer = '';

const calculate = (stepProgressionValue, randomStart) => {
  arrProgression = [];
  let longProgressionCounter = 0;
  for (let i = randomStart; longProgressionCounter <= 10; i += stepProgressionValue) {
    longProgressionCounter += 1;
    arrProgression.push(i);
  }
  randomElemFromArray = generateRandomInRange(0, arrProgression.length);
  answer = String(arrProgression[randomElemFromArray]);
  arrProgression[randomElemFromArray] = '..';
  return answer;
};

const generateRound = () => {
  const stepProgressionValue = generateRandomInRange(1, 10);
  const randomStart = generateRandomInRange(1, 100);
  answer = calculate(stepProgressionValue, randomStart);
  return [readlineSync.question(`Question: ${arrProgression.join(' ')} `), answer];
};

export default () => {
  engine(gameRules, generateRound);
};
