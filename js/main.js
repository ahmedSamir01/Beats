/*global $, alert, console*/

$(function () {
    
    "use strict";
    
    // adjust header height
    
    var myHeader = $(".header"),
        myBx = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        myBx.each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
        });
        
    });
    
    $(".links li a").on("click", function () {
        
        $(this).parent().addClass("active").siblings().removeClass("active");
        
    });
    
    // adjst bx slider  
    
    myBx.each(function () {
        
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
    });
    
    // trigger the bx slider
    

    $(document).ready(function () {
        
        myBx.bxSlider({
            pager: false
            
        });
        
    });
    
    // smooth scroll
    
    $(".navbar ul li a").on("click", function (e) {
        
        e.preventDefault();
        
        $("html, body").animate({
        
            scrollTop: $("#" + $(this).data('scroll')).offset().top
           
        }, 1000);
        
    });
    
    //stat slider code
    
    (function sliderTesti() {
    
        $(".slider .active").each(function () {
            
            if (!$(this).is(":last-child")) {
             
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    
                    sliderTesti();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass("active");
                    
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    
                    sliderTesti();
                    
                });
            }
            
        });
        
    }());
    
// trigger the shuffle

    $("#container").mixItUp();
});


// adjust shuffle links

$(".shuffle li").on("click", function () {
    
    "use strict";
    $(this).addClass("selected").siblings().removeClass("selected");
    
});


// trigger nice scroll

$("html").niceScroll({

    cursorcolor: '#1abc9c',
    cursorwidth: '8px',
    cursorborder: '1px solid #1abc9c',
    zindex: '9999'
    
});

















