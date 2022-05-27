let btnStart = document.getElementById("btn-start");
let btnBingo = document.getElementById("btn-bingo");

let btnClicado = false;

let items = 0;
let contClick = 0;

let bingo = [];
let idBingo;
let valorUnicoBingo;

let sorteio = [];
let idSorteio;
let valorUnicoSorteio;
let indice = 0;

let cor = [];

btnStart.onclick = function(e) {
    document.getElementById("cartela-bingo").innerHTML = "";
    if(e.target){
        btnClicado = true;
    }

    valorUnicoBingo = [...new Set(bingo)];
    while(valorUnicoBingo.length != 16){
        idBingo = Math.floor(Math.random() * 200) + 1;
        bingo.push(idBingo);
        valorUnicoBingo = [...new Set(bingo)];
        bingo = valorUnicoBingo;
        
    }
    
    for(let i = 0; i < 16; i++){
        let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${bingo[i]}.png`;
        
        let div = `
        <div onClick="changeColor(this)" class="item">
            <img src="${url}" alt="">
        </div>
        `;

        document.getElementById("cartela-bingo").innerHTML += div;
    }

};

function showPokemon() {
    if(btnClicado == true){
        if(items == 200){
            clearInterval(timer);
        }else{
            
            items++
            
            valorUnicoSorteio = [...new Set(sorteio)];
            while(valorUnicoSorteio.length != 200){
                idSorteio = Math.floor(Math.random() * 200) + 1;
                sorteio.push(idSorteio);
                valorUnicoSorteio = [...new Set(sorteio)];
                sorteio = valorUnicoSorteio;
            }
            
            let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sorteio[indice]}.png`;
            let img = `<img src="${url}" alt="">`;
            document.getElementById("img-pokemon").innerHTML = img;
            indice++;
        }
        
    }
};

let timer = setInterval(showPokemon, 5000);

let changeColor = (e) =>{

    if(contClick != 16){
        contClick++;
    }
    
    if(e.style.background == ""){
        e.style.background = "rgb(220,20,60)";
        for(let i = 0; i < contClick; i++){
            cor[i] = e.style.background;
        }
    }
    
}

btnBingo.onclick = function(e) {
    for(let i of bingo){
        for(let j of sorteio){
            if(i == j && cor.length == 16){
                let msg = `<h3>Você ganhou!</h3>`;

                document.getElementById("cartela-bingo").innerHTML = msg;
            }
            else if(cor.length != 16){
                let msg = `<h3>Você perdeu!</h3>`;

                document.getElementById("cartela-bingo").innerHTML = msg;
            }
        }
    }
    
};