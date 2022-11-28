/* eslint-disable no-unused-expressions */
import engine from '../index.js';

const gameRigth = 'Answer "yes" if the number is even, otherwise answer "no".';
let question;
const gameLogic = () => {
  let answer = '';
  const randomNumber = Math.floor(100 * Math.random());
  randomNumber % 2 === 0 ? answer = 'yes' : answer = 'no';
  question = `Question: ${randomNumber} `;
  return [question, answer];
};
engine(gameRigth, gameLogic);
const makeStart = () => {
};

export { engine, makeStart };
