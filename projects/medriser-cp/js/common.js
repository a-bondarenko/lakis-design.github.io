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

	//Добавить поле "Загрузить файл"
	$('.b-form__file-more').click(function(){
		var container = $('.b-form__file-more').closest('.b-form__file-container');
		var input 		= '<input class="b-form__file" type="file">';
		
		$(container).append(input);
	});

	//Включение/отключение полей "Подклчить домен"
	$(function() {
		var form 	= $('.b-form[data-include-domen]');
		var input = $(form).find('input[type="radio"]');

		$(input).change(function() {
			var value = $(this).attr('value');

			if (value == 'yes'){
				$('div[data-hasdomen="no"]').addClass('hidden');
				$('div[data-hasdomen="yes"]').removeClass('hidden');
			} else {
				$('div[data-hasdomen="no"]').removeClass('hidden');
				$('div[data-hasdomen="yes"]').addClass('hidden');
			}
		});		
	});

	//Смена форм модерация статей
	$(function(){
		$('.b-article-moderate-form__to-rework, .b-article-moderate-form__cancel').click(function(){
			$('.b-article-moderate-form--confirm').toggleClass('hidden');
			$('.b-article-moderate-form--rework').toggleClass('hidden');
		})
	});
	
});