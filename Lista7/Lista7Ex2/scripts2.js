var videos = [
    {
      "youtubeId": "ZtMzB5CoekE",
      "title": "3 Técnicas Que Eu Uso Para Aprender a Programar Qualquer Coisa (mesmo sem ter o dom da programação)",
      "author": "Filipe Deschamps"
    },
    {
      "youtubeId": "MV3dxDwRgnQ",
      "title": "Trabalho Remoto: Vagas Disponíveis HOJE para Ganhar em Dólar e Real (+9 dicas para ser contratado)",
      "author": "Filipe Deschamps"
    },
    {
      "youtubeId": "n3tMEOw9KGY",
      "title": "3 projetos de nível iniciante que geram até $3000 por Mês.",
      "author": "Programador BR"
    },
    {
      "youtubeId": "nZun1Y_CMJY",
      "title": "5 maneiras de ganhar dinheiro como programador sem ter um chefe",
      "author": "Programador BR"
    },
    {
      "youtubeId": "ciqsOrSIiSA",
      "title": "As 8 maiores dúvidas sobre a introdução de TCC | André Fontenelle",
      "author": "André Fontenelle"
    }
];

let texto = "";

videos.forEach(function(item, index){
    texto += `
    <div class="card">
        <iframe src="https://www.youtube.com/embed/${item.youtubeId}" width="100%"></iframe>
        <div class="descricao">
            <h4><b>${item.title}</b></h4>
            <hr>
            <p>${item.author}</p>
        </div>
    </div>
    `;
});

document.getElementById("container").innerHTML += texto;