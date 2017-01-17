var isFooterMenuShowing = true;

$("document").ready(function() {
	setupMoreBtnClickListener();
	disableGettingStartedLinks();
});

function setupMoreBtnClickListener() {
	$("#more-less-btn").click(function() {
		changeFooterDisplay(isFooterMenuShowing);
		isFooterMenuShowing = !isFooterMenuShowing;
	});
}

function changeFooterDisplay(isFooterMenuShowing) {
	$("#more-less-btn").click(function() {
		if (isFooterMenuShowing) {
			$("#footer-container").hide();
			$("#footer-bottom-text-container").hide();
			$("#more-less-btn").html("More");
			isFooterMenuShowing = false;
		} else {
			$("#footer-container").show();
			$("#footer-bottom-text-container").show();
			$("#more-less-btn").html("Less");
			isFooterMenuShowing = true;
		}
	});
}

function disableGettingStartedLinks() {
	$('.footer .starting a').click(function() { 
		return false; 
	});
}

