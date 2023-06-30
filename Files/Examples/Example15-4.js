$(document).submit(function(evt){
    $("input[type=text]").each(function(index,value){
        if(!$(this).val()){
            alert($(this).attr("placeholder") + ' is required');
            evt.preventDefault();
        }
        else{
            $(this).css("background","green");
        }
    })
});