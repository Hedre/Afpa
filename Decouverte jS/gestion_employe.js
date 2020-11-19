try { // attention, danger…
    var emp = new Employe("Test", "Formateur");
}
catch(e) { // e est une instance d’Exception
    alert(e.message);
}

console.log(emp.nom);
emp.nom = "Modif";
console.log(emp.getNom());