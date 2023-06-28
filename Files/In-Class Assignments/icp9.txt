window.addEventListener('load', fLoad);
//Part 1
function fLoad(){
    let inputLink = document.getElementById('usf');
    let div = document.getElementById('divMain');
    fHover(inputLink);
    fFadeIn(div);
}

//Part 3
function fHover(elt){
    // alert(elt.id);
    let fontSize = window.getComputedStyle(elt).fontSize;
    elt.addEventListener('mouseover', function(){
        elt.style.fontSize = "24pt";
    });

    elt.addEventListener('mouseout',function(){
        elt.style.fontSize = fontSize;
    });
}

//Part 2
function fFadeIn(elt){
    // alert(elt.id);
    let opValue = 0;
    elt.style.opacity = opValue;
    let timerId = setInterval(function(){
        opValue += 0.01;
        elt.style.opacity = opValue;
        if(opValue>1){
            clearInterval(timerId);
        }
    },20);
    
}
