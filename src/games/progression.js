/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import {
  welcome, askName, sayHello, compareResults, congratulations,
} from '../index.js';

welcome();
const userName = askName();
sayHello(userName);
console.log('What number is missing in the progression?');

let trueAnswerCounter = 0;
let checkValue = '';
let userAnswer = '';
let randomElemFromArray;
let arrProgression = [];

do {
  const stepProgressionValue = Math.floor(Math.random() * (10 - 5) + 1);
  const randomStart = Math.floor(Math.random() * (106 - 5));
  let longProgressionCounter = 0;

  for (let i = randomStart; longProgressionCounter <= 10; i += stepProgressionValue) {
    longProgressionCounter += 1;
    arrProgression.push(i);
  }
  randomElemFromArray = Math.floor(Math.random() * arrProgression.length);
  checkValue = arrProgression[randomElemFromArray];
  arrProgression[randomElemFromArray] = '..';
  userAnswer = readlineSync.question(`Question: ${arrProgression.join(' ')} `);

  compareResults(userAnswer, checkValue);
  trueAnswerCounter += 1;
  arrProgression = [];
} while (trueAnswerCounter !== 3 && userAnswer === String(checkValue));

congratulations(trueAnswerCounter, userName, userAnswer, checkValue);

const makeStart = () => {
};

export {
  welcome, askName, sayHello, compareResults, congratulations, makeStart,
};
