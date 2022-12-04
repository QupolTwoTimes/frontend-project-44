import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Your answer: ${question}`);

    if (question === answer) {
      console.log('Correct!');
    } else if (question !== answer) {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${String(answer)}'
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default engine;
