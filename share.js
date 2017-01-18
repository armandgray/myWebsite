$("document").ready(function() {
	changeFooterDisplay(true);
	setupSendMessageListener();
});


function setupSendMessageListener() {
	$('.btn-send').click(function() {
		clearInputContents();
	    displaySentSnackbar();
	});
}

function clearInputContents() {
	$('#inputSenderName').val("");
	$('#inputMessage').val("");
}


function displaySentSnackbar() {
	$('#snackbar').addClass('show');
    setTimeout(function(){ 
	    $('#snackbar').removeClass('show');
    }, 3000);
}