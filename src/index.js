import readlineSync from 'readline-sync';

const roundCount = 3;

const engine = (gameRigth, roundGenerate) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRigth);
  let check;
  let userAnswer;
  let rightAnswer;

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = roundGenerate();
    userAnswer = readlineSync.question(question);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== answer) {
      check = false;
      rightAnswer = answer;
      break;
    } else if (userAnswer === answer) {
      check = true;
      console.log('Correct!');
    }
  }

  if (roundCount === 3 && check) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${String(rightAnswer)}'`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default engine;
