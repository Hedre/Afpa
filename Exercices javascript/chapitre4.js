function test06(){
    console.log("exo 6");
    var c1 = prompt("Pourcentage du parti");
    var c2 = prompt("Pourcentage du 2e");
    var c3 = prompt("Pourcentage du 3e");
    var c4 = prompt("Pourcentage du 4e");
    var msg = "";

    if (c1 > 50){
        msg = "Le parti est élu au premeir tour";
    } else if (c1 >= 12.5 && c1 > c2 && c1 > c3 && c1 > c4){
        msg = "Le ballotage est favorable";
    } else if (c1 >= 12.5){
        msg = "Le ballotage est défavorable";
    } else {
        msg = "Le parti n'est pas élu";
    }

    console.log(msg);
}

function test07(){
    console.log("exo 7");
    // 1 - INITIALISATION
    var age = parseInt(prompt("Entrez 1 si âge >= 25 ans, sinon 0"));
    var permis = parseInt(prompt("Entrez 1 si permis > 2 ans, sinon 0"));
    var accident = parseInt(prompt("Entrez le nombre d'accidents"));
    var msg = "";

    //  2 - TRAITEMENT
    var points = age + permis - accident;
    if (points >= 0){
        var ancient = parseInt(prompt("Entrez 1 si anciennneté > 1 an, sinon 0"));
        points += ancient;
    }

   /* // 3 - AFFICHAGE
    if (points == 0){
        msg = "Rouge";
    } else if (points == 1){
        msg = "Orange";
    } else if (points == 2){
        msg = "Vert";
    } else if (points == 3){
        msg = "Bleu";
    } else {
        msg = "Refusé";
    } */
    switch (points){
        case 0:
            msg = "Rouge";
            break;
        case 1: 
            msg = "Orange";
            break;
        case 2:
            msg = "Vert";
            break;
        case 3: 
            msg = "Bleu";
            break;
        default:
            msg = "Refusé";
    }

    console.log(msg);
}