$(function () {

	// Удаляет плейсхолдер при фокусе поля формы
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});

	//Отметить уведомления прочитаными
	$('.b-header-menu__notice-icon').mouseenter(function(){
		var counter = $(this).find('span');
		$(counter).addClass('hidden');
	});

	//Открыть сайдбар
	$('.b-sidebar__toggle').click(function(){
		$('.b-sidebar').toggleClass('open');
	});

	//Закрыть алерт
	$('.b-alert__close').click(function(){
		var alert = $(this).closest('.b-alert');
		$(alert).slideUp();
	});

	//Открыть попап окно
	$('.open-popup').click(function(){
		var popupName = $(this).attr('data-open-popup');
		var popup 		= $('.' + popupName).closest('.b-popup-wrapper');
		$('body').toggleClass('no-scroll');
		$(popup).removeClass('hidden');	
	});

	// Закрыть окно попап
	$('.close-popup').click(function(){
		var popup = $(this).closest('.b-popup-wrapper');

		$(popup).addClass('hidden');
		$('body').toggleClass('no-scroll');
	});
	

	// Переключение между блоками
	$('.toggle-block').click(function(){
		var linkContainer 		= $(this).closest('.b-block-toggle');
		var blockName 				= $(this).attr('data-open-block');
		var blockGroupName 		= $(this).attr('data-open-group');

		$(linkContainer).each(function () {
			var link = $(linkContainer).find('.b-block-toggle__link');
			$(link).removeClass('active');
		});
		$(this).addClass('active');

		$('.b-block[data-blocks-group="'+blockGroupName+'"]').addClass('hidden');
		$('.b-block[data-block-name="'+blockName+'"]').removeClass('hidden');
	});

});