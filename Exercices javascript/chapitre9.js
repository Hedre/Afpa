function test09_2(){
    var mot = prompt("entrez un mot");
    console.log(mot.length);
}

function test09_3(){
    var msg = prompt("entrez une phrase");
    var j = 0;
    var k = 0;
    
    // Méthode 1 :
    var tab = msg.split(" ");
    for(let i=0;i<tab.length;i++){
        if(tab[i] != ""){
            j++;
        }
    }
    console.log(j);

    // Méthode 2 :
    var msg_2 = msg.trim();
    var longueur = 0;
    while(longueur != msg_2.length){
        longueur = msg_2.length;
        msg_2 = msg_2.replace('  ', ' ');
    }
    console.log(msg_2);
    
    // Méthode 3 :
    var test = false;
    for(let i=0;i<msg.length;i++){
        if(msg.charAt(i) != " " && !test){
            k++
            test = true;
        }else if(msg.charAt(i) == " "){
            test = false;
        }
    }
    console.log(k);
}

function test09_4(){
    var msg = prompt("entrez une phrase");
    var char = new RegExp('[aeiouy]', 'g');
    console.log(msg.toLowerCase().match(char).length);
    var k = 0;
    for(let i=0;i<msg.length;i++){
        var le = msg.toLowerCase().charAt(i)
        if(le == 'a' || le == 'e' || le == 'i' || le == 'o' || le == 'u' || le == 'y'){
            k++
        }
    }
    console.log(k);
}

function test09_5(){
    var msg = prompt("entrez une phrase");
    var index = parseInt(prompt("index à supprimer"));
    //msg = msg.slice(0, index) + msg.slice(index+1);
    msg = msg.substr(0, index) + msg.substr(index+1);
    //msg = msg.substring(0, index) + msg.substr(index+1);
    console.log(msg);
}