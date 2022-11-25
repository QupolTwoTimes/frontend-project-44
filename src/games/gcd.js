/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import {
  welcome, askName, sayHello, compareResults, congratulations,
} from '../index.js';

welcome();
const userName = askName();
sayHello(userName);
console.log('Find the greatest common divisor of given numbers.');

let trueAnswerCounter = 0;
let checkValue = '';
let userAnswer = '';
let bigNumber;
let smallNumber;

do {
  const numberFirst = Math.floor(50 * Math.random() + 1);
  const numberSecond = Math.floor(50 * Math.random() + 1);

  if (numberFirst > numberSecond) {
    bigNumber = numberFirst;
    smallNumber = numberSecond;
  } else if (numberSecond > numberFirst) {
    bigNumber = numberSecond;
    smallNumber = numberFirst;
  } else {
    bigNumber = numberFirst;
    smallNumber = numberSecond;
  }
  for (let i = 1; i <= smallNumber; i += 1) {
    if (bigNumber === smallNumber) {
      checkValue = bigNumber;
    } else if (bigNumber % i === 0 && smallNumber % i === 0) {
      checkValue = i;
    }
  }
  userAnswer = readlineSync.question(`Question: ${numberFirst} ${numberSecond} `);
  console.log(`Your answer:  ${userAnswer}`);

  if (compareResults(userAnswer, checkValue)) {
    trueAnswerCounter += 1;
  }
} while (trueAnswerCounter !== 3 && userAnswer === String(checkValue));

congratulations(trueAnswerCounter, userName, userAnswer, checkValue);

const makeStart = () => {
};

export {
  welcome, askName, sayHello, compareResults, congratulations, makeStart,
};
