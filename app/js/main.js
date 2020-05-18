//Mobile menu

	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('.menu_content').toggleClass('active');
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.menu_wrap').length) {
			$('.burger').removeClass('active');
			$('.menu_content').removeClass('active');
			$('body').removeClass('no_scroll');
		}
		e.stopPropagation();
	});

//Modal

	$(".modal-trigger").click(function(e){
		e.preventDefault();
		dataModal = $(this).attr("data-modal");
		$("#" + dataModal).css({"display":"block"});
		$("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
	});

	$(".js-close-modal ").click(function(e){
		e.preventDefault();
		$(".modal").css({"display":"none"});
		$("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
	});

	$(".modal-sandbox").click(function(){
		$(".modal").css({"display":"none"});
		$("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
	});

//sliders

	$('.js-slider-1-columns').slick({
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

	$('.js-slider-1-2-columns').slick({
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
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
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
		autoplay: false,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	});

//custom quantity input

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



//accordion

	$('.acc-title').click(function(e) {

		var dropDown = $(this).closest('.acc-card').find('.acc-panel');
		$(this).closest('.acc').find('.acc-panel').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.acc').find('.acc-title.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
		e.preventDefault();
	});

//menu convert 2 dropdown on mobile

	$(function() {

		$("<select name='filter_products'/>").appendTo(".custom-filter");

		$(".custom-filter button").each(function() {
			var el = $(this);
			$("<option />", {
				"value"   : el.attr("value"),
				"text"    : el.text()
			}).appendTo(".custom-filter select");
		});

	});

