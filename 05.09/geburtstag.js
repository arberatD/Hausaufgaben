// leeres Objekt wird erstellt
let person = {};

// Eigenschaft name und alter wird ergänzt

person.name = "Friedrich";
person.alter = 25;

// änderung von name und alter
person.name = "Max Mustermann";
person.alter = 30;

// Methode geburtstagsFeiern wird erstellt

person.geburtstagsFeiern = function() {
    this.alter = this.alter += 1;
}
 // Ausgabe Objekt vor der Methode
 console.log("Vor dem Altern:", person);

 // Methode um Alter zu erhöhen
 person.geburtstagsFeiern();

 // Ausgabe Objekt nach der Methode
 console.log("Nach dem Altern:", person);


