window.addEventListener("load", fLoopDOM);

function fLoopDOM(){
    let b = document.body;
    for(element of b.children){
        console.log(element.tagName);
    }
    
    /*
    let len = b.childNodes.length;
    for(let i=0; i<len; i++){
        console.log(b.childNodes[i].nodeName);
    }
    */
}