#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let trueAnswerCounter = 0;
let checkValue = '';
let userAnswer = '';
let checkingCorrectnessAnswer;

do {
  const randomNumber = Math.floor(100 * Math.random());
  randomNumber % 2 === 0 ? checkValue = 'yes' : checkValue = 'no';
  userAnswer = readlineSync.question(`Question: ${randomNumber} `);
  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer === checkValue) {
    checkingCorrectnessAnswer = true;
    trueAnswerCounter += 1;
    console.log('Correct!');
  } else if (userAnswer !== checkValue) {
    checkingCorrectnessAnswer = false;
  }
} while (trueAnswerCounter !== 3 && checkingCorrectnessAnswer !== false);

if (trueAnswerCounter === 3) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkValue}'`);
  console.log(`Let's try again, ${userName}!`);
}
