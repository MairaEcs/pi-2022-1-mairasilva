function btnSend(e) {
    e.preventDefault();
    
    let formData = new FormData(e.target); // O FormData() construtor cria um novo objeto FormData.
    
    let formJSON = Object.fromEntries(formData.entries()); // O método Object.fromEntries() transforma uma lista de pares chave-valor em um objeto.
    
    let resultado = document.querySelector('.json pre');
    resultado.innerText = JSON.stringify(formJSON, null, 2); // valor, substituir, espaço 
  }
  
let form = document.querySelector('.container');
form.addEventListener('submit', btnSend);