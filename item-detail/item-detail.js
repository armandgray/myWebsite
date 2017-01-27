var backgroundColor = $('.container-fluid').css('background-color');

if (initialHeaderColor == null || initialHeaderColor == undefined) {
	var initialHeaderColor = 'rgba(0, 0, 0, 0)';
}

if (displayHeaderColorHeight == null || displayHeaderColorHeight == undefined) {
	var displayHeaderColorHeight = 200;
}


$(window).load(function() {
	$('.gallery-images').css('background-color', backgroundColor);
	startNeedleAnimation();

	setupHeaderColorScrollListener();
	setupSliderAnim();
});

function setupHeaderColorScrollListener() {
	$('.header').css('background-color', initialHeaderColor);

	$(window).scroll(function() {
	    if ($(this).scrollTop() > displayHeaderColorHeight) {
			$('.header').css('background-color', backgroundColor);
	    } else {
			$('.header').css('background-color', initialHeaderColor);
	    }
	});
}

function setupSliderAnim() {
	var scrollThreshold = 20;
	if (window.innerWidth < 600) {
		scrollThreshold = 5;
	}
    if ($(this).scrollTop() > scrollThreshold) {
    	$('.slider').hide();
		$('#needle').removeClass('bounce');
	}
	$(window).scroll(function() {
	    if ($(this).scrollTop() > scrollThreshold) {
			$('.slider').hide();
	    } else {
			$('.slider').show();
	    }
	});
}

function startNeedleAnimation() {
	setInterval(function(){ 
		$('#needle').toggleClass('bounce');
	}, 2000);
}