$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
	html = body.width(),
		timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	 // Preloader
	 setTimeout(function(){
	 	$('body').addClass('loaded');
	 }, 2000);


	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;

		// if($(this).hasClass('mobile__nav--link') && $('.js-mobile-nav').hasClass('is-opened')) {
		// 	$('.js-mobile-nav').removeClass('is-opened');
		// 	$('html').removeClass('is-fixed');
		// 	$('.js-open-mobile-menu-btn').removeClass('is-active');
		// }

		$('html, body').animate({scrollTop: top}, 'slow');
	});	

	// Copy year
	var d = new Date();
	var n = d.getFullYear();

	$('.js-year').html(n);

	// Product fancybox
	$('[data-fancybox="gallery"]').fancybox({
		loop:true,
		buttons: ['fullscreen', 'slideShow', 'close']
	});


	//Sliders
	

	var promoSlider = new Swiper('.js-promo-slider', {
		spaceBetween: 0,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		effect: 'fade',
		pagination: {
			el: '.js-promo-slider-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.js-promo-slider-btn-next',
			prevEl: '.js-promo-slider-btn-prev',
		},
		loop: true,
		// touchRatio: 0


	});

	var nextSlideTitle = $('.promo__slider .swiper-slide-active').next('.swiper-slide-next').find('.promo__slide--title').html();
	var prevSlideTitle = $('.promo__slider .swiper-slide-active').prev('.swiper-slide-prev').find('.promo__slide--title').html();

	$('.js-promo-slider-btn-next span').html(nextSlideTitle);
	$('.js-promo-slider-btn-prev span').html(prevSlideTitle);



	promoSlider.on('slideChange', function () {

		var activeSlide = $('.promo__slider .swiper-slide-active');

		var nextSlideTitle = activeSlide.next('.swiper-slide').next('.swiper-slide').find('.promo__slide--title').html();

		var prevSlideTitle = activeSlide.prev('.swiper-slide').prev('.swiper-slide').find('.promo__slide--title').html();


		$('.js-promo-slider-btn-next span').html(nextSlideTitle);
		$('.js-promo-slider-btn-prev span').html(prevSlideTitle);

		if(promoSlider.realIndex < 1) {
			$('.js-promo-slider-btn-next span').html(activeSlide.find('.promo__slide--title').html());
		}


	});

	// Services tab
	$('.js-tab-content').not(":first").hide();

	$(".js-tab-btn").on('click', function() {
		$(".js-tab-btn").removeClass("is-active").eq($(this).index()).addClass("is-active");
		$(".js-tab-content").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("is-active");


	
	

	// var gallerySlider = new Swiper('.js-gallery-slider', {
	// 	slidesPerView: 6,
	// 	spaceBetween: 0,
	// 	navigation: {
	// 		nextEl: '.js-gallery-slider-btn-next',
	// 		prevEl: '.js-gallery-slider-btn-prev',
	// 	},
	// 	scrollbar: {
	// 		el: '.js-gallery-slider-scrollbar',
	// 		hide: false,
	// 		draggable: true
	// 	},

	// 	breakpoints: {
	// 		1000: {
	// 			slidesPerView: 5
	// 		},
	// 		850: {
	// 			slidesPerView: 4
	// 		},
	// 		650: {
	// 			slidesPerView: 3
	// 		},
	// 		420: {
	// 			slidesPerView: 2
	// 		}

	// 	}
	// });

	var galleryThumbs = new Swiper('.js-slider-with-thumbs-thumbs', {
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	
	var galleryTop = new Swiper('.js-slider-with-thumbs', {
		spaceBetween: 0,
		slidesPerView: 1,
		scrollbar: {
			el: '.js-slider-with-thumbs-scroll',
			hide: false,
			draggable: true
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});


	// Selects
	$('.js-select').each(function() {

		$('.js-select').on('click', function(e) {
			$('.js-select').removeClass('is-active');

			if($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
			}

			$(this).addClass('is-active');
			
		});
	});
	

	$('.js-select-option').each(function(e) {
		var self = $(this);
		self.on('click', function(e) {

			e.stopPropagation();
			var select =  self.parents('.js-select');
			var input = select.find('input[type=hidden]');

			var option = self.attr('data-select-value');
			var iconSrc = self.css('background-image');

			var selectIcon = select.find('.select__ic i');
			var selectText = select.find('.select__text p');

			input.val(option);
			selectIcon.css('background-image', iconSrc);
			selectText.html(option);

			if(select.hasClass('is-active')) {
				select.removeClass('is-active');
			}


		});
	});
	
});
