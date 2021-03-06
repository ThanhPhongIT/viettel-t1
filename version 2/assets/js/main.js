window.onload = function() {
    $('#overlay').addClass("hidden");
}
$(document).ready(function() {
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
    };
    // Init WOW.js and get instance
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

    function scrollShowImg(elmHover, elmShow) {
        $(elmHover).hover(function() {
            if (!$(elmShow).hasClass('animate')) {
                $(elmShow).addClass('animate')
            }
        })
    }
    scrollShowImg('.social', '.img-social');
    $('.carousel-history').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<img class="" src="./assets/images/left.svg" alt="">', '<img  src="./assets/images/right.svg" alt="">'],
        navClass: ['owl-prev customPrevBtn', 'owl-next customNextBtn'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.carousel-history-image').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        dots: false,
        itemClass: 'owl-item card',
        stageClass: 'owl-stage card-group',
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 1.2
            },
            1000: {
                items: 1.2
            }
        }

    })
    var owlImg = $('.carousel-history-image');
    $('.customNextBtn').click(function() {
        owlImg.trigger('next.owl.carousel', [300]);
        $('.card.active').first().siblings().removeClass('animation-next', 'animation-prev')
        $('.card.active').first().addClass('animation-next').removeClass('animation-prev')
    })
    $('.customPrevBtn').click(function() {
        owlImg.trigger('prev.owl.carousel', [300]);
        $('.card.active').first().siblings().removeClass('animation-next', 'animation-prev')
        $('.card.active').first().addClass('animation-prev').removeClass('animation-next')
    })

    //
    var video = document.getElementById('myVideo');
    var textHeading = $('#text-heading').html();
    console.log(textHeading);
    var i = 0;
    $('#text-heading').text('')

    function typeWriter() {
        if (i < textHeading.length) {
            if (textHeading.charAt(i) == '/') {
                console.log('br');
                document.getElementById("text-heading").innerHTML += "<br>"
            } else {
                document.getElementById("text-heading").innerHTML += textHeading.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 700);
        } else {
            $('.banner__right').addClass('active');
            $('.slogan,#text-des').addClass('animate__animated wow animate__fadeIn');
        }
    }
    video.ontimeupdate = function() {
        if (video.currentTime >= video.duration - 2) {
            typeWriter()
            return;
        }
    };
});