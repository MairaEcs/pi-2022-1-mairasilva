/*document.getElementById("btn1").onclick = function(){
    let rows = document.getElementsByTagName("tr");
    for(i = 0; rows.length; i++){
        if(i % 2 != 0){
            rows[i].className = "even";
        }
    } 
}*/

document.getElementById("btn1").onclick = function(){
    let rows = document.querySelectorAll("tr");
    for(i = 1; i < rows.length; i = i+2){
        rows[i].style.backgroundColor = "white";
    }
    
}

document.getElementById("btn2").onclick = function(){
    let rows = document.querySelectorAll("tr");
    for(i = 1; i < rows.length; i = i+2){
        rows[i].style.backgroundColor = "rgb(194, 255, 194)";
    }
}
