$(function(){
    var query = window.location.search;
    if(query!==""){
        $("input").attr("disabled", "true");
    }
})