
$(function(){
    $("#btn").click(fAlterDoc);

    function fAlterDoc(){
        $("h2").each(function(index, elt){
            console.log(index + "," + elt.innerHTML);
            $(elt).replaceWith(`<h3> ${index+1}. ${$(elt).html()} </h3>`);
        })
        $("h3").prepend("*");
        $("h3").before("<hr>");
        $("h3").after("<hr>");
    }
});