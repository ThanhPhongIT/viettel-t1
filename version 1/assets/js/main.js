window.onload = function() {
    $('#overlay').addClass("hidden");
}
$(document).ready(function() {
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
        var iowl = $('#imagesid');
        iowl.owlCarousel({
            loop: true,
            margin: 20
        })

        $('#img-next-button').click(function() {
            iowl.trigger('prev.owl.carousel');
        })
        $('#img-prev-button').click(function() {
                iowl.trigger('next.owl.carousel');
            })
            //video control
        const video_new = $('#video-new');
        const btn_video_new = $('.content-video-new .btn-play');
        const progressSlider = $('.progress-news');
        const progressFill = $('.progress-filled');
        const time_current = $('.time-current');
        time_current.html(`${neatTime(video_new[0].currentTime)} / ${neatTime(video_new[0].duration)}`)
        progressFill.width(0 + "%")
            //
        function playvideo() {
            video_new.trigger('play');
            $('.content-video-new').addClass('active');
        }
        //
        function pauseVideo() {
            video_new.trigger('pause');
            $('.content-video-new').removeClass('active');
        }
        //

        function neatTime(time) {
            // var hours = Math.floor((time % 86400)/3600)
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            seconds = seconds > 9 ? seconds : `0${seconds}`;
            return `${minutes}:${seconds}`;
        }
        //
        function updateProgress(e) {
            const currentTimeVideo = Math.floor(video_new[0].currentTime / video_new[0].duration * 100);
            progressFill.width(currentTimeVideo + "%");
            time_current.html(`${neatTime(video_new[0].currentTime)} / ${neatTime(video_new[0].duration)}`)
        }
        // 
        function setProgress(e) {
            const newTime = e.offsetX / progressSlider.outerWidth();
            progressFill.width(newTime * 100 + "%")
            video_new[0].currentTime = newTime * video_new[0].duration
        }
        //
        const volumeFill = $('.volume-filled');
        const volumeBtn = $('.volume-btn');

        function toggleMute() {
            if (video_new[0].volume) {
                lastVolume = video_new[0].volume;
                video_new[0].volume = 0;
                volumeBtn.addClass('muted');
                volumeFill.width(0)
            } else {
                video_new[0].volume = lastVolume;
                volumeBtn.removeClass('muted');
                volumeFill.width(lastVolume * 100 + "%")
            }
        }
        //
        var lastVolume = 1;
        const volumeSlider = $('.volume-slider')

        function changeVolume(e) {
            volumeBtn.removeClass('muted');
            let volume = e.offsetX / volumeSlider.outerWidth();
            volume < 0.1 ? volume = 0 : volume = volume;
            volumeFill.width(`${volume*100}%`)
            video_new[0].volume = volume;
            if (volume == 0) {
                volumeBtn.addClass('muted');
            }
            lastVolume = volume;
        }
        //play video
        video_new.on('canplay', updateProgress);
        //play video
        btn_video_new.on('click', playvideo)
            //video pause
        video_new.on('click', pauseVideo);
        //update progress
        video_new.on('timeupdate', updateProgress);
        //change progress
        progressSlider.on('click', setProgress);
        //togglevolume
        volumeBtn.on('click', toggleMute);
        volumeSlider.on('click', changeVolume);


        // Video banner show Text
        var video = document.getElementById('myVideo');
        var source = document.getElementById('source');
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




    })
    //