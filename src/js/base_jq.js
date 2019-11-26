console.log($(window).scrollTop())

$(document).ready(function () {

    //Emersion arrow to up scrolling

    $(window).on("scroll", function () {

        if (($(window).scrollTop()) > ($('header').height())) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }

    });

    //Slow scrolling to an anchor 

    $("#scrollUp").click(function () {

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });



});