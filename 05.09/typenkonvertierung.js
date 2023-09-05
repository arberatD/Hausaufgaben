/*Gegeben ist eine Zahl preis. Konvertiere sie in eine Zeichenkette und 
füge das Währungssymbol "$" am Anfang hinzu. 
Speichere das Ergebnis in der Variable preisText.
*/
// erstellen der Strings preis und PreisText (erstmal leer)
let preis = 999
PreisText = ""
//übergabe von preis an preisText incl Umwandlung in String
preisText = preis.toString()
// concatenation von $ und dem String preisText
preisText = "$" + preisText
// ausgabe des manipulierten Strings
console.log(`Das teuerste Bier deines Lebens wird ${preisText} kosten`)
// ausgabe von typeof zum kontrollieren des Typs
console.log(typeof preisText)
console.log(typeof preis)
