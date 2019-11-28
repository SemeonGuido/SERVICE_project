window.onload = function () {

    var nav = document.querySelectorAll('.current_p');
    var contacts = document.querySelectorAll('.contacts li');
    var logo = document.querySelector('.logo');
    var logoImg = document.querySelector('.logoImg');
    var dasl = document.querySelector('.da-slider');
    var wrapper = document.querySelector('#wrapper');

    console.log();

    function show(elem, animate) {
        // elem.classList.add('tinRightIn', 'magictime');
        elem.classList.add('visible', animate, 'animated');
    }

    show(logo, 'bounceInRight');

    for (var i = 0; i < nav.length; i++) {
        var element = nav[i];
        setTimeout(
            show, i * 100, nav[i], 'bounceInRight');
    }

    for (var i = 0; i < contacts.length; i++) {
        var element = contacts[i];
        setTimeout(
            show, i * 100, contacts[i], 'bounceInRight');
    }

    show(logoImg, 'vanishIn');

    show(dasl, 'bounceInUp');

    setTimeout(
        show, 100, wrapper, 'bounceInUp');


}