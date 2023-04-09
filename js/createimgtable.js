function loadImages1(){
    const myNode = document.getElementById("grid-container");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    for (let index = 1; index < 10; index++) {

        var resDiv = document.createElement("div");
        resDiv.className = "responsive grid-item";

        var galDiv = document.createElement("div");
        galDiv.className = "gallery";

        var descDiv = document.createElement("div");
        descDiv.className = "desc";
        descDiv.innerHTML = "Toalha Microfibra 70x140cm";

        var img = document.createElement("img");
        img.className = "imgClass";
        img.src = 'images/Toalhas/microfibra pequeno/' + index + '.png';
    
        galDiv.appendChild(img);
        galDiv.appendChild(descDiv);
        
        resDiv.appendChild(galDiv);

        document.getElementById("grid-container").appendChild(resDiv);
    }
}

function loadImages2(){

    for (let index = 1; index < 9; index++) {

        var resDiv = document.createElement("div");
        resDiv.className = "responsive grid-item";

        var galDiv = document.createElement("div");
        galDiv.className = "gallery";

        var descDiv = document.createElement("div");
        descDiv.className = "desc";
        descDiv.innerHTML = "Toalha Microfibra 90x170cm";

        var img = document.createElement("img");
        img.className = "imgClass";
        img.src = 'images/Toalhas/microfibra grande/' + index + '.jpg';
    
        galDiv.appendChild(img);
        galDiv.appendChild(descDiv);
        
        resDiv.appendChild(galDiv);

        document.getElementById("grid-container").appendChild(resDiv);
    }
}

function loadImages3(){

    for (let index = 1; index < 6; index++) {

        var resDiv = document.createElement("div");
        resDiv.className = "responsive grid-item";

        var galDiv = document.createElement("div");
        galDiv.className = "gallery";

        var descDiv = document.createElement("div");
        descDiv.className = "desc";
        descDiv.innerHTML = "Toalha Algodão Liso 70x140cm";

        var img = document.createElement("img");
        img.className = "imgClass";
        img.src = 'images/Toalhas/algodao liso/' + index + '.png';
    
        galDiv.appendChild(img);
        galDiv.appendChild(descDiv);
        
        resDiv.appendChild(galDiv);

        document.getElementById("grid-container").appendChild(resDiv);
    }
}

function loadImages4(){


    for (let index = 1; index < 11; index++) {

        var resDiv = document.createElement("div");
        resDiv.className = "responsive grid-item";

        var galDiv = document.createElement("div");
        galDiv.className = "gallery";

        var descDiv = document.createElement("div");
        descDiv.className = "desc";
        descDiv.innerHTML = "Toalha Algodão 70x140cm";

        var img = document.createElement("img");
        img.className = "imgClass";
        img.src = 'images/Toalhas/algodao/' + index + '.jpg';
    
        galDiv.appendChild(img);
        galDiv.appendChild(descDiv);
        
        resDiv.appendChild(galDiv);

        document.getElementById("grid-container").appendChild(resDiv);
    }
}

function loadImages5(){

    let string = "58221,Cabeça Animais Insuflável 71cmX56cm, 86cmX58cm, 107cmX58cm,2.20€*57524,Tartaruga Insuflável 150cmX127cm,7.99€*57525,Tubarão Branco Insuflável 173cmX107cm,7.05€*57550,Raia Insuflável 188cmX145cm,9.40€*57551,Crocodilo Insuflável 170cmX86cm,6.25€*57555,Tartaruga Marinha Insuflável 191cmX170cm,13.15€*58523,Baleia Azul Insuflável 152cmX114cm,6.85€*58535,Golfinho Pequeno Insuflável 175cmX66cm,6.29€*58546,Crocodilo Insuflável Pequeno 168cmX86cm,5.60€*58561,Orca Insuflável 193cmX119cm,10.25€*58562,Crocodilo Insuflável Grande 203cmX114cm,10.25€*58802,Espreguiçadeiras com Enconsto Insuflável 160cmX85cm,8.19€*58329,Bóia Explorer 100 Insuflável 147cmX84cmX36cm,9.25€*59230,Bóia Insuflável 51cm,0.70€*59241,Bóia Insuflável 61cm,0.90€*59242,Bóia Insuflável 61cm,0.98€*59251,Bóia Insuflável 91cm,2.59€*59252,Bóia Insuflável 91cm,2.29€*59256,Bóia Pegas Insuflável 91cm,2.99€*59258,Bóia Pegas Insuflável 76cm,2.15€*58263,Bóia Pegas Insuflável 97cm,3.95€*56268,Bóia Pegas Insuflável 114 cm,5.39€*59260,Bóia Insuflável 76cm,1.35€*59262,Bóia Insuflável 91cm,1.99€*59574,Bóia Insuflável 67cm,2.49€*58165,Prancha Ondas Insuflável 112cmX62cm,4.75€*59703,Colchão Insuflável 183cmX69cm,2.70€*59717,Colchão Insuflável 183cmX76cm,3.45€*59720,Colchão Insuflável 183cmX69cm,3.55€*56585,Bóia Bebé Insuflável 70cm,4.65€*56587,Bóia Bebé Insuflável 79cmX79cm,5.15€*56588,Bóia Bebé Insuflável 76cm,4.99€*59661,Bóia Bebé Insuflável 41cmX30cm,1.85€*58660,Colete Infantil Insuflável 50cmX47cm,2.29€*58671,Colete Infantil Insuflável 50cmX47cm,2.29€*56665,Braçadeiras Bebé 20cmX15cm,1.29€*56666,Braçadeiras Bebé 23cmX15cm,1.15€*58641,Braçadeiras 30cmX15cm,1.25€*58652,Braçadeiras Bebé 23cmX15cm,1.15€*57104,Piscina De Bebê Redonda Insuflável 86cmX25cm,3.85€*57106,Piscina De Bebê Redonda Insuflável 61cmX22cm,3.45€*57107,Piscina De Bebê Redonda Insuflável 61cmX22cm,3.05€*57412,Piscina De Bebê Redonda Insuflável 114cmX25cm,6.85€*58924,Piscina De Bebê Redonda Insuflável 86cmX25cm,4.35€";

    let array = string.split("*");
    for (let index = 0; index < array.length; index++) {

        let text = array[index].split(",");
        var resDiv = document.createElement("div");
        resDiv.className = "responsive grid-item";

        var galDiv = document.createElement("div");
        galDiv.className = "gallery";

        var descDiv = document.createElement("div");
        descDiv.className = "desc";
        descDiv.innerHTML = text[0] + ' ' +  text[1];

        var img = document.createElement("img");
        img.className = "imgClass";
        img.src = 'images/insufláveis/' + text[0] + '.jpg';
    
        
        var p = document.createElement("p");
        p.style.fontWeight = 'bold';
        p.innerHTML = text[2];


        galDiv.appendChild(img);
        galDiv.appendChild(descDiv);
        galDiv.append(p);

        resDiv.appendChild(galDiv);

        document.getElementById("grid-container").appendChild(resDiv);
    }
}

function handleClick(number){
    const myNode = document.getElementById("grid-container");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    if(number == 1){
        loadImages1();
    }else if(number == 2){
        loadImages2();
    }else if(number == 3){
        loadImages3();
    }else if(number == 4){
        loadImages4();
    }else if(number == 5){
        loadImages5();
    }
}


window.onload = function () {
    loadImages1();
};

