$("document").ready(function() {
	changeFooterDisplay(true);
	setupSendMessageListener();
});


function setupSendMessageListener() {
	$('.btn-send').click(function() {
	    displaySentSnackbar();
	});
}

function displaySentSnackbar() {
	$('#snackbar').addClass('show');
    setTimeout(function(){ 
	    $('#snackbar').removeClass('show');
    }, 3000);
}