new WOW().init();

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

function scrollShowImg(elmHover, elmShow) {
    $(elmHover).hover(function() {
        if (!$(elmShow).hasClass('animate')) {
            $(elmShow).addClass('animate')
        }
    })
}
scrollShowImg('.social', '.img-social');
$('.carousel-history').owlCarousel({
    loop: false,
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
    loop: false,
    nav: false,
    margin: 10,
    dots: false,
    itemClass: 'owl-item card',
    stageClass: 'owl-stage card-group',
    slideSpeed: 1000,
    // animateOut: "slideOutDown",
    // animateIn: "slideInDown",

    responsive: {
        0: {
            items: 1.3
        },
        600: {
            items: 1.3
        },
        1000: {
            items: 1.3
        }
    }
})
var owlImg = $('.carousel-history-image');

// owlImg.on('changed.owl.carousel', function(event) {
//     var total = $('.carousel-history-image .owl-stage .owl-item.active').length;

//     $('.carousel-history-image .owl-stage .owl-item').removeClass('animation');

//     $('.carousel-history-image .owl-stage .owl-item.active').each(function(index) {
//         if (index === 0) {
//             // this is the first one
//             $(this).addClass('animation');
//         }
//         // if (index === total - 1 && total > 1) {
//         //     // this is the last one
//         //     $(this).addClass('animation');
//         // }
//     });
// });
var owl = $('.carousel-history');

$('.customNextBtn').click(function() {
    owlImg.trigger('next.owl.carousel', [300]);
    $('.carousel-history-image .owl-item.active:first-child').addClass('animation');
})
$('.customPrevBtn').click(function() {

    owlImg.trigger('prev.owl.carousel', [300]);
})