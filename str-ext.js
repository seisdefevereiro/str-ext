var coorde = $("body").find(".tactile-timemachine__preview-background-thumbnail").attr("src");

var c = coorde.indexOf('panoid='); 
var L = coorde.indexOf('&w=');
var pano = coorde.slice(c,L);

var c2 = coorde.indexOf('pitch='); 
var L2 = coorde.indexOf('&ll');
var pitch = coorde.slice(c2,L2);

var c3 = coorde.indexOf('&yaw='); 
var L3 = coorde.indexOf('&pitch');
var heading = coorde.slice(c3,L3);


var coorde2 = window.location.href;

var c4 = coorde2.indexOf('a,'); 
var L4 = coorde2.indexOf('y,');
var fov = coorde2.slice(c4,L4);

var c5 = coorde2.indexOf('/@'); 
var L5 = coorde2.indexOf(',3a');
var ll = coorde2.slice(c5,L5);

console.log(pano,pitch,heading,fov,ll);


$("<div id='popup' style='background:white;width:500px;height:800px;position:fixed'></div>").appendTo("body");
$("#popup").append("<img src='//maps.googleapis.com/maps/api/streetview?size=300x300&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/>")
