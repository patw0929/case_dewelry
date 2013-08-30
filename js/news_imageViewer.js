$(function () {

	$('.thumbs').on('click', 'a', function (e) {

		var that = $(this);
		e.preventDefault();

		$('.view > img').fadeOut(function () {
			$(this).attr('src', that.attr('href'))
		}).fadeIn();
		$('.focus').remove();
		that.parent().append('<div class="focus"></div>');

	});

});