$(window).load(function(){
	var document_height = $(document).height();
	var header_wrap = $("div.header_wrap").height();
	var middle_container = $("div.middle_container").height();
	
	
	var footer_height = document_height - header_wrap - middle_container;
		$("footer.footer").css("height", footer_height + "px");
});

var timeout = 500,
	closetimer = 0;

//顯示hinter與否
var hover_in = function (theElement, item) {

	mcancelclosetime();

	var parent_li = theElement.parent();
	$('li:not(.on)').find('img[class=hinter]').hide();
	if(!$(parent_li).hasClass('on')){
		$(parent_li).find('img[class=hinter]').show();
	}
	
	
	$("nav.sub_nav").hide();
	$('.sub_nav_' + item + '_ul').siblings().hide();

	//將次選單顯示出來
	switch(item) {
	case 'wedding':
		$("nav.sub_nav").show();
		$('.sub_nav .hinter').css('margin-left', '-85px').show();
		$("ul.sub_nav_wedding_ul").show();
		break;

	case 'jewelry':
		$("nav.sub_nav").show();
		$('.sub_nav .hinter').css('margin-left', '-20px').show();
		$("ul.sub_nav_jewelry_ul").show();
		break;
	}
};

var hover_out = function (theElement, item) {

	var parent_li = theElement.parent();
	if(!$(parent_li).hasClass('on')){
		$(parent_li).find('img[class=hinter]').hide();
	}
	
	
	// 將次選單隱藏起來
	switch (item) {
	case 'wedding':
		$("nav.sub_nav").hide();
		$('.sub_nav .hinter').hide();
		$("ul.sub_nav_wedding_ul").hide();
		break;

	case 'jewelry':
		$("nav.sub_nav").hide();
		$('.sub_nav .hinter').hide();
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

	// set focus
	var a = $('.main_nav_ul > li.on').find('a');
	a.addClass(a.data('category') + "-hover");

});