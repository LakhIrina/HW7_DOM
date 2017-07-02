// * removeAllSpans
function removeAllSpans (childs) {
        for(var i=0;i<childs.length; i++) {
            var child = childs[i];
            var parent = child.parentNode;
            parent.removeChild(child);
        }
};
removeAllSpans( document.querySelectorAll("span"));

//firstChild;
function firstChild (parent) {
    var node = parent.firstChild;
    if(node === null){
        console.log("No firstChild");
    }
    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.nextSibling;
        console.log('firstChild', node);
    }
    return node;
};
firstChild(document.querySelector('div'));

//lastChild
function lastChild (parent) {
    var node = parent.lastChild;
    if(node === null){
        console.log("No lastChild");
    }
    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.previousSibling;
        console.log('lastChild', node);
    }
    return node;
};
 lastChild(document.querySelector('article'));

// next
function next (node) {
    var node = node.nextSibling;
    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.nextSibling;
        (node === null)?  console.log("No nextSibling") : console.log('nextSibling', node);
    }
    return node;
};

next(document.querySelector("section"));


// prev
function prev (node) {
    var node = node.previousSibling;
    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.previousSibling;
        (node === null)?  console.log("No previousSibling") : console.log('previousSibling', node);
    }
    return node;
};

prev(document.querySelector("aside"));



