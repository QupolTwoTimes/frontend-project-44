import readlineSync from "readline-sync";

const userName = readlineSync.question("May I have your name? ");
const hello = "Hello, " + userName + "!";

export { userName, hello };
