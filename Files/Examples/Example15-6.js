$(function(){
    $("h2").hover(fHoverIn, fHoverOut);
    function fHoverIn(){
        $(this).html("<li>Onions</li><li>Broth</li><li>Garlic</li>");
    }
    function fHoverOut(){
        $(this).html("");
    }
})



