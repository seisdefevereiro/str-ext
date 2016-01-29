var versions = [];
var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde);

function loadimages(){


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
                    
document.getElementById("popup").innerHTML += "<img class='rosa' style='margin:70px' src='//maps.googleapis.com/maps/api/streetview?size=450x250&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/><br>";
}



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
loadimages();

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
amen.innerHTML += "<div id='popup' style='background:white;text-align:center;overflow:auto;width:1100px;height:850px;position:fixed;top:15px;right:15px'></div>";

loadimages();

var dragPoints = [];
var i = 1;
while (i<250) {
dragPoints.push([i,10,i,10]);
i++
} while (i>-249) {
dragPoints.push([i,10,i,10]);
i--
}

var sendMouseDrag = function(element, dragPoints) {
    dispatchHTMLMouseEvent("mousemove", dragPoints[i], element);
    i++;
    if(i < dragPoints.length-1) {
      setTimeout(function() {
          sendMouseDrag(element, dragPoints);
      }, 1);
    } else {
        dispatchHTMLMouseEvent("mouseup", dragPoints[i], element);

    }
};

var dispatchHTMLMouseEvent = function(mouseEventType, coords, target) {

    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(mouseEventType, true, true, window, 0,
    coords[0], coords[1], coords[2], coords[3], false, false, false, false, 0, null);
    target.dispatchEvent(evt);

};

var i = 1;
var element = document.getElementsByClassName("tactile-timemachine__scrubber")[0];
dispatchHTMLMouseEvent("mousedown", dragPoints[0], element);
sendMouseDrag(element, dragPoints);
