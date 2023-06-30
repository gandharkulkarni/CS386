$(function(){
    $("p").css("width","50%").css("border","1px solid black");
    let pFontSize = window.getComputedStyle(document.getElementsByTagName("p")[0]).fontSize;
    $("p").hover(fIn, fOut).click(fClick);

    function fIn(evt){
        $(this).css('font-size',"18pt");
        console.log(`X: ${evt.screenX} Y: ${evt.screenY}`);
    }
    function fOut(evt){
        $(this).css('font-size',pFontSize);
        console.log(`X: ${evt.screenX} Y: ${evt.screenY}`);
    }
    function fClick(){
        $(this).css("background-color","red");
    }
})