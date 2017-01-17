var items;

$(document).ready(function() {
	setupItemsNavListener();
});

function setupItemsNavListener() {
    items = $('.item-container');
    var itemSelectors = $('.items-nav button');

    var favorites = $('.favorites');
    var assets = $('.assets');
    var projects = $('.projects');
    var android = $('.android');

    $(itemSelectors[0]).click(function() {
    	showAllItems();
    });

    $(itemSelectors[1]).click(function() {
    	onlyShow(favorites);
    });
}

function showAllItems() {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).show();
	}
}

function onlyShow(itemsList) {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).hide();
	}
	for (var i = 0; i < itemsList.length; i++) {
		$(itemsList[i]).show();
	}
}
