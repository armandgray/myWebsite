var backgroundColor = $('.container-fluid').css('background-color');

$(window).load(function() {
	$('.gallery-images').css('background-color', backgroundColor);
	$('#needle').addClass('bounce');

	setupHeaderColorScrollListener();
	setupSliderAnim();
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

function setupSliderAnim() {
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 20) {
			$('.slider').hide();
			$('#needle').removeClass('bounce');
	    } else {
			$('.slider').show();
			$('#needle').addClass('bounce');
	    }
	});
}