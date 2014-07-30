$(document).ready(function(){
    $('nav').stick_in_parent()

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
        if(scrollTop>145)
            $('nav').css({"border-bottom-width":"1px"});
        else
            $('nav').css("border-bottom-width","0px");
    })
})