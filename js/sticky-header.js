$(window).scroll(function () {
    if ($(this).scrollTop() >1) {
        $('.header').addClass("is-stuck");
    }
    else {
        $('.header').removeClass("is-stuck");
    }
});
// PRELOADER
var preloader = $('.loaderArea')
preloader.delay(500).fadeOut('slow');
// PRELOADER