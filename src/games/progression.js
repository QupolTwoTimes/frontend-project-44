/* eslint-disable no-unused-expressions */
import engine from '../index.js';

const gameRigth = 'What number is missing in the progression?';

let randomElemFromArray;
let arrProgression = [];
let question;

const gameLogic = () => {
  let answer = '';
  const stepProgressionValue = Math.floor(Math.random() * (10 - 5) + 1);
  const randomStart = Math.floor(Math.random() * (106 - 5));
  let longProgressionCounter = 0;

  for (let i = randomStart; longProgressionCounter <= 10; i += stepProgressionValue) {
    longProgressionCounter += 1;
    arrProgression.push(i);
  }
  randomElemFromArray = Math.floor(Math.random() * arrProgression.length);
  answer = String(arrProgression[randomElemFromArray]);
  arrProgression[randomElemFromArray] = '..';
  question = `Question: ${arrProgression.join(' ')} `;
  arrProgression = [];
  return [question, answer];
};

engine(gameRigth, gameLogic);
const makeStart = () => {
};

export { engine, makeStart };
