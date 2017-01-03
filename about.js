window.onload = function() {
	$('#btn-back-to-top').hide();
    setupBackToTopScrollListener();
    setupHeaderScrollListener();
};

function setupHeaderScrollListener() {
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 40) {
	        
	    } else {

	    }
	});
}

function setupBackToTopScrollListener() {
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {
	        $('#btn-back-to-top').show();
	    } else {
	        $('#btn-back-to-top').hide();	    	
	    }
	});
}