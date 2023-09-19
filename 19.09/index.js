// Express importieren
import express from 'express';

// Express-App erstellen
const app = express();

// Port festlegen - dadurch das er in der Variablen ist ist er jederzeit änderbar
const PORT = 3000;

// Eine einfache Route
app.get('/', (req, res) => {
    res.send('Läuft Junge, läuft!!!!!');
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}/`);
});
