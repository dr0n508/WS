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

//js modals
var modalBtns = $('.btn-modal').toArray();
modalBtns.forEach(function(btn){
	btn.onclick = function(e) {
		event.preventDefault();
		jQuery('.modal').hide();
		var modal = btn.getAttribute('data-modal');
		jQuery('#' + modal).css({'display' : 'block'});
	}
});

var closeBtns = $('.js-close-modal').toArray();
closeBtns.forEach(function(btn){
	btn.onclick = function() {
		event.preventDefault();
		var modal = btn.closest('.modal');
		modal.style.display = "none";
	}
});

window.onclick = function(event) {
	if (event.target.className === "modal") {
		event.target.style.display = "none";
	}
};

window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		$('.modal').hide();
	}
};



//sliders
$('.js-article-slider, .js-last-updates-slider').slick({
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
	autoplay: false,
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


//menu convert 2 dropdown on mobile
$(function() {

	// Create the dropdown base
	$("<select name='filter_products'/>").appendTo(".custom-filter");

	// Populate dropdown with menu items
	$(".custom-filter a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(".custom-filter select");
	});

	$(".custom-filter select").change(function() {
		window.location = $(this).find("option:selected").val();
	});

});

//custome select
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		/* For each option in the original select element,
        create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			/* When an item is clicked, update the original select box,
            and the selected item: */
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		/* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
    except the current select box: */
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);