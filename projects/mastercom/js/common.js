$(function () {

	$(function(){
		/* Удаляет плейсхолдер при фокусе поля формы*/  
		$('input, textarea').each(function(){
			var placeholder = $(this).attr('placeholder');
			$(this).focus(function(){ $(this).attr('placeholder', '');});
			$(this).focusout(function(){			 
				$(this).attr('placeholder', placeholder);  			
			});
		});
	});

	/*Окраска шапки при скроле*/
	$(function(){
		var startDocument = $('body').offset().top;
		var headerTop = $('.b-header').offset().top;
		var scrollTop = $(window).scrollTop();	

		if (scrollTop > startDocument) {
			$('.b-header').addClass('b-header--small');
		}

		$(window).scroll(function(){
			if( $(window).scrollTop() > startDocument + 10 ) {
				$('header').addClass('b-header--small');
			} 
			else {
				$('header').removeClass('b-header--small');
			}
		});
	});

	/*Плавный скрол*/
	$('a[href*="\\#"]:not([href="\\#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		    || location.hostname == this.hostname) {

			var target = $(this.hash);

				// Scroll to the anchor
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);

					return false;
				}
			}
		});

	/*Открыть/закрыть меню*/
	$('.b-toggle-menu').click(function(){
		$(this).toggleClass('b-toggle-menu--close');
		$('.b-call-back, .b-primary-menu').slideToggle();
	});

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

	/*Читать далее*/
	$('.readmore-btn').click(function(){
		$(this).addClass('hide');
		$('.b-about__paragraph').addClass('read-more');
		$('.b-service-intro__paragraph').addClass('read-more');
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
	
})