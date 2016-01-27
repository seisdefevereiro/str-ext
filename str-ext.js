var versions = [];
var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde);

new MutationObserver(function (mutations) {
    mutations.some(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
            function add(name) {
                var found = versions.some(function (el) {
                    return el === name;
                });
                if (!found) {
                    versions.push(name);
                    
                    
var coorde = name;

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
                    
document.getElementById("popup").innerHTML += "<img class='rosa' src='//maps.googleapis.com/maps/api/streetview?size=450x450&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/><br>";

                    console.log(versions);
                }
            }
            add(mutation.target.src);
            return true;
        }

        return false;
    });
}).observe(document.body, {
    attributes: true,
    attributeFilter: ['src'],
    attributeOldValue: true,
    characterData: false,
    characterDataOldValue: false,
    childList: false,
    subtree: true
});

var amen = document.getElementsByClassName("widget-titlecard")[0];
amen.innerHTML += "<div id='popup' style='background:white;width:400px;height:800px;position:fixed;top:15px;right:15px'></div>";

