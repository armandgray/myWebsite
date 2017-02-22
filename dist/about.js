window.onload = function() {
	$('#btn-back-to-top').hide();
    setupBackToTopScrollListener();
};

function setupBackToTopScrollListener() {
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {
	        $('#btn-back-to-top').show();
	    } else {
	        $('#btn-back-to-top').hide();	    	
	    }
	});
}