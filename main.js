window.onload = function() {
	whenWindowReady();
};

function whenWindowReady() {
	checkForJQuery();
	addListenersToIcons();
	changeFooterDisplay(true);
	isFooterMenuShowing = false;
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