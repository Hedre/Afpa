function test08_1(){
    var tab = [];
    for(let i=0; i<13;i++){
        tab[i] = [];
        for(let j=0; j<6;j++){
            tab[i][j] = 0;
        }
    }
    console.table(tab);
}

/*
EXO 8.2 :
affiche :
1 2 3 4 5 6
*/

/*
EXO 8.3 :
affiche :
1 4 2 5 3 6
*/

/*
EXO 8.4 :
affiche :
0 1 1 2 2 3 3 4
*/

/*
EXO 8.5 :
affiche :
1 2 3 4 5 6 7 8

puis :
1 5 2 6 3 7 4 8
*/

function test08_6(){
    var max = 0;
    var k, l = 0;
    for(let i=0; i<13;i++){
        tab[i] = [];
        for(let j=0; j<9;j++){
            tab[i][j] = parseInt(Math.random()*1000);
            if(tab[i][j]>max){
                max = tab[i][j];
                k = i;
                l = j;
            }
        }
    }
    console.table(tab);
    console.log(max);
    console.log("L'index du max est ["+k+", "+l+"]");
}

function test08_7(){
    var length = 5;
    var width = 5;
    var vide = 'O';
    var tab = creaTab(length, width, vide);
    var t_pion = ["Dame", "Roi"];
    for (var key in t_pion){
        t_pion[t_pion[key]] = creaPion(length, width, t_pion[key]);
        addPion(tab, t_pion, t_pion[key]);
    }
    //var pion = creaPion(length, width);
    do {
        console.table(tab);
        var pion = askPion();
        var next = saisirDeplacement();
        if(next >= 0 && next <= 3){
            if(pion == 'D'){
                pion = calcul(next, tab, t_pion['Dame']);
                addPion(tab, t_pion, t_pion[key]);
            }else{
                pion = calcul(next, tab, t_pion['Roi']);
                addPion(tab, t_pion, t_pion[key]);
            }
        }else{
            console.log("Vous avez quitté");
            break;
        }
    } while(testEnd(length, width, pion));
}

function creaTab(length, width, vide){
    var tab = [];
    for(let i=0; i<length;i++){
        tab[i] = [];
        for(let j=0; j<width;j++){
            tab[i][j] = vide;
        }
    }
    return tab;
}

function creaPion(length, width, key){
    var raw = -1;
    var col = -1;
    while((raw < 0 || raw >= length) || (col < 0 || col >= width) || isNaN(raw) || isNaN(col)){
        raw = parseInt(prompt('Ligne du pion '+ key));
        col = parseInt(prompt('Colonne du pion '+ key));
    }
    return [raw, col];
}

function addPion(tab, t_pion, key){
    if (key == 'Dame') {
        tab[t_pion[key][0]][t_pion[key][1]] = 'D';
    } else if (key == 'Roi') {
        tab[t_pion[key][0]][t_pion[key][1]] = 'R';
    }
}

function saisirDeplacement(){
    var msg = '0 = haut gauche, 1 = haut droite, 2 = bas gauche, 3 = bas droite';
    var next = parseInt(prompt(msg));
    return next;
}

function calcul(next, tab, newPos){
    tab[newPos[0]][newPos[1]] = 'O';
    var x = newPos[0];
    var y = newPos[1];
    switch(next){
        case 0 :
            x -= 1;
            y -= 1;
            break;
        case 1 :
            x -= 1;
            y += 1;
            break;
        case 2 :
            x += 1;
            y -= 1;
            break;
        case 3 :
            x += 1;
            y += 1;
            break;
        default:
            break;
    }
    return [x, y];
}

function askPion(){
    var pion = "";
    do{
        pion = prompt("Taper 'D' pour déplacer la Dame, 'R' pour le roi");
    } while(pion != "D" && pion != "R");
    return pion;
}

function testEnd(length, width, pion){
    if((pion[0] >= 0 && pion[0] < length) && (pion[1] >= 0 && pion[1] < width)){
        return true;
    }else{
        console.log("Partie terminée");
        return false;
    }
}