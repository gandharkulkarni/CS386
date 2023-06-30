$(function(){

    fAnimate();
    $("#btn").click(fCreateLinks);
    $("#btn").click(fAnchorTarget);

    function fAnimate(){
        //Step 1
        // console.log("fAnimate");
        
        //Step 2
        //Select alt attribute of img with intro id
        let alt = $("#intro").attr("alt");
        //Hide the image
        $("#intro").hide();
        //Add fade in effect to image so it slowly appears on screen
        $("#intro").fadeIn(5000, function(){
            alert(alt);
        });
    }
    
    function fCreateLinks(){
        //Step 1
        // console.log("fCreateLinks");

        //Step 3
        //Select body tag and append div to the end
        $("body").append("<div id='linklist'><h1>List of Links</h1></div>");
        //For each anchor tag, clone it and append to div with id linklist
        $("a").each(function(){
            $(this).clone().appendTo("#linklist");
        })
        //Select all anchor tags inside linklist div and add a horizontal ruler after each anchor element
        $("#linklist > a").each(function(){
            $(this).after("<hr>");
        })
    }

    function fAnchorTarget(){
        //Step 1
        // console.log("fAnchorTarget");

        //Step 4
        //Select all anchor tags in the page and add target attribute in it
        $("a").each(function(){
            $(this).attr("target","_blank");
        })
    }

})