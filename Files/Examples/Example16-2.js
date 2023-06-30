$(function(){
    $("#btn").click(fClone);

    function fClone(){
        $("h2").appendTo("#divEnd");
        // $("h2").clone().appendTo("#divEnd");
    }
})