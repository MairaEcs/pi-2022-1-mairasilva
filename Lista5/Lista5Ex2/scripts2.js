document.getElementById("btn").onclick = function(){
    let text1 = document.getElementById("p1").innerHTML;
    let text2 = document.getElementById("p2").innerHTML;
    document.getElementById("p1").innerHTML = text2;
    document.getElementById("p2").innerHTML = text1;
}