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
  // О каком приходе кривого оператора идет речь, если они генерируются из заданных значений?
};

const generateRound = () => {
  const num1 = generateRandomInRange(0, 10);
  const num2 = generateRandomInRange(0, 10);
  const operator = getRandomOperator();
  const question = readlineSync.question(`Question: ${num1} ${operator} ${num2} `);
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

export default () => {
  engine(gameRules, generateRound);
};
