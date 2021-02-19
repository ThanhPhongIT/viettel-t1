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
    margin: 0,
    autoplay: true,
    smartSpeed: 250,
    autoplayTimeout: 500,
    autoplayHoverPause: true
});
var owlTop = $('#owl-carousel-top');
owlTop.owlCarousel({
    items: 8,
    loop: true,
    margin: 0,
    autoplay: false
});
console.log(owlTop);

function next() {
    owlTop.trigger('prev.owl.carousel');
}
var co = true;
if (co) {
    setInterval(() => {
        next();
    }, 500);
}
$(".ptext").hover(function() {
    co = false;
    console.log(co);

});



// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })