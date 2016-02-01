var versions = [];
var nenem = 1;
var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var dia = document.getElementsByClassName("tactile-timemachine__date")[0];
var ocasiao = dia.getElementsByTagName("span")[2];

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

var diad = ocasiao.innerHTML;
document.getElementById("popup").innerHTML += "<div id='cravo"+nenem+"' style='margin:70px;display:inline-block'><img class='rosa' style='' src='//maps.googleapis.com/maps/api/streetview?size=450x640&location="+ll+"&fov="+fov+"&heading="+heading+"&pitch="+pitch+"&pano="+pano+"'/><span>"+diad+"</span><form>fov:<span><input type='button' value='-' class='minus'><input type='text' style='width:30px;background:yellow' name='name' value='"+fov+"' /><input type='button' class='plus' value='+'></span></form></div>";


nenem++

}


 

new MutationObserver(function (mutations) {
    mutations.some(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src' && !mutation.target.classList.contains('rosa')) {
            function add(name) {
                var found = versions.some(function (el) {
                    return el === name;
                });
                if (!found) {
                    versions.push(name);
                    coorde = name;
                    loadimages();
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
amen.innerHTML += "<div id='mirror' style='z-index:99999;top:0;right:0;left:0;width:100%;height:100%;position:fixed;box-sizing: border-box;padding: 16px'><div id='popup' style='background:white;text-align:center;overflow:auto;width:calc(100% - 8px);height:calc(100% - 8px)'><span id='dispara'>dispara</span><canvas id='tela' style='border:3px solid yellow;position:fixed;'></canvas></div></div>";


amen.onclick = function(event) {
    if (event.target.id === 'dispara') {
        var elem = document.getElementsByClassName("minus");
        for(var i=0; i < elem.length; i++){
                (function () {
                        var boxa = elem[i].parentNode.parentNode.parentNode.id;
                        var inpb = elem[i].className;
                        elem[i].addEventListener("click", function(){makeItHappen(inpb,boxa);}, false);
                }())
        }
        var elem2 = document.getElementsByClassName("plus");
        for(var i=0; i < elem2.length; i++){
                (function () {
                        var boxb = elem2[i].parentNode.parentNode.parentNode.id;
                        var inp = elem2[i].className;
                        elem2[i].addEventListener("click", function(){makeItHappen(inp,boxb);}, false);
                }())
        }
        

var w = document.getElementById("popup").innerWidth;
var h = document.getElementById("popup").innerHeight;
       var canvas = document.getElementById("tela"),
            ctx = canvas.getContext("2d"),
            painting = false,
            lastX = 0,
            lastY = 0,
            lineThickness = 40;
       canvas.style.width = w; canvas.style.height = h;
        canvas.onmousedown = function(e) {
            painting = true;
            ctx.fillStyle = "#000";
            lastX = e.pageX - this.offsetLeft;
            lastY = e.pageY - this.offsetTop;
        };

        canvas.onmouseup = function(e){
            painting = false;
        }

        canvas.onmousemove = function(e) {
            if (painting) {
                mouseX = e.pageX - this.offsetLeft;
                mouseY = e.pageY - this.offsetTop;

                // find all points between        
                var x1 = mouseX,
                    x2 = lastX,
                    y1 = mouseY,
                    y2 = lastY;


                var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
                if (steep){
                    var x = x1;
                    x1 = y1;
                    y1 = x;

                    var y = y2;
                    y2 = x2;
                    x2 = y;
                }
                if (x1 > x2) {
                    var x = x1;
                    x1 = x2;
                    x2 = x;

                    var y = y1;
                    y1 = y2;
                    y2 = y;
                }

                var dx = x2 - x1,
                    dy = Math.abs(y2 - y1),
                    error = 0,
                    de = dy / dx,
                    yStep = -1,
                    y = y1;

                if (y1 < y2) {
                    yStep = 1;
                }

                lineThickness = 10 - Math.sqrt((x2 - x1) *(x2-x1) + (y2 - y1) * (y2-y1))/10;
                if(lineThickness < 1){
                    lineThickness = 1;   
                }

                for (var x = x1; x < x2; x++) {
                    if (steep) {
                        ctx.fillRect(y, x, lineThickness , lineThickness );
                    } else {
                        ctx.fillRect(x, y, lineThickness , lineThickness );
                    }

                    error += de;
                    if (error >= 0.5) {
                        y += yStep;
                        error -= 1.0;
                    }
                }

                lastX = mouseX;
                lastY = mouseY;

            }
        }
        
        
        
        
    }
}

function makeItHappen(inp,elem){
        var play = document.getElementById(elem);
        var value = parseInt(play.getElementsByTagName("input")[1].value);
        if (inp === 'minus') {
                value=value-40;
                play.getElementsByTagName("input")[1].value = value;
                var coor = play.getElementsByTagName('img')[0].src;
                var c4 = coor.indexOf('v=');
                var L4 = coor.indexOf('&h');
                var fov = coor.substring(c4+2,L4);
                var str = coor.replace(fov, value);
                play.getElementsByTagName('img')[0].src=str;
        } if (inp === 'plus') {
                value=value+40;
                play.getElementsByTagName("input")[1].value = value;
                var coor = play.getElementsByTagName('img')[0].src;
                var c4 = coor.indexOf('v=');
                var L4 = coor.indexOf('&h');
                var fov = coor.substring(c4+2,L4);
                var str = coor.replace(fov, value);
                play.getElementsByTagName('img')[0].src=str;
        }
}


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




