$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
    });
    
    $(window).scroll(function () { 
        if (window.pageYOffset >= 200) {
            $('nav').addClass('thunho');
        } else {
            $('nav').removeClass('thunho');
        }
    });

    $('.menu1').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi2').offset().top - 72
        },1000);
    });
    $('.menu2').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi3').offset().top - 72
        },1000);
    });
    $('.menu3').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi4').offset().top - 72
        },1000);
    });
    $(window).scroll(function () { 
        if (window.pageYOffset >= ($('.khoi4').offset().top -72)) {
            $('.menu').removeClass('active');
            $('.menu3').addClass('active');
            
        } else if (window.pageYOffset >= ($('.khoi3')).offset().top -72) {
            $('.menu').removeClass('active');
            $('.menu2').addClass('active');
        } else if (window.pageYOffset >= ($('.khoi2')).offset().top -72) {
            $('.menu').removeClass('active');
            $('.menu1').addClass('active');
        } else {
            $('.menu').removeClass('active');
        }
            
        
    });
});