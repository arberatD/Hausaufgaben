// Importieren des readline-Moduls für die Eingabe/Ausgabe in der Konsole
const readline = require('readline');

// Erstellen eines readline-Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion, die eine zufällige ganze Zahl zwischen min und max zurückgibt
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hauptfunktion des Spiels
function playGame() {
  // erstellen einer zufälligen Zahl, die der Spieler erraten muss
  const randomNum = getRandomInt(1, 100);
  // Initialisierung der Anzahl der Versuche
  let attempts = 0;

  const guessLoop = function() {
    // Fragt den Spieler nach einer Zahl
    rl.question('Gebe eine Zahl zwischen 1 und 100 ein: ', function(input) {
      // Umwandlung der Eingabe in eine Zahl
      const userGuess = parseInt(input, 10);

      // Anzahl der Versuche
      attempts++;

      // Überprüfen, ob die geratene Zahl zu hoch, zu niedrig oder richtig ist
      if (userGuess > randomNum) {
        console.log('Die Zahl ist zu hoch.');
        guessLoop();
      } else if (userGuess < randomNum) {
        console.log('Die Zahl ist zu niedrig.');
        guessLoop();
      } else if (userGuess === randomNum) {
        console.log(`Geil! Du hast die Zahl ${randomNum} erraten. So oft hast du es probiert: ${attempts}`);
        // Frage den Spieler, ob er ein neues Spiel starten möchte
        rl.question('Willst du es nochmal probieren? (y/n): ', function(input) {
          if (input.toLowerCase() === 'ja') {
            playGame();
          } else {
            // Beenden des Spiels und Schließen des readline-Interfaces
            rl.close();
          }
        });
      } else {
        console.log('Das geht leider nicht. Versuchs nochmal.');
        guessLoop();
      }
    });
  };

  // Starten der Schleife
  guessLoop();
}

// Starten des Spiels
playGame();
