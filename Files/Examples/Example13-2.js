window.addEventListener("load", fLoopDOM);

function fLoopDOM(){
    let b = document.body;
    for(element of b.childNodes){
        console.log(element.nodeName);
    }
    
    /*
    let len = b.childNodes.length;
    for(let i=0; i<len; i++){
        console.log(b.childNodes[i].nodeName);
    }
    */
}