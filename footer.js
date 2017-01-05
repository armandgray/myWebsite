var isFooterMenuShowing = true;

$("document").ready(function() {
	setupMoreBtnClickListener();
});

function setupMoreBtnClickListener() {
	$("#more-less-btn").click(function() {
		changeFooterDisplay(isFooterMenuShowing);
		isFooterMenuShowing = !isFooterMenuShowing;
	});
}

function changeFooterDisplay(isFooterMenuShowing) {
		if (isFooterMenuShowing) {
			$("#footer-container").hide();
			$("#footer-bottom-text-container").hide();
			$("#more-less-btn").html("More");
		} else {
			$("#footer-container").show();
			$("#footer-bottom-text-container").show();
			$("#more-less-btn").html("Less");
		}
}