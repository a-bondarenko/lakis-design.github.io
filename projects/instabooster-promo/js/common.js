$(function () {

	//Предварительная регистрация
	$(".pre-registration").submit(function() {
		$.ajax({
			type: "POST",
			url: "handler.php",
			data: $(this).serialize()
		}).done(function() {
			$('.b-signin__formcontainer').addClass('hidden');
			$('.b-signin__consent').addClass('hidden');
			$('.b-signin__title').text('Спасибо за заявку!');
			$('.b-signin__subtitle').text('Мы сообщим вам об открытии сервиса.');
			setTimeout(function(){
				$(location).attr('href', '/index.html');
			},3000)
		});
		return false;
	});


	//Плавный скрол
	$('a[href*="\\#"]:not([href="\\#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		    || location.hostname == this.hostname) {

			var target = $(this.hash);

				// Скролл к якорю
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 400);

					return false;
				}
			}
		});


	//Запретить перетаскивать картинки и ссылки
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Удаляет плейсхолдер при фокусе поля формы
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});

	// Открыть/скрыть меню
	$('.b-toggle-nav').click(function(){
		$('.b-nav').addClass('open');
	});
	$('.b-nav__close').click(function(){
		$('.b-nav').removeClass('open');
	})

	//Анимация
	$('.animated').waypoint(function(direction) {
		var obj = this.element;
		if(direction == "down") {
			$(obj).addClass('fadeInUp');
		}
	},
	{
		offset: '80%'
	});

	//Окраска навигации в боковой панели
	$('.b-single-content h2').waypoint(function(direction) {
		var obj = this.element;
		var headNumber 	= $(obj).attr('data-headnumber');

		var liLength 	= $('.b-aside-nav li').length;
		var liNumber 	= $('.b-aside-nav li').eq(headNumber - 1);

		if(direction == "down") {
			$('.b-aside-nav li').removeClass('active');
			$(liNumber).addClass('active');
		} else if (direction == "up"){
			$('.b-aside-nav li').removeClass('active');
			$(liNumber).addClass('active');
		}
	},
	{
		offset: '-40px'
	});

	//Фиксация боковой панели
	$('.b-aside').waypoint(function(direction) {
		var obj = this.element;

		if(direction == "down") {
			$(obj).addClass('b-aside--fix');
		} else if (direction == "up"){
			$(obj).removeClass('b-aside--fix');
		}
	});

	// Отключение поля 'Сайт' регистрации аккаунта 
	// при активном чекбоксе
	$('.g-form__checkbox').change(function(){
		var isDis = $('.g-form__disabledfield-has-site-checkbox').prop('disabled');

		if (!isDis) {
			$('.g-form__disabledfield-has-site-checkbox').prop('disabled', true);
		} else {
			$('.g-form__disabledfield-has-site-checkbox').prop('disabled', false);
		}
	});
	
});