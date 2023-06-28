window.addEventListener('load', fCompStyle);
function fCompStyle(){
    let pTag = document.getElementsByTagName('p');
    pTag[0].style.fontSize = '18pt';
    pTag[0].style.width = '60%';

    console.log("CSS computed width " + window.getComputedStyle(pTag[0]).width);
    console.log("CSS computed font size " + window.getComputedStyle(pTag[0]).fontSize);
}