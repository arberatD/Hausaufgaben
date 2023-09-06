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
  // Spieler nach der Schwierigkeitsstufe fragen
  rl.question('Bitte wählen Sie eine Schwierigkeitsstufe (1 = leicht, 2 = mittel, 3 = schwer): ', function(difficulty) {
    let maxNumber;  // Maximale Zahl, die generiert werden kann
    let maxAttempts = 10;  // Maximale Anzahl der Versuche

    // Schwierigkeitsstufe festlegen
    switch (difficulty) {
      case '1':
        maxNumber = 50;
        break;
      case '2':
        maxNumber = 100;
        break;
      case '3':
        maxNumber = 1000;
        break;
      default:
        console.log('Ungültige Auswahl. Standard auf mittlere Schwierigkeit gesetzt.');
        maxNumber = 100;
    }

    // erstellen einer zufälligen Zahl, die der Spieler erraten muss
    const randomNum = getRandomInt(1, maxNumber);
      // Initialisierung der Anzahl der Versuche
    let attempts = 0;

    console.log(`Errate die Zahl zwischen 1 und ${maxNumber}. Du hast ${maxAttempts} Versuche.`);

    // Rekursive Funktion für die Spiellogik
    const guessLoop = function() {
      rl.question('Bitte geben Sie eine Zahl ein: ', function(input) {
        const userGuess = parseInt(input, 10);  // Eingabe in eine Zahl umwandeln
        attempts++;  // Anzahl der Versuche erhöhen

        // Überprüfung der Eingabe
        if (userGuess > randomNum) {
          console.log('Die Zahl ist zu hoch.');
        } else if (userGuess < randomNum) {
          console.log('Die Zahl ist zu niedrig.');
        } else if (userGuess === randomNum) {
          console.log(`Geil! Du hast die Zahl ${randomNum} erraten. So oft hast du es probiert: ${attempts}`);
          return restartGame();  // Spiel neu starten oder beenden
        } else {
          console.log('Das ist keine gültige Eingabe.');
        }

        // Überprüfen, ob die maximale Anzahl der Versuche erreicht ist
        if (attempts >= maxAttempts) {
          console.log(`Sie haben alle Versuche aufgebraucht. Die gesuchte Zahl war ${randomNum}.`);
          return restartGame();  // Spiel neu starten oder beenden
        } else {
          guessLoop();  // Weiter raten
        }
      });
    };

    // Funktion, die den Spieler fragt, ob er das Spiel neu starten möchte
    const restartGame = function() {
      rl.question('Möchten Sie noch einmal spielen? (ja/nein): ', function(input) {
        if (input.toLowerCase() === 'ja' || 'j' || 'yes' || 'yeah' || 'y') {
          playGame();  // Spiel neu starten
        } else {
          rl.close();  // Spiel beenden und Interface schließen
        }
      });
    };

    // Start der Raterunde
    guessLoop();
  });
}

// Spiel starten
playGame();
