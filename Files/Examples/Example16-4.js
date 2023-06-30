$(function(){
    $("p").each(function(index){
        $(this).on(
            "click",
            {message: `This is the paragraph at ${index}`},
            fEvent
        );
    })

    function fEvent(event){
        $(this).append("</br>"+event.data.message);
    }
})