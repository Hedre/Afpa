function test06_2() {
    var tab = ["a", "e", "i", "o", "u", "y"];
    console.log(tab);
    var tab2 = new Array(8);
    console.log(tab2);

}

/*
EXO 6.4 :
Affiche : [0, 1, 4, 9, 16, 25]
L'algorithme est simplifiable.
*/

/*
EXO 6.5 :
Affiche : [1, 3, 5, 7, 9, 11]
Il n'est pas simplifiable.
*/

/*
EXO 6.6 :
Affiche : [1, 1, 2, 3, 5, 8, 13, 21]
*/

function test06_8(){
    var nb = parseInt(prompt("Entrez le nombre de valeurs"));
    var tab = [];
    var ntf = 0;
    var ptf = 0;
    for (let i = 0; i < nb; i++) {
        var n = parseInt(prompt("Entrez une valeur"));
        tab[i] = n;
    }
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > 0) {
            ptf ++;
        } else if (tab[i] < 0) {
            ntf ++;
        }
    }
    console.log("Nombre de valeurs positives : " + ptf);
    console.log("Nombre de valeurs négatives : " + ntf);
}

function test06_10(){
    var tab_1 = [1, 2, 1, 2];
    var tab_2 = [3, 1, 3, 1];
    var tab = [];
    for (let i = 0; i < 4; i++) {
        tab[i] = tab_1[i] + tab_2[i];
    }
    console.log(tab);
}

function test06_11(){
    var tab_1 = [3, 1, 3, 1];
    var tab_2 = [2, 4];
    var scht = 0;
    for (let i = 0; i < tab_1.length; i++) {
        for (let j = 0; j < tab_2.length; j++) {
            scht += tab_1[i] * tab_2[j];
        }
    }
    console.log(scht);
}

function test06_12(){
    var nb = parseInt(prompt("Entrez le nombre de valeurs"));
    var tab = [];
    for (let i = 0; i < nb; i++) {
        var n = parseInt(prompt("Entrez une valeur"));
        tab[i] = n++;
    }
    console.log(tab);
}