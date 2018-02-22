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
	$('a[href*="#"]').on('click.smoothscroll', function( e ){
		var hash    = this.hash,
		_hash   = hash.replace(/#/,''),
		theHref = $(this).attr('href').replace(/#.*/, '');

		if( theHref && location.href.replace(/#.*/,'') != theHref ) return; // не текущая страница

		var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();

		if( ! $target.length ) return;

		e.preventDefault();

		$('html, body').stop().animate({ scrollTop: $target.offset().top - 125 }, 400, 'swing', function(){
			window.location.hash = hash;
		});
	});


	$(function() {
		var HeaderTop = $('#header').offset().top;
		$(window).scroll(function(){
			if( $(window).scrollTop() > HeaderTop ) {
				$('header').addClass('dye_header');
				$('.header_container').addClass('reduce_header');
			} 
			else {
				$('header').removeClass('dye_header');
				$('.header_container').removeClass('reduce_header');
			}
		});
	})

	$('.toggle_nav').click(function() {
		$('.primary_nav').toggleClass('open');
	});
	$('.primary_nav li a').click(function() {
		$('.primary_nav').removeClass('open');
	});

	/*
	* Окно попап
	*/
	var popup = new function(){

		var object = this;

		function whatPopup(element) {
			var popupName = $(element).attr('data-open-popup');
			return $('body').find('.' + popupName);
		};
		
		//Открыть окно попап
		this.openPopup = function(element){
			var popup = whatPopup(element);
			object.closePopup();
			$('body').addClass('no-scroll');
			$('.b-header').addClass('header-noscroll');
			$(popup).removeClass('hidden');
			$(popup).addClass('show-popup');		
			return;
		};

		//Закрыть окно попап
		this.closePopup = function(){
			$('body').removeClass('no-scroll');
			$('.b-header').removeClass('header-noscroll');
			$('.b-popup-wrapper').removeClass('show-popup');
			$('.b-popup-wrapper').addClass('hidden');
		};

		//Закрыть окно попап по клику в любой области экрана
		this.closePopupAnywhere = function(area){

			//Проверка состояния попап окна
			function isPopupOpen() {
				return $('.b-popup-wrapper').hasClass('show-popup');
			};

			//Если клик был в области попап окна или по элементу его вызова возвращает false
			var isAnywhere = ($(area).closest(".b-popup").length || $(area).closest('.open-popup').length) ? false : true;

			if(isAnywhere && isPopupOpen()){
				object.closePopup();
			};
		};
	};

		//Клик по элементу вызова попап окна
		$('.open-popup').click(function(){
			var element = $(this);
			popup.openPopup(element);
		});

		//Клик по элементу закрытия попап окна
		$('.close-popup').click(function(){
			popup.closePopup();
		});

			//Клик по любой области области
			$(document).click(function(event) {
				var area = $(event.target);
				popup.closePopupAnywhere(area);
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
		offset: '100%'
	});

	/*Показать ответ в разделе FAQ*/
	$('.b-faq-block').click(function(){
		$(this).find('.b-faq-block__answer').slideToggle();	
	})

	
});