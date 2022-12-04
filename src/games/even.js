/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  let answer = '';
  const randomNumber = generateRandomInRange(0, 100);
  randomNumber % 2 === 0 ? answer = 'yes' : answer = 'no';
  return [readlineSync.question(`Question: ${randomNumber} `), answer];
};
export default () => {
  engine(gameRules, generateRound);
};
