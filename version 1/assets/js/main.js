new WOW().init();
var animateHTML = function() {
    var elems, windowHeight, svg;
    var flag = false;
    var init = function() {
        elems = document.getElementsByClassName('achievement');
        svg = document.getElementsByClassName('business');
        windowHeight = window.innerHeight;
        _addEventHandlers();
    };
    var _addEventHandlers = function() {

        window.addEventListener('scroll', _checkPosition);


    };
    var _checkPosition = function() {
        var pos = svg[0].getBoundingClientRect().top;
        if (pos - windowHeight <= 0) {
            $('.svg').addClass('item');
        }

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
    margin: 0,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 500,
    autoplayHoverPause: true
});
var owlTop = $('#owl-carousel-top');
owlTop.owlCarousel({
    items: 8,
    loop: true,
    margin: 0,
    autoplay: true,
    slideBy: -1,
    smartSpeed: 1000,
    autoplayTimeout: 500,
    autoplayHoverPause: true
});

function next() {
    owlTop.trigger('prev.owl.carousel');
}

let text = document.getElementsByClassName("ptext");
text.addEventListener("mouseenter", function(event) {

}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
text.addEventListener("mouseover", function(event) {
    setInterval(() => {
        next();
    }, 500);
}, false);



// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })