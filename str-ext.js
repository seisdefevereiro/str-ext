console.log(window.location.href);

var coorde = $("body").find(".tactile-timemachine__preview-background-thumbnail").attr("src");
var c = coorde.indexOf('panoid='); 
var L = coorde.indexOf('&w=');
var pano = coorde.slice(c,L);

var c2 = coorde.indexOf('pitch='); 
var L2 = coorde.indexOf('&ll');
var pitch = coorde.slice(c2,L2);

console.log(pano,pitch);


$("<div id='popup' style='background:white;width:500;height:800;position:fixed'></div>").appendTo("body");
$("#popup").append("<img src='http://maps.googleapis.com/maps/api/streetview?size=300x300&location=&fov=&heading=&pitch="+pitch+"&pano="+pano+"'/>")
