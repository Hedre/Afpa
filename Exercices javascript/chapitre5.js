function test05_1(){
    console.log("exo 5.1");
    var nb = 0;

    while (nb < 1 || nb > 3){
        nb = prompt("Entrez un nombre entre 1 et 3");
    }

    console.log("Vous avez entré le nombre " + nb);
}

function test05_2(){
    console.log("exo 5.2");
    var nb = prompt("Entrez un nombre");

    while (nb < 10 || nb > 20){
        if (nb<10){
            nb = prompt("Plus grand !");
        } else {
            nb = prompt("Plus petit !");
        }
    }
    console.log("Vous avez entré le nombre " + nb);
}

function test05_3(){
    console.log("exo 5.3");
    var nb = parseInt(prompt("Entrez un nombre"));
    var i = 1;
    do {
        console.log(nb+i);
        i += 1;
    }
    while (i<=10);
}

function test05_4(){
    console.log("exo 5.4");
    var nb = parseInt(prompt("Entrez un nombre"));
    console.log("Table de : "+nb);
    for (i=1; i<=10; i++){
        console.log(nb+" x "+i+" = "+nb*i);
    }
}

function test05_5(){
    console.log("exo 5.5");
    var nb = parseInt(prompt("Entrez un nombre"));
    var r = 0;
    for (i=1; i<=nb; i++){
        r += i;
    }
    console.log(r);
}

function test05_7(){
    console.log("exo 5.7");
    var nb1 = 0;
    var pos = 0;
    for (i=1; i<=20; i++){
        var nb2 = parseInt(prompt("Entrez le nombre numéro : "+i));
        if (nb2>nb1){
            nb1 = nb2;
            pos = i;
        } else if (i==1){
            nb1 = nb2;
            pos = i;
        }
    }
    console.log("Le plus grand de ces nombres est : "+nb1);
    console.log("C'était le nombre numéro : "+pos);
}

function test05_8(){
    console.log("exo 5.8");
    var nb1 = 0;
    var nb2 = parseInt(prompt("Entrez un nombre (entrez 0 pour stoper)"));
    var pos = 1;
    var pos_max = 1;
    while(nb2!=0){
        if (nb2>nb1){
            nb1 = nb2;
            pos_max = pos;
        } else if (nb1==0){
            nb1 = nb2;
            pos_max = pos;
        }
        nb2 = parseInt(prompt("Entrez un nombre"));
        pos += 1;
    }
    console.log("Le plus grand de ces nombres est : "+nb1);
    console.log("C'était le nombre numéro : "+pos_max);
}

function test05_9(){
    console.log("exo 5.9");
    var prix = parseInt(prompt("Entrez le prix d'un article (entrez 0 pour stoper)"));
    var total = prix;
    while(prix!=0){
        prix = parseInt(prompt("Entrez le prix d'un article (entrez 0 pour stoper)"));
        total += prix;
    }
    console.log("Vous devez payer : "+total+"€.");
    var payement = parseInt(prompt("Entrez la somme que vous donnez"));
    console.log("Vous avez donné : "+payement+"€.");
    var remise = payement-total;
    console.log("La remise est de : "+remise+"€.");
    for (i=0; i<=(remise/10); i++){
        console.log("10 euros");
        remise -= 10;
    }
    if (remise>=5){
        console.log("5 euros");
        remise -= 5;
    }
    if(remise>=1){
        for (i=0; i<=remise; i++){
            console.log("1 euros");
            remise -= 1;
        }
    }
}