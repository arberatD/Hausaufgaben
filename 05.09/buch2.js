// objekt namens buch
let buch = {
    titel: "Die Verwandlung",
    autor: "Franz Kafka",
    jahr: 1915,

// Hinzufügen der Eigenschaft Informationen mit function zum Ausgeben einer Zeichenkette
    Informationen: function() { 
        return `${buch.titel} von ${buch.autor}, veröffentlicht im Jahr ${buch.jahr}.`
}
}
// Ausgabe des Objekts mit allen Werten
console.log(buch)
// Ausgabe von Informationen
console.log(buch.Informationen())