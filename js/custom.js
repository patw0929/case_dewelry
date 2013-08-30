var timeout = 500,
	closetimer = 0;

//顯示hinter與否
var hover_in = function (theElement, item) {

	mcancelclosetime();

	var parent_li = theElement.parent();
	$('li:not(.on)').find('img[class=hinter]').hide();
	$(parent_li).find('img[class=hinter]').show();
	
	$("nav.sub_nav").hide();
	$('.sub_nav_' + item + '_ul').siblings().hide();

	//將次選單顯示出來
	switch(item) {
	case 'wedding':
		$("nav.sub_nav").show();
		$("ul.sub_nav_wedding_ul").show();
		break;

	case 'jewelry':
		$("nav.sub_nav").show();
		$("ul.sub_nav_jewelry_ul").show();
		break;
	}
};

var hover_out = function (theElement, item) {

	var parent_li = theElement.parent();
	$(parent_li).find('img[class=hinter]').hide();
	
	// 將次選單隱藏起來
	switch (item) {
	case 'wedding':
		$("nav.sub_nav").hide();
		$("ul.sub_nav_wedding_ul").hide();
		break;

	case 'jewelry':
		$("nav.sub_nav").hide();
		$("ul.sub_nav_jewelry_ul").hide();
		break;
	}
};

// go close timer
var mclosetime = function (theElement, item) {
	closetimer = window.setTimeout(function () {
		hover_out(theElement, item);
	}, timeout);
};

// cancel close timer
var mcancelclosetime = function () {
	if (closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
};


$(function () {

	$('.main_nav_ul > li').on('mouseover', 'a', function () {

		var that = $(this);
		hover_in(that, that.data('category'));

	}).on('mouseout', 'a', function () {

		var that = $(this);
		mclosetime(that, that.data('category'));

	});

	$('.sub_nav ul').on('mouseover', function () {

		mcancelclosetime();

	}).on('mouseout', function () {

		var that = $(this),
			category = that.data('category');

		mclosetime($('.item_' + category + ' > a'), category);

	});

});

// 將footer的分享機制滑鼠移過換圖
function change_pic(theElement, pic_url){
	theElement.src = pic_url;
}
