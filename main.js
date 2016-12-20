window.onload = function() {
	whenWindowReady();
};

function whenWindowReady() {
	var rows = document.getElementsByClassName('row');
	for (var i = 0; i < rows.length; i++) {
		addAnimationTo(rows[i], 'bounce');
	}
}

function addAnimationTo(element, anim) {
	if (element.className.indexOf('animated') < 0 && element.className.indexOf(anim) < 0) {
		element.className += ' animated ' + anim;
	} else if (element.className.indexOf('animated') < 0 && element.className.indexOf(anim) >= 0) {
		element.className += ' animated';
	} else if (element.className.indexOf('animated') >= 0 && element.className.indexOf(anim) < 0) {
		element.className += ' ' + anim;
	}
}