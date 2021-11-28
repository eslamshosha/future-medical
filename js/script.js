  $(document).ready(function() {
	new WOW().init();

	//phone size menu onclick
    if ($(window).width() <= 1199) {
         $('#menu-id').click(function (e) {
			e.preventDefault()
            $(".overlay-box").fadeIn(300);
            $("nav").addClass("reset-left");
            $("body").addClass("overflow");
        });
        $(".nav-head .close-btn, .overlay-box").click(function () {
        	$(".overlay-box").fadeOut(300);
            $("nav").removeClass("reset-left");
            $("body").removeClass("overflow");
        });

        $(".dropdown .menu-link").addClass("chevron-down");
    }

	   //dropdown inside menu
	   $('.lang-word, .cat-down, .menu-link').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
    
     ///////// ** product** /////////
     ///////// ** product one** /////////
     var specialss = new Swiper('.product-one .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-one .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-one .swiper-btn-next',
            prevEl: '.product-one .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });
    var specials = new Swiper('.product-two .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-two .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-two .swiper-btn-next',
            prevEl: '.product-two .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });

	////////////////add swiper carsoul to class feature////////////////////////////////

    if ( $(window).width() < 1199 ) {
        $('.features .col-md-3.col-xs-12').contents().unwrap();
		$('.features .row').contents().unwrap();
        $(".feature-section .features").addClass("swiper-container");
        $(".feature-section .features-div").addClass("swiper-wrapper");
        $(".feature-section .features-box").addClass("swiper-slide");
        var blog = new Swiper('.feature-section .swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.feature-section .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
    ////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})

});