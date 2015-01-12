$(document).ready(function($) {

	$('.atomic.dropdown').click(function(event) {
		var list = $(this).find('ul');
		$(this).addClass('atomic-loaded');
		$(this).toggleClass('open');
		list.css('top') == '0px' ? list.css('top',$(this).height()+'px') : list.css('top','0px');
		if($(this).find('span').length == 0){
			$(this).prepend('<span>'+$(this).data('placeholder')+'<span>');
		}
		if ($(this).hasClass('open')) {
			if ( $(this).find('active').length > 0)
			{
				$(this).find('span').text( $(this).data('placeholder') );
			}
			else
			{
				$(this).find('span').text( $(this).data($(this).find('active').text()) );
			}
		}
	});
	
	$('.atomic.dropdown li').click(function(event) {
		event.stopPropagation();
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		var dropdown = $(this).parent().parent();
		var list = $(this).parent();
		dropdown.find('span').text($(this).text());
		$(this).parent().parent().click();
	});
});