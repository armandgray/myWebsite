var items;

var animDuration = 500;

$(document).ready(function() {
	setupItemsNavListener();
});

function setupItemsNavListener() {
    items = $('.item-container');
    var favorites = $('.favorites');
    var assets = $('.assets');
    var projects = $('.projects');
    var gettingStartedItems = $('.getting-started');

    var itemSelectors = $('.items-nav button');

    $(itemSelectors[0]).click(function() {
    	showAllItems();
    });

    $(itemSelectors[1]).click(function() {
    	onlyShow(favorites);
    });

    $(itemSelectors[2]).click(function() {
    	onlyShow(assets);
    });

    $(itemSelectors[3]).click(function() {
    	onlyShow(projects);
    });

    $(itemSelectors[4]).click(function() {
    	onlyShow(gettingStartedItems);
    });
}

function showAllItems() {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).show(animDuration);
	}
}

function onlyShow(itemsList) {
	for (var i = 0; i < items.length; i++) {
		$(items[i]).hide(animDuration);
	}
	for (var i = 0; i < itemsList.length; i++) {
		$(itemsList[i]).show(animDuration);
	}
}
