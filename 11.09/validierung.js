document.getElementById("meinFormular").addEventListener("submit", function(event) {
  event.preventDefault();   

  let vorname = document.getElementById("vorname").value;
  let nachname = document.getElementById("nachname").value;
  let email = document.getElementById("email").value;
  let geburtstag = document.getElementById("geburtstag").value;

  let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let geburtstagRegEx = /^\d{4}-\d{2}-\d{2}$/;

  if (!vorname || !nachname || !email || !geburtstag) {
      document.getElementById("error").innerHTML = "Bitte füllen Sie alle Felder aus!";
      return;
  }

  if (!emailRegEx.test(email)) {
      document.getElementById("meldung").innerHTML = "Bitte geben Sie eine gültige E-Mail Adresse ein!";
      return; // Hier habe ich 'return' hinzugefügt, um den Code nach dem Setzen der Meldung zu beenden.
  }

  if (!geburtstagRegEx.test(geburtstag)) {
      document.getElementById("meldung").innerHTML = "Bitte geben Sie ein gültiges Datum im Format YYYY-MM-DD ein!";
      return;
  }

  document.getElementById("meldung").innerHTML = `
      Hallo, hier sind Ihre Daten:<br>
      Vorname: ${vorname}<br>
      Nachname: ${nachname}<br>
      Geburtsdatum: ${geburtstag}<br>
      E-Mail: ${email}
  `;
});
