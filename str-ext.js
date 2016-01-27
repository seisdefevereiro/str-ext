var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;

var c0 = coorde.indexOf('panoid=');
var c=coorde.indexOf(str.charAt(c0+8));
var L = coorde.indexOf('&w=');
var pano = coorde.slice(c,L);

var c20 = coorde.indexOf('pitch=');
var c2=coorde.indexOf('pitch=',c20-6);
var L20 = coorde.indexOf('&ll');
var L2=coorde.indexOf('&ll',L20-3);
var pitch = coorde.slice(c2,L2);

var c30 = coorde.indexOf('&yaw=');
var c3=coorde.indexOf('&yaw=',c30-5);
var L30 = coorde.indexOf('&pitch');
var L3=coorde.indexOf('&pitch',L30-6);
var heading = coorde.slice(c3,L3);


var coorde2 = window.location.href;

var c40 = coorde2.indexOf('a,');
var c4=coorde2.indexOf('a,',c40-2);
var L40 = coorde2.indexOf('y,');
var L4=coorde2.indexOf('y,',L40-2);
var fov = coorde2.slice(c4,L4);

var c50 = coorde2.indexOf('/@');
var c5=coorde2.indexOf('/@',c50-2);
var L50 = coorde2.indexOf(',3a');
var L5=coorde2.indexOf(',3a',L50-3);
var ll = coorde2.slice(c5,L5);

console.log(pano,pitch,heading,fov,ll);

document.body.innerHTML += "<div id='popup' style='background:white;width:500px;height:800px;position:fixed'></div>";
document.getElementById("popup").innerHTML = "<img src='//maps.googleapis.com/maps/api/streetview?size=300x300&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/>";
