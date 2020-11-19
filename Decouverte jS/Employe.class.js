function Employe(unnom, unebranche, unsalaire) {
    if (!unnom) { throw new Error('Entrez un nom'); }
    else if (unnom.length < 2) { throw new Error('Entrer un nom'); }
    this.nom = unnom;

    if (!unebranche) { throw new Error('Entrez une branche'); }
    else if (unebranche.length < 2) { throw new Error('Entrer une branche'); }
    this.branche = unebranche;

    if (!unsalaire) { unsalaire = 0; }
    var salaire = unsalaire;

    this.salaireAnnuel = function () { return salaire * 12; }

    this.setSalaire = function (nouveauSalaire) {
        if (salaire < nouveauSalaire) {
            salaire = nouveauSalaire;
        } else {
            throw new Error("Erreur : le salaire ne peut diminuer");
        }
    }
    this.getSalaire = function () { return salaire; }

    this.getNom = function () { return this.nom; }
}
