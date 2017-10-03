$(document).ready(function () {
    $(".button_scrolling").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({scrollTop: destination}, 700); //1100 - скорость
        return false;
    });
    $('.first_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1
    });
});