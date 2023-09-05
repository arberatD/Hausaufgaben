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

// erstelle Funktion zum löschen des Autor
function löscheAutor(buch) {
    // lösche die eigenschaft autor aus dem Objekt buch   
    delete buch.autor
    // ich möchte, dass das in der Console ausgebgeben wird
    return `Ich habe den Autor gelöscht.`
    console.log(löscheAutor); 
}
console.log(löscheAutor(buch))