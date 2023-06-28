window.addEventListener('load',fCSS);
function fCSS(){
    let pTag = document.getElementsByTagName('p');
    pTag[0].style.cssText = 'font-size:18pt';
    strCSS = 'color:Blue; background-color: gray;';
    let h1 = document.getElementsByTagName('h1');
    h1[0].setAttribute('style',strCSS);
    console.log(h1[0].getAttribute('style'));
}