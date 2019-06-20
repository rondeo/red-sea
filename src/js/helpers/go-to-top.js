// ========== Scroll-to-top button ==========
	var top_show = 150,
		delay = 1000; 

	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) {
			$('.js-btn-up').fadeIn();
		} else {
			$('.js-btn-up').fadeOut();
		}
		
	});
	$('.js-btn-up').click(function () { 
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
	// ========= =========== =========== ===========