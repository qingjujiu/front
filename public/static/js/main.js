(function ($) {
	"use strict";


$(window).on('load', function () {
    $(".preloader").fadeOut();
	wowAnimation();
    aosAnimation();
});



/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}



/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


/*=============================================
	=    		Demo Active		      =
=============================================*/
var slider = new Swiper('.inner__slider-active', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        '1200': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        '992': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        '576': {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        '0': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },

    a11y: false,
});

var slider = new Swiper('.more__slider-active', {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        '1200': {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        '992': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        '576': {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        '0': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },

    a11y: false,
});


/*===========================================
=         Marquee Active         =
=============================================*/
if ($(".marquee_mode").length) {
    $('.marquee_mode').marquee({
        speed: 50,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}

/*=============================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);