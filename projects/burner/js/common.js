$(function () {
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Вертикальное центрирование в блоке
	$(function () {
		$(".middleAlignBox").each(function() {
			var boxHeight = $(this).height();
			$(this).css("margin-top", - boxHeight/2);
		});
	})


	//Окраска футера при скроле
	$(document).ready(function(){
		var headerTop = $('#headAnch').offset().top;
		$(window).scroll(function(){
			if( $(window).scrollTop() > headerTop + 50 ) {
				$('header').addClass('dyeHead');
			} 
			else {
				$('header').removeClass('dyeHead');
			}
		});
	});


	//Плавный скрол к якорю
	$(document).ready(function() {
		$('a[href^="#"]').click(function(){

			var el = $(this).attr('href');
			
			if( el == "#submitApl" 
				|| el == "#mp-1" 
				|| el == "#mp-2"
				|| el == "#mp-3"
				|| el == "#mp-4"
				|| el == "#mp-5"
				|| el == "#ap-1"
				|| el == "#ap-2"
				|| el == "#ap-3"
				|| el == "#ap-4"
				|| el == "#ap-5"
				) return;

				$('body').animate({
					scrollTop: $(el).offset().top - 85} , 700);
			return false; 
		});
	});

	//Видео
	$(document).ready(function(){
		var windowWidth = $(window).width();

		if (windowWidth >+ 992) {

			$(".video-container").append('<video class="bg-video" poster="img/poster-video.jpg" autoplay muted loop><source src="video/video.mp4" type="video/mp4"></source><source src="video/video.webm" type="video/webm"></source></video>')

			var controls = {
				video: $(".bg-video"),
				playpause: $("#playpause")                 
			};

			var video = controls.video[0];

			controls.playpause.click(function(){
				if (video.paused) {
					video.play();    
				} else {
					video.pause();
				}
			});
		}

		//Смена иконки плей/пауза
		$('.controls .fa-pause').click(function(){
			$(this).addClass('hidden');
			$('.controls .fa-play').removeClass('hidden');
		});
		$('.controls .fa-play').click(function(){
			$(this).addClass('hidden');
			$('.controls .fa-pause').removeClass('hidden');
		});
	}); 

	//Открыть окно подписки
	$(function () {
		$(".submitApl").magnificPopup({
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	});

	//Переключатель товаров
	$(function (){
		$(".productToggle").click(function(){

			var productType = $(this).attr("data-product-type");
			var product = $(".product").find("." + productType);
			

			$(".main-products, .add-products").addClass("hide");
			
			$(product).removeClass("hide");


			$('.productToggle').removeClass('productToggle-active');
			$(this).addClass('productToggle-active');
		})
	})

	//Скрыть дополнительные товары после снятия с них размеров
	$(function(){
		setTimeout(function(){
			$(".add-products").addClass('hide');
		},251)	
	})


	//Карусель основные товары
	$(document).ready(function() {

		var obj = $(".owlCarousel-product");

		obj.owlCarousel({
			items : 2,
			itemsDesktop : [992,2], //5 items between 1000px and 901px
      		itemsDesktopSmall : [900,2], // betweem 900px and 601px
      		itemsTablet: [600,1], //2 items between 600 and 0
      		itemsMobile : false,
      		pagination: true,
      		rewindNav: false,
      		mouseDrag: false
      	});

		//Засвет последнего товара
		var carousel = $(obj).find(".owl-wrapper");
		var i = 0;

		function addOnlay() {
			if ( i == 0 ){
				$(obj).find(".owl-item").removeClass("product-onlay");
				$(carousel).find('.owl-item').eq( 1 ).addClass('product-onlay');
			} else if ( i == 1){
				$(obj).find(".owl-item").removeClass("product-onlay");
				$(carousel).find('.owl-item').eq( 2 ).addClass('product-onlay');
			} else if ( i == 2){
				$(obj).find(".owl-item").removeClass("product-onlay");
			}
		}

		addOnlay();

		$(".owl-next-m").click(function(){
			obj.trigger('owl.next');
			i++;
			if (i > 2) i = 2;
			addOnlay();
		});

		$(".owl-prev-m").click(function(){
			obj.trigger('owl.prev');
			i--;
			if (i < 0) i = 0;
			addOnlay();
		})

	});

	//Карусель дополнительные товары
	$(document).ready(function() {

		var obj = $(".owlCarousel-more");

		obj.owlCarousel({

			items : 4,
			itemsDesktopSmall : [992,2],
			itemsTablet: [768,1],
			pagination: true,
			rewindNav: false,
			mouseDrag: false
		});

		//Засвет последнего товара
		var carousel = $(obj).find(".owl-wrapper");
		var i = 0;

		function addOnlay() {
			if ( i == 0 ){
				$(obj).find(".owl-item").removeClass("product-onlay");
				$(carousel).find('.owl-item').eq( 3 ).addClass('product-onlay');
			} else if ( i == 1){
				$(obj).find(".owl-item").removeClass("product-onlay");
			}
		}

		addOnlay();

		$(".owl-next-a").click(function(){
			obj.trigger('owl.next');
			i++;
			if (i > 1) i = 1;
			addOnlay();
		});

		$(".owl-prev-a").click(function(){
			obj.trigger('owl.prev');
			i--;
			if (i < 0) i = 0;
			addOnlay();
		})


	});


	//Переключение фото в открытой карточке
	$(".photoBtn").click(function(){

		var obj = $(this).closest(".productCard-open");
		var prewNumb = $(this).attr("data-photo-prew");
		var photo= $(obj).find("img.productPhoto_"+prewNumb);

		//Работа с кнопками
		$(obj).each(function(){
			var btn = $(obj).find(".photoBtn");
			$(btn).removeClass("active");
		});
		$(this).addClass("active");

		//Работа с изображениями
		$(obj).each(function(){
			var img = $(obj).find("[class ^= productPhoto]");
			$(img).removeClass("active");
		})
		$(photo).addClass("active");	
	});

	//Открыть попап карточки
	$('.gallery').each(function() { 
		$(this).magnificPopup({
			delegate: 'a',
			type: 'inline',
			gallery: {
				enabled:true
			}
		});
	});

	//Открыть фото отзыва
	$(document).ready(function(){
		$('.comment-img').magnificPopup({type:'image'});
	}); 
	

	//Ajax запросы
	$(function(){

		//Окно подписки
		$("#subscribe-form").submit(function() {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				$('.subscribePopup-form').fadeIn();
				setTimeout(function() {
					$('.subscribePopup-form').fadeOut();
				}, 2000); 
				$("#subscribe-form").trigger("reset");
			});
			return false;
		});

		//Окно заявки
		$("#application-form").submit(function() {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				$.magnificPopup.close();
				$('.applicationPopup-form').fadeIn();
				setTimeout(function() {
					$('.applicationPopup-form').fadeOut();
				}, 2000); 
				$("#application-form").trigger("reset");
			});
			return false;
		});
	})

	//Показать футер в мобильной версии
	$(function(){
		$(".toggle-nav").click(function() {
			$("footer").toggleClass('footerActive')
		})
	})


})