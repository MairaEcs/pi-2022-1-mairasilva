document.getElementById("btn1").onclick = function(){
    var nomes = ["Miguel", "Arthur", "Heitor", "Helena", "Alice", "Theo", "Davi", "Laura", "Antônio", "Maria"];
    var num = ["98765-4320", "98765-4321", "98765-4322", "98765-4323", "98765-4324", "98765-4325", "98765-4326", "98765-4327", "98765-4328", "98765-4329"];
    var table = document.getElementById("table");

    const random = Math.floor(Math.random()*nomes.length);
    
    var row = table.insertRow(-1);

    row.innerHTML = "<td>"+nomes[random]+"</td>"+"<td>"+num[random];

}

document.getElementById("btn2").onclick = function(){
    document.getElementById("table").deleteRow(-1);
}

