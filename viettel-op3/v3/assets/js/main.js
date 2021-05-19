new WOW().init();
$(document).ready(function () {
    $('.banner__carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
    })
    var selector = $('.banner__carousel');

    $('.my-next-button').click(function () {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function () {
        selector.trigger('prev.owl.carousel');
    });
})
