$(document).ready(function() {
    var owl = $('#owl-carousel');
    owl.owlCarousel({
        loop: true
    });

    $('.news-left').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.news-right').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    function scrollShowImg(elmHover, elmShow) {
        $(elmHover).hover(function() {
            if (!$(elmShow).hasClass('animate')) {
                $(elmShow).addClass('animate')
            }
        })
    }
    scrollShowImg('.service', '.img-grid1');

    new WOW().init();
    var animateHTML = function() {
        var elems, windowHeight;
        var flag = false;
        var init = function() {
            elems = document.getElementsByClassName('total');
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
});