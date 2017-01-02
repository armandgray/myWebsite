var iconsTextList = [
	document.getElementById('p-about'),
	document.getElementById('p-res'),
	document.getElementById('p-contact'),
	document.getElementById('p-gh'),
	document.getElementById('p-in')
];

window.onload = function() {
	checkForJQuery();
	hideImageText();
	addListenersToIcons();
	changeFooterDisplay(true);
	isFooterMenuShowing = false;
};

function hideImageText() {
	for (var i = 0; i < iconsTextList.length; i++) {
		$(iconsTextList[i]).hide();
	}
}

function checkForJQuery() {
	if (typeof(jQuery) === 'undefined') {
	    var jQuery;
	    if (typeof(require) === 'function') {
		    jQuery = $ = require('jquery');
	    } else {
		    jQuery = $;
	    }
    }
}

function addListenersToIcons() {
	var iconsList = document.getElementsByClassName('icon');
	var imgList = [];
	for (var i = 0; i < iconsList.length; i++) {
		var img = iconsList[i].childNodes[1];
		imgList[i] = img;

		var text = iconsList[i].childNodes[2];
		$(img).mouseover(function() {
			var iconIndex = i;
			addAnimationTo(this, 'pulse');
			toggleTextAnimAt(getImgIndex(this, imgList));
		});
		$(img).mouseout(function() {
			$(this).removeClass('pulse');
			toggleTextAnimAt(getImgIndex(this, imgList));
		});	
	}
}

function addAnimationTo(element, anim) {
	if (!isAnimated(element) && !hasAnimation(anim, element)) {
		appendClassNameTo(element, 'animated');
		appendClassNameTo(element, anim);
	} else if (!isAnimated(element)) {
		appendClassNameTo(element, 'animated');
	} else if (!hasAnimation(anim, element)) {
		appendClassNameTo(element, anim);
	}
}

function isAnimated(element) {
	return element.className.indexOf('animated') >= 0;
}

function hasAnimation(anim, element) {
	return element.className.indexOf(anim) >= 0;
}

function appendClassNameTo(element, className) {
	element.className += ' ' + className;
}

function toggleTextAnimAt(iconIndex) {
	if (isShowing) {
		$(iconsTextList[iconIndex]).hide();
		isShowing = false;
	} else {
		$(iconsTextList[iconIndex]).show();
		isShowing = true;
	}
}

function getImgIndex(imgElement, imgList) {
	for (var i = 0; i < imgList.length; i++) {
		if (imgElement == imgList[i]) {
			return i;
		} 
	}
}