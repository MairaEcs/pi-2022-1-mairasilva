let adicionar = document.getElementById("add");

adicionar.onclick = function(){
    let item = document.getElementById("idtexto").value;
    if(item != ""){
        let listaDeTarefas = document.getElementById("lista");
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        let texto = `
        <input onClick="tachar(this)" type="checkbox" name="concluida" id="idconcluida">
        <label id="idtarefa" for="tarefa">${item}</label>
        <i onClick="remover(this)" class="fa-regular fa-trash-can"></i>
        `;
        
        td.innerHTML = texto;
        tr.appendChild(td);
        listaDeTarefas.appendChild(tr);
        document.getElementById("idtexto").value = "";
    }
};

let remover = (e) => {
    e.parentElement.parentElement.remove();
};

let tachar = (e) => {
    let checkbox = e;
    if(checkbox.checked){
        e.nextElementSibling.style.textDecoration = "line-through";
    } else {
        e.nextElementSibling.style.textDecoration = "none";
    }
};
