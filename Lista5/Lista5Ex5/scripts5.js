document.getElementById("btn").onclick = function(){
    let texto = document.getElementById("text").value;
    let cor = document.getElementById("color").value;
    document.getElementById("paragraph").innerHTML = texto;
    document.getElementById("paragraph").style.backgroundColor = cor;
}