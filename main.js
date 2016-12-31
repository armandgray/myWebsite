window.onload = function() {
	whenWindowReady();
};

function whenWindowReady() {
	addListenersToIcons();
	changeFooterDisplay(true);
	isFooterMenuShowing = false;
}

function addListenersToIcons() {
	var iconsList = document.getElementsByClassName('icon');
	for (var i = 0; i < iconsList.length; i++) {
		var img = iconsList[i].childNodes[1];
		$(img).mouseover(function() {
			addAnimationTo(this, 'pulse');
		});
		$(img).mouseout(function() {
			$(this).removeClass('pulse');
		});	
	}
}

function addAnimationTo(element, anim) {
	if (!isAnimated(element) && !hasAnimation(anim, element)) {
		addClassTo(element, 'animated');
		addClassTo(element, anim);
	} else if (!isAnimated(element)) {
		addClassTo(element, 'animated');
	} else if (!hasAnimation(anim, element)) {
		addClassTo(element, anim);
	}
}

function isAnimated(element) {
	return element.className.indexOf('animated') >= 0;
}

function hasAnimation(anim, element) {
	return element.className.indexOf(anim) >= 0;
}

function addClassTo(element, className) {
	element.className += ' ' + className;
}