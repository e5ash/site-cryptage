$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var header = $('.header'),
			headerClass = 'header_scroll',
			counts = $('.counts');

	if (counts.length>0) {
		var countTop = $('.counts').offset().top;
	}

	$(window).on('load scroll', function() {
		var windowScroll = $(window).scrollTop();

		if (windowScroll > 10) {
			header.addClass(headerClass);
		} else {
			header.removeClass(headerClass);
		}
		if (counts.length>0) {
			if ($(window).scrollTop() >= countTop - 600) {
				if (!counts.hasClass('loaded')) {
					$('.counts__count').each(function(index, el) {
						var attr = $(this).attr('data-count');

						$(this).animateNumber({
							number: attr
						}, 5000)

					});
				}
				
				counts.addClass('loaded');
			}
		}
	});


	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('method-item');
	
	$('select').styler();

	new WOW().init();
});
