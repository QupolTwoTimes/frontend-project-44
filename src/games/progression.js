/* eslint-disable no-unused-expressions */
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (stepProgressionValue, randomStart, generateProgression) => {
  const arrProgression = [];
  for (let i = randomStart; arrProgression.length <= generateProgression;
    i += stepProgressionValue) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const generateRound = () => {
  const stepProgressionValue = generateRandomInRange(1, 10);
  const randomStart = generateRandomInRange(1, 100);
  const generateProgression = generateRandomInRange(5, 10);
  const array = getProgression(stepProgressionValue, randomStart, generateProgression);
  const randomElemFromArray = generateRandomInRange(0, array.length - 1);

  const answer = String(array[randomElemFromArray]);
  array[randomElemFromArray] = '..';
  const question = `Question: ${array.join(' ')} `;
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
