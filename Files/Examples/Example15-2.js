$(function(){
    $("div>p").css("border","3px solid red");
    $(".sampleList > li > a").click(function(){
        $(this).css("color","red");
    });
    $("<p> This is a <b>p</b> element created with jQuery </p>").appendTo("#jQuery");
});