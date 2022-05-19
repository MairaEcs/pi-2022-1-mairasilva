function loadReefFishes(){
    let text = document.getElementById("buscar").value;
    fetch('https://reef-fishes.herokuapp.com/api/' + text)
        .then(response => response.json())
        .then(data => {

            data.fish.forEach(function(item, index){
                document.getElementById("nome").innerHTML = item.Name;

                let img = "";
                img = `
                <img id="img" src="${item.Img}" alt="">
                `
                document.getElementById("img").innerHTML = img;

                let preco = item.Price_category;
                if(preco == "low"){
                    document.getElementById("preco").innerHTML = "$ (Low)";
                }
                if(preco == "unknow"){
                    document.getElementById("preco").innerHTML = "- (Unknow)";
                }
                if(preco == "high"){
                    document.getElementById("preco").innerHTML = "$$$ (High)";
                }
                if(preco == "very high"){
                    document.getElementById("preco").innerHTML = "$$$$ (Very high)";
                }                
            });
             
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

document.getElementById("btn").addEventListener("click", loadReefFishes);