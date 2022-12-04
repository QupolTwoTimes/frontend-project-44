/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import engine from '../index.js';
import generateRandomInRange from '../utils.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[generateRandomInRange(0, operators.length)];
};

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const generateRound = () => {
  const num1 = generateRandomInRange(0, 10);
  const num2 = generateRandomInRange(0, 10);
  const operator = getRandomOperator();
  return [readlineSync.question(`Question: ${num1} ${operator} ${num2} `),
    String(calculate(num1, num2, operator))];
};

export default () => {
  engine(gameRules, generateRound);
};
