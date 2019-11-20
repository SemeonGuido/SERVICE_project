console.log('Hello!')

$(document).ready(function () {

    //Emersion arrow to up scrolling

    $(window).on("scroll", function () {

        if ($(window).scrollTop()) {
            $('#scrollUp').removeClass('scrollUp_off');
        } else {
            $('#scrollUp').addClass('scrollUp_off');
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