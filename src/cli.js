import readlineSync from "readline-sync";

var userName = readlineSync.question("May I have your name? ");
var hello = "Hello, " + userName + "!";

export { userName, hello };
