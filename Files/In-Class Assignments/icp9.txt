window.addEventListener('load', fLoad);
//Part 1 - Function for load event
function fLoad(){
    //Get inputLink
    let inputLink = document.getElementById('usf');
    //Get div
    let div = document.getElementById('divMain');
    fHover(inputLink);
    fFadeIn(div);
}

//Part 3 - Function for Hover event
function fHover(elt){
    // alert(elt.id);
    let fontSize = window.getComputedStyle(elt).fontSize;
    //Add event for mouseover
    elt.addEventListener('mouseover', function(){
        elt.style.fontSize = "24pt";
    });

    //Add event for mouseout
    elt.addEventListener('mouseout',function(){
        elt.style.fontSize = fontSize;
    });
}

//Part 2 - Function for fade in event
function fFadeIn(elt){
    // alert(elt.id);
    let opValue = 0;
    elt.style.opacity = opValue;
    let timerId = setInterval(function(){
        //Increment opValue by 0.01
        opValue += 0.01;
        elt.style.opacity = opValue;
        if(opValue>1){
            //When opValue>1 clear the interval
            clearInterval(timerId);
        }
    },20);
    
}
