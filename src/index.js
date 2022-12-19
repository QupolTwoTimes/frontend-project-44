import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(question);
    const userAnswer = readlineSync.question();
    console.log(`Your answer: ${question}`);

    if (userAnswer === answer) {
      console.log('Correct!');
    } else if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${String(answer)}'
    Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
