new WOW().init();
var animateHTML = function() {
    var elems, windowHeight;
    var flag = false;
    var init = function() {
        elems = document.getElementsByClassName('achievement');
        windowHeight = window.innerHeight;
        _addEventHandlers();
    };
    var _addEventHandlers = function() {

        window.addEventListener('scroll', _checkPosition);


    };
    var _checkPosition = function() {

        if (!flag) {
            var posFromTop = elems[0].getBoundingClientRect().top;
        } else {
            posFromTop = 100000000000000;
        }
        if (posFromTop - windowHeight <= 0) {
            $('.total').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            flag = true;
        }

    };
    return {
        init: init,
    };
};

animateHTML().init();

var owl = $('#owl-carousel');
owl.owlCarousel({
    items: 8,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 500,
    autoplayHoverPause: true
});
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })