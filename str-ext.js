var versions = [];


var imagem = document.getElementsByClassName("tactile-timemachine__preview-background-thumbnail")[0];
var coorde = imagem.src;
versions.push(coorde);


new MutationObserver(function (mutations) {
    mutations.some(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
            console.log(mutation);
            console.log('Old src: ', mutation.oldValue);
            
            
            


function add(name) {
    var found = versions.some(function (el) {
      return el === name;
    });
    if (!found) {
        versions.push(name);
    }
}

add(mutation.target.src);



            console.log('New src: ', mutation.target.src);
            console.log(versions);
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


console.log(versions)
