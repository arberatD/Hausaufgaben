import http from 'http';

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

//Aufgabe 3
app.get('/greet', (req, res) => {
    res.send('<h1>Willkommen in Kosovo!</h1>');
});

app.get('/oldhtml', (req, res) => {
    res.sendFile('index.html', { root: './' });
});

app.get('/cat/:says', (req, res) => {
    const text = req.params.says;

    http.get(`http://cataas.com/cat/says/${text}`, (response) => {
        // Bild wird erstellt
        response.pipe(res);
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}/`);
});
