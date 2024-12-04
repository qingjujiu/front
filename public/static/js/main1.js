"user strict";
//>> Scroll Top Start <<//
var scrollPath = document.querySelector(".scroll-up path");
var pathLength = scrollPath.getTotalLength();
scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
scrollPath.style.strokeDashoffset = pathLength;
scrollPath.getBoundingClientRect();
scrollPath.style.transition = scrollPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
var updatescroll = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scroll = pathLength - (scroll * pathLength) / height;
    scrollPath.style.strokeDashoffset = scroll;
};
updatescroll();
$(window).scroll(updatescroll);
var offset = 50;
var duration = 950;
jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-up").addClass("active-scroll");
    } else {
        jQuery(".scroll-up").removeClass("active-scroll");
    }
});
jQuery(".scroll-up").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
        {
            scrollTop: 0,
        },
        duration
    );
    return false;
});
//>> Scroll Top End <<//

//>> Menu Fixed Components <<//
var fixed_top = $(".header-section");
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
        fixed_top.addClass("menu-fixed animated fadeInDown");
        fixed_top.removeClass("slideInUp");
        $("body").addClass("body-padding");
    } else {
        fixed_top.removeClass("menu-fixed fadeInDown");
        fixed_top.addClass("slideInUp");
        $("body").removeClass("body-padding");
    }
});
//>> Menu Fixed Components <<//

//>> Main Menu <<//
$(".header-bar").on("click", function (e) {
    $(".main-menu, .header-bar").toggleClass("active");
});
$(".main-menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(600);
    } else {
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.addClass("open");
        element.find("ul").slideDown(600);
        element.siblings("li").find("ul").slideUp(600);
        element.siblings("li").find("ul").slideUp(600);
    }
});
$(".scrollToTop").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        700
    );
    return false;
});
//>> Main Menu <<//


//>> Discount Section Slider Start <<//
var swiper = new Swiper(".pricing__wrapper", {
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    loop: "true",
    pagination: {
        el: ".dot",
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
});
//>> Discount Section Slider End <<//

// Counter up area start here ***
$(".count").counterUp({
    delay: 40,
    time: 4000,
});
// Counter up area end here ***

//Wow-animation-area-start-here
new WOW().init();
//Wow-animation-area-start-End

//custom-mouse-corsor-area-start-here
function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n,
            i = 0,
            o = !1;
        (window.onmousemove = function (s) {
            o ||
                (t.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
        }),
            $("body").on("mouseenter", "a, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function () {
                ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
    }
}

$(function () {
    mousecursor();
});

//custom-mouse-corsor-area-end-here

//search-area-start-here
var $searchWrap = $(".search-wrap");
var $navSearch = $(".nav-search");
var $searchClose = $("#search-close");

$(".search-trigger").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).addClass("open");
});

$(".search-close").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
}

$(document.body).on("click", function (e) {
    closeSearch();
});

$(".search-trigger, .main-search-input").on("click", function (e) {
    e.stopPropagation();
});
//search-area-end-here

//>> Discount Section Slider Start <<//
var swiper = new Swiper(".testi__wrapper", {
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    loop: "true",
    pagination: {
        el: ".dot",
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
});
//>> Discount Section Slider End <<//

//--Preloader--//
setTimeout(function() {
    $('.preloader__wrap').fadeToggle();
}, 1600);
//--Preloader--//


//contact form js
	$(function () {
		// Get the form.
		var form = $("#contact-form");
		// Get the messages div.
		var formMessages = $(".form-message");
		// Set up an event listener for the contact form.
		$(form).submit(function (e) {
			// Stop the browser from submitting the form.
			e.preventDefault();
			// Serialize the form data.
			var formData = $(form).serialize();
			// Submit the form using AJAX.
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					// Set the message text.
					$(formMessages).text(response);
					// Clear the form.
					$("#form input, #form textarea").val("");
				})
				.fail(function (data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					// Set the message text.
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	});