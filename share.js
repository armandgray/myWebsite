$("document").ready(function() {
	changeFooterDisplay(true);
	setupSendMessageListener();
});


function setupSendMessageListener() {
	$('#replyModal .modal-footer p').hide();

	$('.btn-send').click(function() {
		if (verifyInputsNonEmpty()) {
			$('#replyModal .modal-footer p').hide();
	    	$('#replyModal').modal('toggle');
			clearInputContents();
	    	displaySnackbar("Message Sent!");
		} else {
			$('#replyModal .modal-footer p').show();
		}
	});
}

function verifyInputsNonEmpty() {
	if ($('#inputSenderName').val() == "" || $('#inputMessage').val() == "") {
		return false;
	}
	return true;
}

function clearInputContents() {
	$('#inputSenderName').val("");
	$('#inputMessage').val("");
}


function displaySnackbar(message) {
	$('#snackbar').text(message);
	$('#snackbar').addClass('show');
    setTimeout(function(){ 
	    $('#snackbar').removeClass('show');
    }, 3000);
}