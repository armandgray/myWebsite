$("document").ready(function() {
	changeFooterDisplay(true);
	setupSendMessageListener();
});


function setupSendMessageListener() {
	$('.btn-send').click(function() {
		if (verifyInputsNonEmpty()) {
	    	$('#replyModal').modal('toggle');
			clearInputContents();
	    	displaySnackbar("Message Sent!");
		} else {
	    	// displaySnackbar("Please enter a name & message");
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