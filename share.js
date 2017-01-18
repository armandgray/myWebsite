$("document").ready(function() {
	changeFooterDisplay(true);
	setupSendMessageListener();
});


function setupSendMessageListener() {
	$('.btn-send').click(function() {
		alert('message sent');
	});
}
