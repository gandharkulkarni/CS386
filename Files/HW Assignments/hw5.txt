$(function(){
    //On click of delete button
    $(".delete").click(function(){
        fDeleteRow(this)
    });
    //Mouse hover on delete button
    $(".delete").mouseover(
        function()
        {
            fMousePointer(this)
        });
    //Any change in even odd rows
    $("#even").change(fAlternateRow);
    $("#odd").change(fAlternateRow);
    //On load call
    fAlternateRow();

    //Function to delete a row
    function fDeleteRow(button){
        //console.log('fDeleteRow');
        let tr = $(button).closest('tr');
        tr.fadeOut(2000, function() {
            tr.remove();
            fAlternateRow();
          });
    }
    //Function to handle mouse hover event on delete button
    function fMousePointer(button){
        // console.log('fMousePointer');
        $(button).css('cursor','pointer')
    }

    //Function to style even and odd rows
    function fAlternateRow(){
        //console.log('fAlteranteRow');
        $('tr:even').css('background-color', $('#even').val());
        $('tr:odd').css('background-color', $('#odd').val());
    }

});



