var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;

var c = coorde.indexOf('panoid=');
var L = coorde.indexOf('&w=');
var pano = coorde.substring(c+7,L);


var c2 = coorde.indexOf('pitch=');
var L2 = coorde.indexOf('&ll');
var pitch = coorde.substring(c2+6,L2);

var c3 = coorde.indexOf('&yaw=');
var L3 = coorde.indexOf('&pitch');
var heading = coorde.substring(c3+5,L3);


var coorde2 = window.location.href;

var c4 = coorde2.indexOf('a,');
var L4 = coorde2.indexOf('y,');
var fov = coorde2.substring(c4+2,L4);

var c5 = coorde2.indexOf('/@');
var L5 = coorde2.indexOf(',3a');
var ll = coorde2.substring(c5+2,L5);


console.log(pano,pitch,heading,fov,ll);

document.body.innerHTML += "<div id='popup' style='background:white;width:500px;height:800px;position:fixed;right:0'></div>";
document.getElementById("popup").innerHTML = "<img id='rosa' src='//maps.googleapis.com/maps/api/streetview?size=500x500&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/>";

imagem.onchange = (function() { 
  var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
  var c = coorde.indexOf('panoid=');
var L = coorde.indexOf('&w=');
var pano = coorde.substring(c+7,L);


var c2 = coorde.indexOf('pitch=');
var L2 = coorde.indexOf('&ll');
var pitch = coorde.substring(c2+6,L2);

var c3 = coorde.indexOf('&yaw=');
var L3 = coorde.indexOf('&pitch');
var heading = coorde.substring(c3+5,L3);


var coorde2 = window.location.href;

var c4 = coorde2.indexOf('a,');
var L4 = coorde2.indexOf('y,');
var fov = coorde2.substring(c4+2,L4);

var c5 = coorde2.indexOf('/@');
var L5 = coorde2.indexOf(',3a');
var ll = coorde2.substring(c5+2,L5);


console.log(pano,pitch,heading,fov,ll);

  document.getElementById("rosa").src = "//maps.googleapis.com/maps/api/streetview?size=300x300&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano;
});
