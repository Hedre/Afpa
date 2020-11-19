function test11_1(){
    console.log(som(12, 12, 15, 15));
    console.log(somTab([12, 12, 15, 15]));
}

function test11_3(){
    console.log(purge("Moi, je m'en fous", "yome"));
}

function test11_8(){
    console.log(tri([2,5,7,3,8], 5, false));
}

function som(){
    var total = 0;
    for(let i=0;i<arguments.length;i++){
        total += arguments[i];
    }
    return total;
}

function somTab(tableau){
    var total = 0;
    for(let i=0; i<tableau.length;i++){
        total += tableau[i];
    }
    return total;
}

function purge(char, carac){
    var newStr = RegExp("["+carac+"]", 'gi');
    return char.replace(newStr, '');
}

function tri(char, nb, bool){
    char.sort();
    if(bool){
        return char;
    }else{
        return char.reverse();
    }
}

function pendu(){
    var tab = ["fourchette", "tobogan", "orteille", "tétraplégique", "oiseau", "charpentier"];
    var essais = 10;
    var mot = alea(tab);
    console.log(afficher_mot(mot));
    console.log("Il vous reste " + essais + " essai(s).");
    var tab_lettres = [];
    do {
        var flag = false;
        var lettre = prompt("Donnez une lettre");
        tab_lettres.push(lettre);
        for(let i=0; i<tab_lettres.length; i++){
            if(tab_lettres[i] == lettre){
                flag = true;
            }
        }
    } while (flag)

    /*
    faire :
        faire:
            demande une lettre
        tant que:
            vérifie si la lettre a déjà été donnée
        si la lettre n'est pas dans le mot -> -1 essai
        sinon -> affiche les sous-tirets avec la lettre en plus
    tant que :
        essais != 0 || mot non trouvé
    */
}

function alea(tab){
    return tab[Math.floor(Math.random()*(tab.length-1))]
}

function afficher_mot(mot){
    var read = "";
    for(let i=0;i<mot.length;i++){
        read += "_";
        if(i != mot.length-1){
            read += " ";
        }
    }
    return read;
}