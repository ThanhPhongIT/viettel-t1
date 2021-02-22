window.onload = function() {
    $('#overlay').addClass("hidden");
    $('#overlay').addClass("hidden");
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
    scrollShowImg('.service', '.contain1');
    scrollShowImg('.service', '.contain4');
    scrollShowImg('.service', '.contain3');
    scrollShowImg('.service', '.contain2');
    scrollShowImg('.tech', '.img-tech-two');
    scrollShowImg('.tech', '.img-tech-one');
    scrollShowImg('.mission', '.mission-img');

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
                        duration: 4000,
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
};