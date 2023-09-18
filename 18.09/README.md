Aufgabe 1
installiere das Modul ‘ figlet ‘ mit dem Befehl >npm install figlet<
Schreibe ein Programm, welches das Modul `figlet` importiert. Schaue nach, wie man `figlet` synchron benutzen kann (nicht asynchron!) und gib eine Nachricht in der Schriftart “Dancing Font” aus

Füge bitte als Nachweis einen Screenshot und deinen Code hinzu

Aufgabe 2

(Achtung: In visual studio code wird die Farbe nur im Terminal angezeigt. Unter dem Tab "output" ändert sich die Farbe NICHT, obwohl der Code richtig sein kann.)

 Erstelle ein neues Projekt mit npm init
→ 1.a Schaue dir package.json an und füge dieses startscript hinzu:


"scripts": {
"start": "node ."
},
Erstelle zwei files, alter.js und index.js
→ Alter.js: schreibe eine Funktion die die Summe aus zwei zahlen als Argumente nimmt und in der Konsole ausgibt. + Konsol logge deinen Namen

→ index.js: importiere mit "require" alter.js und rufe die Funktion in index.js 3x auf.

Installiere Chalk in der version 4.0.0 mit dem Befehl <npm install chalk@4.0.0>
→ 3a . Schaue dir package.json an

füge Chalk in der Konsolen-Ausgabe hinzu, um den Output der Funktion bunt zu machen.


Lade einen Screenshot hoch mit dem Terminal output, mit deinem Namen und dem output der Funktion in bunt.
