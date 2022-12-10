/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'What number is missing in the progression?';
let randomElemFromArray;
let arrProgression = [];
let answer = '';

const calculate = (stepProgressionValue, randomStart, generateProgression) => {
  arrProgression = [];
  for (let i = randomStart; arrProgression.length <= generateProgression;
    i += stepProgressionValue) {
    arrProgression.push(i);
  }
  randomElemFromArray = generateRandomInRange(0, arrProgression.length - 1);
  answer = String(arrProgression[randomElemFromArray]);
  arrProgression[randomElemFromArray] = '..';
  return answer;
};

const generateRound = () => {
  const stepProgressionValue = generateRandomInRange(1, 10);
  const randomStart = generateRandomInRange(1, 100);
  const generateProgression = generateRandomInRange(5, 10);
  answer = calculate(stepProgressionValue, randomStart, generateProgression);
  const question = readlineSync.question(`Question: ${arrProgression.join(' ')} `);
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
