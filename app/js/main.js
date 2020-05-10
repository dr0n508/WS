// Mobile menu
$('.burger').click(function(){
	$(this).toggleClass('active');
	$('body').toggleClass('no_scroll');
	$('.menu_content').toggleClass('active');
	// $('.sub_menu').slideUp(300);
});
$(document).on('click', function(e) {
	if (!$(e.target).closest('.menu_wrap').length) {
		$('.burger').removeClass('active');
		$('.menu_content').removeClass('active');
		$('body').removeClass('no_scroll');
		if ($(window).width() <= 767) {
			// $('.sub_menu').slideUp(300);
		}
	}
	e.stopPropagation();
});

$('.js-article-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,

	responsive: [
		{
			breakpoint: 9999,
			settings: "unslick"
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
	]
});

$('.testimonial-slider').slick({
	autoplay: true,
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
});

//custom quantity input
$(function() {

	(function quantityProducts() {
		var $quantityArrowMinus = $(".quantity-arrow-minus");
		var $quantityArrowPlus = $(".quantity-arrow-plus");
		var $quantityNum = $(".quantity-num");

		$quantityArrowMinus.click(quantityMinus);
		$quantityArrowPlus.click(quantityPlus);

		function quantityMinus() {
			event.preventDefault();
			if ($quantityNum.val() > 1) {
				$quantityNum.val(+$quantityNum.val() - 1);
			}
		}

		function quantityPlus() {
			event.preventDefault();
			$quantityNum.val(+$quantityNum.val() + 1);
		}
	})();

});

//accordion
$(function() {
	$('.acc__title').click(function(j) {

		var dropDown = $(this).closest('.acc__card').find('.acc__panel');
		$(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.acc').find('.acc__title.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});
});