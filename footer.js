$("document").ready(function() {
	setupMoreBtnClickListener();
});

function setupMoreBtnClickListener() {
	var isFooterMenuShowing = true;
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
