let valor = 1;
let text = "";

fetch('https://pokeapi.co/api/v2/pokemon/' + valor)
.then(response => response.json())
.then(data => {

    text = `
    <div id="div-imagem">
        <img id='pic' src="${data.sprites.front_default}">
    </div>
    <div id="div-conteudo">
        <span class='nomes' id='nome'><b>${data.name}</b></span>
        <br>
        <span class='numeros' id='numero'>#${data.id}</span>
        <ul>
    `
    data.types.forEach(function(item, index) {
        text += `<li>${item.type.name}</li>`;
    });
    text += `
        </ul>
    </div>
    `;
    
    document.getElementById("container").innerHTML = text;

})
.catch((error) => {
    //Verificar os erros
    console.error('Error:', error);
});

function loadpokemonNext() {
    valor += 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + valor)
        .then(response => response.json())
        .then(data => {
            text = `
            <div id="div-imagem">
                <img id='pic' src="${data.sprites.front_default}">
            </div>
            <div id='row'>
                <span class='nomes' id='nome'><b>${data.name}</b></span>
                <br>
                <span class='numeros' id='numero'>#${data.id}</span>
                <ul>
            `
            data.types.forEach(function(item, index) {
                text += `<li>${item.type.name}</li>`;
            });
            text += `
                </ul>
            </div>
            `;
            
            document.getElementById("container").innerHTML = text;
            
        })
        .catch((error) => {
            //Verificar os erros
            console.error('Error:', error);
        });
    
};

document.getElementById("btnNext").addEventListener("click", loadpokemonNext);

function loadpokemonPrev() {
    valor -= 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + valor)
        .then(response => response.json())
        .then(data => {
            text = `
            <div id="div-imagem">
                <img id='pic' src="${data.sprites.front_default}">
            </div>
            <div id='row'>
                <span class='nomes' id='nome'><b>${data.name}</b></span>
                <br>
                <span class='numeros' id='numero'>#${data.id}</span>
                <ul>
            `
            data.types.forEach(function(item, index) {
                text += `<li>${item.type.name}</li>`;
            });
            text += `
                </ul>
            </div>
            `;
            
            document.getElementById("container").innerHTML = text;
            
        })
        .catch((error) => {
            //Verificar os erros
            console.error('Error:', error);
        });
    
};

document.getElementById("btnPrev").addEventListener("click", loadpokemonPrev);