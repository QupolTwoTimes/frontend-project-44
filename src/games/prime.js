/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import {
  welcome, askName, sayHello, compareResults, congratulations,
} from '../index.js';

welcome();
const userName = askName();
sayHello(userName);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let trueAnswerCounter = 0;
let checkValue = '';
let userAnswer = '';

do {
  const randomNumber = Math.floor(Math.random() * (206 - 5) + 1);
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 5
        || randomNumber === 7) {
      checkValue = 'yes';
      break;
    } else if (randomNumber % i === 0) {
      checkValue = 'no';
      break;
    } else {
      checkValue = 'yes';
    }
  }
  userAnswer = readlineSync.question(`Question: ${randomNumber} `);
  if (compareResults(userAnswer, checkValue)) {
    trueAnswerCounter += 1;
  }
} while (trueAnswerCounter !== 3 && userAnswer === checkValue);

congratulations(trueAnswerCounter, userName, userAnswer, checkValue);

const makeStart = () => {
};

export {
  welcome, askName, sayHello, compareResults, congratulations, makeStart,
};
