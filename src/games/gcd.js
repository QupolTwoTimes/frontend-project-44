/* eslint-disable no-unused-expressions */
import engine from '../index.js';

const gameRigth = 'Find the greatest common divisor of given numbers.';
let question;
let bigNumber;
let smallNumber;
const gameLogic = () => {
  const numberFirst = Math.floor(50 * Math.random() + 1);
  const numberSecond = Math.floor(50 * Math.random() + 1);
  let answer = '';
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
      answer = String(bigNumber);
    } else if (bigNumber % i === 0 && smallNumber % i === 0) {
      answer = String(i);
    }
  }
  question = `Question: ${numberFirst} ${numberSecond} `;
  return [question, answer];
};

engine(gameRigth, gameLogic);
const makeStart = () => {
};

export { engine, makeStart };
