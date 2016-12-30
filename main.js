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
		img.addEventListener('mouseover', addAnimationTo(img, 'bounce'), false);
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