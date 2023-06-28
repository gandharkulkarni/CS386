window.setInterval(fDisplay,1000);
function fDisplay(){
    let clock = document.getElementById('clock');
    let now  = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}
