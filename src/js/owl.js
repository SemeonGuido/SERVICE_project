var owl = $('.owl-carousel');
owl.owlCarousel({
    animateOut: 'zoomOutDown',
    animateIn: 'zoomInDown',
    items: 1,
    nav: true,
    loop: true,
    touchDrag: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})