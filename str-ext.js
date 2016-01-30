var versions = [];
var nenem = 1;
var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde);

if (document.getElementsByClassName("tactile-timemachine__dropdown-container")[0].style.display === 'none') {
var evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        /* whatever properties you want to give it */
    }),
    ele = document.getElementsByClassName("tactile-timemachine__button")[0];
    ele.dispatchEvent(evt);
}

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
var keytrana = 'cravo'+nenem;
document.getElementById("popup").innerHTML += 
"<div class='"+keytrana+"' style='margin:70px;display:inline-block'><img class='rosa' style='' src='//maps.googleapis.com/maps/api/streetview?size=450x640&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/><form>fov:<span><input type='button' id='minus' value='-'><input type='text' style='width:20px;background:yellow' id='textb' name='name' value='"+fov+"' /><input type='button' value='+' id='plus'></span></form></div>";
nenem++

document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[0].addEventListener("click", function() {
    var value = parseInt(document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[1].value);
    value=value+1;
    document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[1].value = value;
    
        var coorde2 = this.parentNode.getElementsByTagName('img')[0].src;
        var c4 = coorde2.indexOf('a,');
        var L4 = coorde2.indexOf('y,');
        var fov = coorde2.substring(c4+2,L4);
        var str = coorde2.replace(fov, value+1);
        this.parentNode.getElementsByTagName('img')[0].src=str;
    
});

document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[2].addEventListener("click", function() {
    var value = parseInt(document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[1].value);
    value=value-1;
    document.getElementById(keytrana).getElementsByTagName("form")[0].getElementsByTagName("input")[1].value = value;
});


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
                    
    coorde = name;
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
amen.innerHTML += "<div id='mirror' style='z-index:99999;top:0;right:0;left:0;width:100%;height:100%;position:fixed;box-sizing: border-box;padding: 16px'><div id='popup' style='background:white;text-align:center;overflow:auto;width:calc(100% - 8px);height:calc(100% - 8px)'></div></div>";


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
