// ========= R e m o v e   c l a s s e s ===========
$('.js-input-validate').on('focus',function() {
	if($(this).hasClass('validate')) {
		$(this).removeClass('validate');
	}
});
// ========= =========== =========== ===========

// ========= Ajax form ===========

$('.form').submit(function(e) {
	e.preventDefault();

	var that = $(this);
		inputs = that.find('.js-input-validate'),
		flag = true;

	// Validate
	$(inputs).each(function() {
		if(!$(this).val() || $(this).val() == "") {
			$(this).addClass('validate');
			$(this).next().removeClass('hidden');
			flag = false;
		}
	});

	if(!flag) {return false;}

	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: that.serialize()
	}).done(function() {
		// add active clases
		setTimeout(function() {
			// remove active classes
			that.trigger("reset");
		}, 2000);
	});

});
// ========= =========== =========== ===========