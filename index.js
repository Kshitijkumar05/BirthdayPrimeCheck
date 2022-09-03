const readlineSync = require('readline-sync');
const chalk = require('chalk');
const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(chalk.cyanBright("*******Welcome***********\n\n"));

const user = readlineSync.question(chalk.greenBright('Hey! May I know your name?\n'));

console.log(chalk.cyanBright(`\nHi ${user}, I will tell you if your birthdate is prime number or not\n`));

takeDate();

function takeDate() {
  const inputDate = readlineSync.question(chalk.blue("Please enter your birthdate in 'DD/MM' format\n"));

  //checking if date is valid
  const dateArray = inputDate.split('/');
  const DD = dateArray[0];
  const MM = dateArray[1];

  if (isNaN(MM) || isNaN(DD) || (!Number.isInteger(Number(DD)) || (!Number.isInteger(Number(MM))))) {
    console.log(chalk.redBright("\nYou have enterd invalid date"));
    takeDate();
  }
  else if (MM <= 0 || DD <= 0 || MM > 12 || DD > 31) {
    console.log(chalk.redBright("\nYou hav eneterd invalid date"));
    takeDate();
  }
  else if (DD > monthDays[MM - 1]) {
    console.log(chalk.redBright("\nYou have eneterd invalid date"));
    takeDate();
  }
  else {
    isPrime(DD);
  }

}

function isPrime(testNo) {
  testNo = Number(testNo);

  let testFlag = false;

  if (testNo === 1) {
    console.log(chalk.cyanBright("\nYour birth date is neither Prime number nor a composite number"));
  }
  else if (testNo === 2) {
    testFlag = false;
  }

  else {
    for (let i = 2; i < testNo; i++) {
      if (testNo % i === 0) {
        testFlag = true;
        break;
      }
    }
  }
  if (testFlag) {
    console.log(chalk.cyanBright("\nCool! your birth date is not a prime number"));
  }
  else {
    console.log(chalk.cyanBright("\nAha! Your birth date is a prime number"));
  }
}

