/* eslint-disable import/no-unresolved */
import engine from '../index.js';

const gameRigth = 'What is the result of the expression?';
let question;

const gameLogic = () => {
  const arrMathOperations = ['+', '-', '*'];
  const numberFirst = Math.floor(10 * Math.random());
  const numberSecond = Math.floor(10 * Math.random());
  const mathOperations = arrMathOperations[Math.floor(Math.random() * arrMathOperations.length)];
  let answer;
  if (mathOperations === '+') {
    answer = String(numberFirst + numberSecond);
  } else if (mathOperations === '-') {
    answer = String(numberFirst - numberSecond);
  } else {
    answer = String(numberFirst * numberSecond);
  }
  question = `Question: ${numberFirst} ${mathOperations} ${numberSecond} `;
  return [question, answer];
};
engine(gameRigth, gameLogic);
const makeStart = () => {
};

export { engine, makeStart };
