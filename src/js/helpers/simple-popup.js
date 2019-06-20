// Popup
$('.js-show-popup-btn').on('click',function() {
	$('.js-overlay').fadeIn(300);
	$('.js-popup').fadeIn(300);
});

$('.js-overlay').on('click',function() {
	$(this).fadeOut(300);
	$('.js-popup').fadeOut(300);
});

$('.js-close-popup-btn').on('click',function() {
	$(this).parent().fadeOut(300);
	$('.js-overlay').fadeOut(300);
});
// ========= =========== =========== ===========