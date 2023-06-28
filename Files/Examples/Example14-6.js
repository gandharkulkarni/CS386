window.addEventListener("load",function(){
    let btnProp = this.document.getElementById('btnProp');
    let btnAddEvt = this.document.getElementById('btnAddEvt');
    btnProp.onclick = fProp;
    btnAddEvt.addEventListener("click",fAddEvt);
});

function fProp(){
    alert("Event raised by property method");
}
function fAddEvt(){
    alert("Event raised by addEventListener method");
}