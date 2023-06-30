$(function(){
    $("img").css("display","none");
    $("#btn").click(fAnimation);

    function fAnimation(){
        $("img").fadeIn(3000, fComplete);
    }

    function fComplete(){
        $("p").append("Animation complete");
    }
})