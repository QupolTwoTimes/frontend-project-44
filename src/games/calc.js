/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import {
  welcome, askName, sayHello, compareResults, congratulations,
} from '../index.js';

welcome();
const userName = askName();
sayHello(userName);
console.log('What is the result of the expression?');

let trueAnswerCounter = 0;
let checkValue;
let userAnswer;
const arrMathOperations = ['+', '-', '*'];

do {
  const numberFirst = Math.floor(10 * Math.random());
  const numberSecond = Math.floor(10 * Math.random());
  const mathOperations = arrMathOperations[Math.floor(Math.random() * arrMathOperations.length)];

  if (mathOperations === '+') {
    checkValue = numberFirst + numberSecond;
  } else if (mathOperations === '-') {
    checkValue = numberFirst - numberSecond;
  } else {
    checkValue = numberFirst * numberSecond;
  }
  userAnswer = readlineSync.question(`Question: ${numberFirst} ${mathOperations} ${numberSecond} `);
  console.log(`Your answer:  ${userAnswer}`);

  compareResults(userAnswer, checkValue);
  trueAnswerCounter += 1;
} while (trueAnswerCounter !== 3 && userAnswer === String(checkValue));

congratulations(trueAnswerCounter, userName, userAnswer, checkValue);

const makeStart = () => {
};

export {
  welcome, askName, sayHello, compareResults, congratulations, makeStart,
};
