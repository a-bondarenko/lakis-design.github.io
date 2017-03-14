$(function () {


	/* Удаляет плейсхолдер при фокусе поля формы*/  
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});


	/*Открыть/закрыть меню*/
	$('.b-toggle-menu').click(function(){
		$('.b-toggle-menu .open').toggleClass('hidden');
		$('.b-toggle-menu .close').toggleClass('hidden');
		$('.b-primary-menu, .b-header-phone').slideToggle();
	});

	/*Открыть контакты*/
	$('#open-contacts').click(function(){
		$('.b-contacts').addClass('open-contacts');
	});
	$('.b-contacts__close').click(function(){
		$('.b-contacts').removeClass('open-contacts');
	})

	/*Слайдер*/
	$(function(){

		var slider = $('.b-slider');

		slider.owlCarousel({

			//autoPlay: 3000,
			navigation : true,
			singleItem:true,
			navigationText: [
			'<span class="b-slider__navigation b-slider__navigation--prev"></span>',
			'<span class="b-slider__navigation b-slider__navigation--next"></span>'
			],
		});
	});

	/*Окно обратной связи*/
	$('.open-popup-callback').click(function(){
		var popup = $('.b-popup-callback').closest('.b-popup-wrapper');

		$('body').toggleClass('no-scroll');
		$('.b-header').toggleClass('header-noscroll');
		$(popup).removeClass('hidden');	
	});

	/*Закрыть окно попап*/
	$('.close-popup').click(function(){
		var popup = $(this).closest('.b-popup-wrapper');

		$(popup).addClass('hidden');
		$('body').toggleClass('no-scroll');
		$('.b-header').toggleClass('header-noscroll')
	});

	/*Смена форм медсео*/
	$('.b-medseo-form__checklist button').click(function(){
		$('.b-medseo-form__checklist').addClass('hidden');
		$('.b-medseo-form__callback').removeClass('hidden');
	})

	/*Ajax форма*/
	$("#call-back-form, #pop-up-callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "/wp-content/themes/mastercom/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#call-back-form").trigger("reset");
			$('.b-popup-wrapper').addClass('hidden');
		});
		return false;
	});

	/*Показать подложку услуги*/
	$('.b-service').mouseenter(function() {
		$(this).addClass('show-backside');
	});
	$('.b-service').mouseleave(function() {
		$(this).removeClass('show-backside');
	});
})