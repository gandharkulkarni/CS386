$(function(){
    $("p").hover(fHoverIn, fHoverOut);
    function fHoverIn(){
        $(this).toggleClass("legible"); 
        $(this).removeClass("normal");
    }
    function fHoverOut(){
        $(this).toggleClass("legible");
        $(this).addClass("normal");
    }
})



