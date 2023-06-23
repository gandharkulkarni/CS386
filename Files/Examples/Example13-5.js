window.addEventListener("load", fSelCells);
function fSelCells(){
    let table = document.getElementsByTagName("table")[0];
    let td = table.getElementsByTagName("td");
    let tdLen = td.length;
    for(let i=0; i<tdLen; i++){
        console.log(`${i+1}: Cell value = ${td[i].textContent}`)
    }

}