var backgroundColor = $('.container-fluid').css('background-color');

$(window).load(function() {
	setupHeaderColorScrollListener();
	$('.gallery-images').css('background-color', backgroundColor);
});

function setupHeaderColorScrollListener() {
	$('.header').css('background-color', 'rgba(0, 0, 0, 0)');

	$(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {
			$('.header').css('background-color', backgroundColor);
	    } else {
			$('.header').css('background-color', 'rgba(0, 0, 0, 0)');
	    }
	});
}