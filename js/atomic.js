$(document).ready(function($) {



	/* Dropdpown */
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


	function atomic (object) {
		return{
			timepicker:timepicker
		}
		function timepicker (selector) {
			return{
				setDate:setDate,
				getDate:getDate,
				clearDate:clearDate,
				setToday:setToday
			}
			function setDate (date) {
			
				$(selector).val(dateFormat(date));
			}
			function getDate (date) {
				var date = $(selector).val();
				return new Date(date);
			}
			function clearDate (date) {
				$(selector).val('');
			}
			function setToday() {
		
				$(selector).val(h+":"+m+" "+t);
			}
		}
		function setDate (object) {
			alert("accessed");
		}
	}

	function dateFormat(date, format){
		var day = date.getDate();
		var mo = date.getMonth()+1;
		var yr = date.getFullYear();
		var m = (date.getMinutes().length == 1) ? '0'+date.getMinutes() : date.getMinutes();
		var h = (date.getHours().length == 1) ? '0'+date.getHours() : date.getHours();
		var t = (h >= 12) ? " PM" : " AM";
		return mo+"/"+day+"/"+yr+" "+h+":"+m+t;
	}

		// var atomic = atomic();

		$('.atomic.timepicker').click(function (e) {
			e.preventDefault();
			$(this).after('<div class="timepicker-dropdown">Test Bitch</div>');
			// var date = new Date('1-30-2016 12:15 PM');
			// atomic().timepicker('#dp').setDate(date);




			// console.log(atomic().timepicker('#dp').getDate());

		});




	});