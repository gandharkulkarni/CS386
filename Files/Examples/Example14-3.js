window.addEventListener('load',function(){
    this.document.getElementById("btn").addEventListener("click",fCSSClass);
});

function fCSSClass(){
    let par = document.getElementsByTagName("p")[1];
    par.classList.toggle("emphasize");
}