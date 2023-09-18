const chalk = require('chalk');

function summe(zahl1, zahl2) {
  const ergebnis = zahl1 + zahl2;
  console.log(chalk.blue(`Die Summe von ${zahl1} und ${zahl2} ist:`), chalk.green(ergebnis));
}

console.log(chalk.bgYellow.red("Ich heiße Abi"));

module.exports = summe;
