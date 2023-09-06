const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  const randomNum = getRandomInt(1, 100);
  let attempts = 0;

  const guessLoop = function() {
    rl.question('Bitte geben Sie eine Zahl zwischen 1 und 100 ein: ', function(input) {
      const userGuess = parseInt(input, 10);

      attempts++;

      if (userGuess > randomNum) {
        console.log('Die Zahl ist zu hoch.');
        guessLoop();
      } else if (userGuess < randomNum) {
        console.log('Die Zahl ist zu niedrig.');
        guessLoop();
      } else if (userGuess === randomNum) {
        console.log(`Gratulation! Sie haben die Zahl ${randomNum} erraten. Anzahl der Versuche: ${attempts}`);
        rl.question('Möchten Sie noch einmal spielen? (ja/nein): ', function(input) {
          if (input.toLowerCase() === 'ja') {
            playGame();
          } else {
            rl.close();
          }
        });
      } else {
        console.log('Das ist keine gültige Eingabe. Bitte versuchen Sie es erneut.');
        guessLoop();
      }
    });
  };

  guessLoop();
}

playGame();
