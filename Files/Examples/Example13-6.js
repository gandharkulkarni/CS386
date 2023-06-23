window.addEventListener("load", fSelAll);

function fSelAll(){
    let divp = document.querySelectorAll("div > p");
    let len = divp.length;
    for(let i=0; i<len; i++){
        console.log(`${i+1}: Paragraph = ${divp[i].innerHTML} `);
    }
}