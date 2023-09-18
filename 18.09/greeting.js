// Importieren des figlet-Moduls für Schriftart
import figlet from 'figlet';

// Verwenden der synchronen Methode figlet.textSync() zur Textumwandlung
const transformedText = figlet.textSync('Das sieht nice aus!', { font: 'Dancing Font' });

// Ausgabe des transformierten Textes
console.log(transformedText);
