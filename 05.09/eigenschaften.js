function hatEigenschaft(obj, eigenschaft) {
    // Prüft, ob die Eigenschaft im Objekt vorhanden ist
    return Object.prototype.hasOwnProperty.call(obj, eigenschaft);
  }
  
  let obj = {
    name: "Arberat Dushi",
    age: 33,
  };
  
  // Prüft, ob das Objekt die Eigenschaft "name" hat
  console.log(hatEigenschaft(obj, "name")); // true
  
  // Prüft, ob das Objekt die Eigenschaft "address" hat
  // andere Methode mit der "in Operator"
  let result = "adresse" in obj;
  console.log(result); // false
  