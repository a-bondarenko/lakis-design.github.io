$(function() {
	// Прокрутка на все якоря (#) и на a[name]. v1.1
	$('a[href*="#"]').on('click.smoothscroll', function( e ){
		var hash    = this.hash,
		_hash   = hash.replace(/#/,''),
		theHref = $(this).attr('href').replace(/#.*/, '');

		if( theHref && location.href.replace(/#.*/,'') != theHref ) return; // не текущая страница

		var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();

		if( ! $target.length ) return;

		e.preventDefault();

		$('html, body').stop().animate({ scrollTop: $target.offset().top - 80 }, 600, 'swing', function(){
			//window.location.hash = hash;
			
		});

		return false;
	});
})