window.onload = function() {
	whenWindowReady();
};

function whenWindowReady() {
	var rows = document.getElementsByClassName('row');
	if (rows[0].className.indexOf('animated') < 0 && rows[0].className.indexOf('pulse') < 0) {
		rows[0].className += ' animated pulse';
	} else if (rows[0].className.indexOf('animated') < 0 && rows[0].className.indexOf('pulse') >= 0) {
		rows[0].className += ' animated';
	} else if (rows[0].className.indexOf('animated') >= 0 && rows[0].className.indexOf('pulse') < 0) {
		rows[0].className += ' pulse';
	}
	// $('#row').addClass('animated pulse');
}