"use strict";
$(document).on('DOMContentLoaded', function() {

    // PRELOADER 
    var preloader = $('.loaderArea')
    preloader.delay(500).fadeOut('slow');
    // PRELOADER 
    // START MOBILE MENU 
    //open menu
    $('.mobile-menu__wrapper').on('touchstart  click', '.mobile-menu__content', function(event) {
        event.preventDefault();
        $(this).addClass('move-out');
        $('#mobile-menu__nav').addClass('is-visible');
    });
    //close menu
    $('.mobile-menu__close').on('click', function(event) {
        event.preventDefault();
        $('.mobile-menu__content').removeClass('move-out');
        $('#mobile-menu__nav').removeClass('is-visible');
    });

    // END MOBILE MENU 

    $('.classesSliderVol2').slick({
        adaptiveHeight: true,
        fade: true,
        prevArrow: '.custom-prev',
        nextArrow: '.custom-next'
    });

    $('.pricesSliderVol2').slick({
        adaptiveHeight: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        appendDots: '.custom-dots--prices-vol',
        fade: false,
        easing: "ease",
        infinite: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: true,
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            }

        }]

    });

    $('.storiesSlider').slick({
        adaptiveHeight: false,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        easing: 'ease',
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="stylized-dots__item">' +
                '<div class="stylized-dots__item-img">' +
                '<img src="' + thumb + '" alt="image">' +
                '</div>' +
                '<div class="stylized-dots__item-title">' +
                '<span>Aleksandr Dou</span>' +
                '</div>' +
                '</div>';
        },
        appendDots: '.stylized-dots-wrapper',
        prevArrow: '.custom-prev-stories',
        nextArrow: '.custom-next-stories'

    });

    $('.newsSliderVol2').slick({
        adaptiveHeight: true,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.custom-dots--news-vol',
        fade: true
    });

    // FILTER SLIDER 

    var flipContainer = $('.filterSlider'),
        flipItemContainer = flipContainer.find('.flipsterWrapper'),
        flipItem = flipContainer.find('.element-item');

    flipContainer.flipster({
        style: 'infinite-carousel',
        itemContainer: flipItemContainer,
        itemSelector: flipItem,
        loop: true,
        spacing: -0.5,
        scrollwheel: false,
        buttons: true,
        start: 4,
        onItemSwitch: function(currentItem, previousItem) {
            $(currentItem).bind('click', pfclickHandler);
            $(previousItem).unbind('click', pfclickHandler);
        }

    });

    flipContainer.flipster('jump', 0);

    // FILTER SLIDER 

    $(".filter-slick").on('click', function(event) {

        $(".filter-slick").removeClass('active');
        $(this).addClass('active').parent().removeClass('active');

    });

    function pfclickHandler() {
        $(this).toggleClass('active').siblings().removeClass('active');
    }

    pfCountingNumber();

});

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 70) {
//         $('.header').addClass('is-stuck');
//     } else if ($(this).scrollTop() < 70) {
//         $('.header').removeClass('is-stuck');
//     }
// });

$(window).scroll(function () {
    if ($(this).scrollTop() >1) {
        $('.header').addClass("is-stuck");
    }
    else {
        $('.header').removeClass("is-stuck");
    }
});

// COUNTER UP
function pfCountingNumber() {
    var calcItemsOne = $('.count-one');
    var calcItemsTwo = $('.count-two');
    var calcItemsThree = $('.count-three');

    var options = {  
        useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
    };

    var numAnimOne = new CountUp(calcItemsOne[0], 0, 40, 0, 9, options);
    numAnimOne.start();

    var numAnimTwo = new CountUp(calcItemsTwo[0], 0, 465, 0, 5, options);
    numAnimTwo.start();

    var numAnimThree = new CountUp(calcItemsThree[0], 0, 40, 0, 11, options);
    numAnimThree.start();

}
// COUNTER UP

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

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