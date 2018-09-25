$(function() {

    
    $('.menu-mobile').on('click', function() {

        $(this).find('ul').slideToggle();

    });

    $('nav a').on('click', function () {

        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({
            'scrollTop': offSetTop
        });

    });
    
});