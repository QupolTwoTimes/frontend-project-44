import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default askName;
