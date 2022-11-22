/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import {
  welcome, askName, sayHello, compareResults, congratulations,
} from '../index.js';

welcome();
const userName = askName();
sayHello(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let trueAnswerCounter = 0;
let checkValue = '';
let userAnswer = '';

do {
  const randomNumber = Math.floor(100 * Math.random());
  randomNumber % 2 === 0 ? checkValue = 'yes' : checkValue = 'no';
  userAnswer = readlineSync.question(`Question: ${randomNumber} `);
  console.log(`Your answer: ${userAnswer}`);
  compareResults(userAnswer, checkValue);
  trueAnswerCounter += 1;
} while (trueAnswerCounter !== 3 && userAnswer === checkValue);

congratulations(trueAnswerCounter, userName, userAnswer, checkValue);

const makeStart = () => {
};

export {
  welcome, askName, sayHello, compareResults, congratulations, makeStart,
};
