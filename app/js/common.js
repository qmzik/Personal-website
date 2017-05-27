$(function () {
    var $ = require("jquery");
    /*
     Header
     */


    // Headhesive plugin
    var options = {
        offset: '#my-content'
    };

    var Headhesive = require('headhesive');

    var header = new Headhesive('.navigation', options);

    //WEBSITE PRELOADER
    document.body.onload = function () {

        setTimeout(function () {
            var preloader = document.getElementById('page-preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000);
    };

    var hamburger = $(".hamburger");
    var menu = $('.menu');
    hamburger.on("click", function() {
        hamburger.toggleClass("is-active");
        menu.toggleClass("active");
    });
    $(window).resize(function () {
        if($('.navigation').width() >= 768 && menu.hasClass('active')) {
            hamburger.removeClass("is-active");
            menu.removeClass('active');
        }
    });


    // PARALLAX EFFECT
    $(window).scroll(function () {

        var st = $(this).scrollTop();

        $('.intro-content').css({
            'transform': 'translate(0%, ' + st / 10 + '%)'
        });
    });
});
