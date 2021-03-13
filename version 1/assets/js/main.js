window.onload = function() {
    $('#overlay').addClass("hidden");
}
$(document).ready(function() {
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
    };
    var wow = new WOW();
    wow.init();
    $('.wow').on('scrollSpy:exit', function() {
        $(this).css({
            'visibility': 'hidden',
            'animation-name': 'none'
        }).removeClass('animated');
        wow.addBox(this);
    }).scrollSpy();
    var animateHTML = function() {
        var elems, windowHeight, svg;
        var flag = false;
        var init = function() {
            elems = document.getElementsByClassName('total');
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
    // Video banner show Text
    var video = document.getElementById('myVideo');
    var source = document.querySelector('source');
    var textHeading = $('#text-heading').html();
    var i = 0;
    $('#text-heading').text('')

    function typeWriter() {
        if (i < textHeading.length) {
            if (textHeading.charAt(i) == '/') {
                document.getElementById("text-heading").innerHTML += "<br>"
            } else {
                document.getElementById("text-heading").innerHTML += textHeading.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 100);
        } else {
            $('.banner__right').addClass('active');
            $('.banner-slogan,#text-des').addClass('animate__animated wow animate__fadeIn');
        }
    }
    video.ontimeupdate = function() {
        if (video.ended) {
            typeWriter()
            source.src = "assets/video/video-banner-loop.mp4";
            video.loop = true;
            video.load();
            video.play();
        }
    };
    // end video banner
    // swipe slider history 
    var swiperZoom = new Swiper('.swipe-history', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        spaceBetween: 100,
        speed: 1500,
        navigation: {
            nextEl: '.his-next',
            prevEl: '.his-prev'
        },
        effect: 'coverflow',
        keyboard: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false,
        },
    }).activeIndex = 0;
    // carousel viettel service
    var owl_viettel = $('#carousel-viettel');
    owl_viettel.owlCarousel({
        items: 8,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    // carousel viettel service left to right
    var owl_viettel_ltr = $('#carousel-viettel-ltr');
    owl_viettel_ltr.owlCarousel({
        items: 8,
        loop: true,
        margin: 0,
        autoplay: true,
        slideBy: -1,
        smartSpeed: 1500,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

})