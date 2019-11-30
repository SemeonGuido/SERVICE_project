var headerChilds = document.querySelector('#header');
headerChilds.style.visibility = 'hidden';


window.onload = function () {

    var nav = document.querySelectorAll('#header .page');
    var contacts = document.querySelectorAll('#header .contacts li');
    var logo = document.querySelector('#logo');
    var logoImg = document.querySelector('#logoImg');
    var dasl = document.querySelector('.da-slider');
    var wrapper = document.querySelector('#wrapper');
    var headerHeight = document.querySelector('#header').offsetHeight
    var headerMin = document.querySelector('.header-min');
    var hamburger = document.querySelector('.hamburger');
    var headerMobile = document.querySelector('.header-mobile');


    console.log(document.querySelector('body'));

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

    // Show little header

    function showHide() {
        if (window.pageYOffset >= headerHeight) {
            headerMin.classList.remove('slideUp', 'animated');
            headerMin.style.display = 'block';
            headerMin.classList.add('slideUpReturn', 'animated');
        } else {
            headerMin.classList.remove('slideUpReturn', 'animated');
            headerMin.classList.add('slideUp', 'animated');
        };
    }

    showHide();

    window.addEventListener('scroll', function () {
        showHide();
    })

    // Hamburger menu

    hamburger.addEventListener('click', function () {
        this.classList.toggle("is-active");
        headerMobile.classList.toggle('header-mobile-slide');
        document.querySelector('.body').classList.toggle('bodySlide');
        document.body.classList.toggle('overflow');
        document.querySelector('.cover').classList.toggle('none');
    })



}