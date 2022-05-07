function numRandom(){
    return Math.floor(Math.random() * 101);
};

let numCerto = numRandom();
console.log(numCerto);

let enviar = document.getElementById("idenviar");
enviar.onclick = function(e){
    let numDoChute = document.getElementById("idnumero").value;
    let lista = document.getElementById("lista");
    let li = document.createElement("li");

    if(numDoChute < numCerto){
        let textoMenor = document.createTextNode(numDoChute + " é muito baixo");
        li.appendChild(textoMenor);
        lista.appendChild(li);
    }if(numDoChute > numCerto){
        let textoMaior = document.createTextNode(numDoChute + " é muito alto");
        li.appendChild(textoMaior);
        lista.appendChild(li);
    }if(numDoChute == numCerto){
        let textoIgual = document.createTextNode(numDoChute + " é o número certo!");
        li.appendChild(textoIgual);
        li.style.fontWeight = "bold";
        lista.appendChild(li);
    }
    document.getElementById("idnumero").value = "";
}
