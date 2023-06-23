window.addEventListener("load", function(){
let btn = document.getElementById("btnClick");
console.log("Button value attribute = "+ btn.value );
});

window.addEventListener("load", fnLoad);
function fnLoad(){
    let btn = document.getElementById("btnClick");
    console.log("Button value attribute = "+ btn.value );
}