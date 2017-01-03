var iconsTextList = [
	document.getElementById('p-about'),
	document.getElementById('p-res'),
	document.getElementById('p-contact'),
	document.getElementById('p-gh'),
	document.getElementById('p-in')
];
var anims = document.getElementsByClassName('wave-container');

window.onload = function() {
	checkForJQuery();
	hideImageAnims();
	addListenersToIcons();
	changeFooterDisplay(true);
	isFooterMenuShowing = false;
};

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

function hideImageAnims() {
	for (var i = 0; i < iconsTextList.length; i++) {
		$(iconsTextList[i]).hide();
	}
	for (var i = 0; i < anims.length; i++) {
		$(anims[i]).hide();
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

var isShowing = false;
function toggleTextAnimAt(iconIndex) {
	var wavesGh = document.getElementById('waves-gh');
	var wavesIn = document.getElementById('waves-in');
	if (isShowing) {
		if (iconIndex <= 2) {
			$(anims[iconIndex]).hide();
		} else if (iconIndex == 3) {
			$(wavesGh).hide();
		} else if (iconIndex == 4) {
			$(wavesIn).hide();
		}
		$(iconsTextList[iconIndex]).hide();
		isShowing = false;
	} else {
		$(iconsTextList[iconIndex]).show();
		if (iconIndex <= 2) {
			$(anims[iconIndex]).show();
		} else if (iconIndex == 3) {
			$(wavesGh).show();
		} else if (iconIndex == 4) {
			$(wavesIn).show();
		}
		isShowing = true;
	}
}

function getImgIndex(imgElement, imgList) {
	for (var i = 0; i < imgList.length; i++) {
		if (imgElement == imgList[i] && i <= 2) {
			return i;
		} else if (imgElement == imgList[i] && i > 2) {
			return i - 1;
		}
	}
}