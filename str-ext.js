var versions = [];


var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde);
imagem.onchange = (function() {
var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde)
});
console.log(versions)
