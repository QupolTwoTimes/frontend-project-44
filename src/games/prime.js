/* eslint-disable no-unused-expressions */
import engine from '../index.js';

const gameRigth = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let question;

const gameLogic = () => {
  let answer = 'yes';
  const randomNumber = Math.floor(Math.random() * (206 - 5) + 1);
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 5
        || randomNumber === 7) {
      answer = 'yes';
      break;
    } else if (randomNumber % i === 0) {
      answer = 'no';
      break;
    } else {
      answer = 'yes';
    }
  }
  question = `Question: ${randomNumber} `;
  return [question, answer];
};
engine(gameRigth, gameLogic);
const makeStart = () => {
};

export { engine, makeStart };
