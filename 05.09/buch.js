// objekt namens buch
let buch = {
    titel: "Die Verwandlung",
    autor: "Franz Kafka",
    jahr: 1915
}
// Ausgabe des Objekts mit allen Werten
console.log(buch)
// Änderung des Werts "jahr" auf 1912
buch.jahr = 1912
// Ausgabe der Änderung mit einer Formatierung
console.log(`Ich habe das Erscheinungsjahr auf ${buch.jahr} geändert.`)