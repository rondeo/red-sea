// ========= Equal height ===========
var maxheight = 0;

$(".selector").each(function() {
	if($(this).height() > maxheight) { maxheight = $(this).height(); }
});

$(".selector").height(maxheight);
// ========= =========== =========== ===========