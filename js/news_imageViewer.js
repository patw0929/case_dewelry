$(function () {

	$('.thumbs').on('click', 'a', function (e) {

		var that = $(this);
		e.preventDefault();

		$('.view > img').attr('src', that.attr('href'));
		$('.focus').remove();
		that.parent().append('<div class="focus"></div>');

	});

});