$(document).ready(function() {
	setupItemsNavListener();
});

function setupItemsNavListener() {
    var itemSelectors = $('.items-nav button');
    var items = $('.item-container');

    var favorites = $('.favorites');
    var assets = $('.assets');
    var projects = $('.projects');
    var android = $('.android');

    alert(itemSelectors[4].innerHTML);

    $(itemSelectors[0]).click(function() {
    	for (var i = 0; i < items.length; i++) {
    		$(items[i]).show();
    	}
    });

    $(itemSelectors[1]).click(function() {
    	for (var i = 0; i < favorites.length; i++) {
    		$(favorites[i]).hide();
    	}
    });

}
