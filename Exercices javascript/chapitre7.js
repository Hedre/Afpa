function test07_1(){
    var n = parseInt(prompt("Nombre de valeurs ?"));
    var tab = [];
    var p = "Les chiffres sont consécutifs";
    for(let i=0;i<n;i++){
        var v = parseInt(prompt("Valeur n°"+(i+1)));
        tab[i] = v;
    }
    tab.sort();
    console.log(tab);
    for(let i=0;i<n-1;i++){
        if(tab[i] != tab[i+1]-1){
            p = "Les chiffres ne sont pas consécutifs";
            break;
        }
    }
    console.log(p);
    return tab;
}

function test07_3(){
    var tab = test07_1();
    for(let i=0;i<(tab.length/2);i++){
        var j = tab[i];
        tab[i] = tab[tab.length-i-1];
        tab[tab.length-i-1] = j;
    }
    console.log(tab);
}

function test07_4(){
    var tab = test07_1();
    var tab_2 = [];
    var n = parseInt(prompt("Indice de la valeur à supprimer"));
    //tab.splice(n, 1);
   /*for(let i=0;i<tab.length;i++){
        if(i!=n){
            tab_2.push(tab[i]);
        }
    }*/
    delete tab[n];
    for(let i=n;i<tab.length;i++){
        tab[i] = tab[i+1];
    }
    tab.pop();
    console.log(tab);
}

function test07_5(){
    var tab = ["blanc", "bleu", "gris", "jaune", "marron", "noir", "orange", "rose", "rouge", "vert", "violet"];
    var p = "Le mot est dans le dictionnaire";
    var mot = prompt("Entrez un mot");
    var min = 0;
    var max = tab.length-1;
    var mid = 0;
    while(tab[mid]!=mot){
        mid = parseInt((max+min)/2);
        if(min>max){
            p = "Le mot n'est pas dans le dictionnaire";
            break;
        }else if(mot<tab[mid]){
            max = mid-1;
        }else if(mot>tab[mid]){
            min = mid+1;
        }
    }
    console.log(p);
}