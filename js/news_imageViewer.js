$(function () {

    // click thumb
	$('.thumbs').on('click', 'a', function (e) {

		var that = $(this);
		e.preventDefault();

		$('.view > img').fadeOut(function () {
			$(this).attr('src', that.attr('href'))
		}).fadeIn();
		$('.focus').remove();
		that.parent().append('<div class="focus"></div>');

	});

    // focus line
    $('.thumbs a').on('mouseenter', function () {

        var focusCounter = $(this).parent().find(".focus").length;
        if (focusCounter === 0) {
            $(this).parent().append('<div class="focus"></div>');        
        }

    }).on('mouseout', function () {

        var focusCounter = $('.thumbs').find(".focus").length;
        if (focusCounter > 1) {
            $(this).parent().find('.focus').remove();        
        }

    });

});