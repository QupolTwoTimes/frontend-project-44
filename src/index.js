import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};
const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

const compareResults = (userAnswer, checkValue) => {
  if (userAnswer === String(checkValue)) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const congratulations = (trueAnswerCounter, userName, userAnswer, checkValue) => {
  if (trueAnswerCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${String(checkValue)}'`);
    console.log(`Let's try again, ${userName}!`);
  }
};
export {
  welcome, askName, sayHello, compareResults, congratulations,
};
