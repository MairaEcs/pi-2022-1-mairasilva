let clicarTexto = (e) => {
    e.innerText = "";
}

let clicarImg = (e) => {
    document.getElementById("upload-img").style.display = 'block';  
};

let uploadfoto = document.getElementById("upload-img");
let fotopreview = document.getElementById("imagem");

uploadfoto.addEventListener("change", function(e) {
    showThumbnail(this.files);
});

function showThumbnail(files) {
    if (files && files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
        imagem.src = e.target.result;
    }
        reader.readAsDataURL(files[0]);
    }
}