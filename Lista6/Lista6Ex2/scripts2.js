let mais = document.getElementById("adicionar");

mais.onclick = function(e){
    let post = document.getElementById("input").value;
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    let texto = document.createTextNode(post);
    li.appendChild(texto);
    lista.appendChild(li);
    document.getElementById("input").value = "";
}


