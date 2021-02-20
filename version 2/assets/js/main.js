new WOW().init();
<<<<<<< HEAD

var animateHTML = function() {
    var elems, windowHeight;
    var flag = false;
    var init = function() {
        elems = document.getElementsByClassName('thanhtuu');
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
=======
$(document).ready(function() {
    $('.banner__carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
    })
    var selector = $('.banner__carousel');

    $('.my-next-button').click(function() {
        selector.trigger('next.owl.carousel');
    });

    $('.my-prev-button').click(function() {
        selector.trigger('prev.owl.carousel');
    });
    var animateHTML = function() {
        var elems, windowHeight;
        var flag = false;
        var init = function() {
            elems = document.getElementsByClassName('thanhtuu');
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
                $('.number').each(function() {
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
})
>>>>>>> 573677c962a8e9bef194c704ae9a31f64416be21
