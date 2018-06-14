
function catalogItemCounter(field){

	var fieldCount = function(el) {

		var 
					// Мин. значение
					min = el.data('min') || false,
					max = el.data('max') || false, 
					dec = el.prev('.dec'), 
					inc = el.next('.inc');
					function init(el) {
						if(!el.attr('disabled')){
							dec.on('click', decrement);
							inc.on('click', increment);
						}
						function decrement() {
							var value = parseInt(el[0].value);
							value--;

							if(!min || value >= min) {
								el[0].value = value;
							}
						};
						function increment() {
							var value = parseInt(el[0].value);

							value++;

							if(!max || value <= max) {
								el[0].value = value++;
							}
						};

					}

					el.each(function() {
						init($(this));
					});
				};

				$(field).each(function(){
					fieldCount($(this));
				});
			}
			catalogItemCounter('.fieldCount');



			$(document).ready(function() {
				if ($(window).width() <= 576) {
					$(".product-item").parent().css({
						padding: "0 7px"
					});

				} else {

					(function(){
var a = document.querySelector('.oreder-list-check-fix'), b = null, P = 30;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
	if (b == null) {
		var Sa = getComputedStyle(a, ''), s = '';
		for (var i = 0; i < Sa.length; i++) {
			if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
				s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
			}
		}
		b = document.createElement('div');
		b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
		a.insertBefore(b, a.firstChild);
		var l = a.childNodes.length;
		for (var i = 1; i < l; i++) {
			b.appendChild(a.childNodes[1]);
		}
		a.style.height = b.getBoundingClientRect().height + 'px';
		a.style.padding = '0';
		a.style.border = '0';
	}
	var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.guard-lozung').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
      if ((Ra.top - P) <= 0) {
      	if ((Ra.top - P) <= R) {
      		b.className = 'stop';
      		b.style.top = - R +'px';
      	} else {
      		b.className = 'sticky';
      		b.style.top = P + 'px';
      	}
      } else {
      	b.className = '';
      	b.style.top = '';
      }
      window.addEventListener('resize', function() {
      	a.children[0].style.width = getComputedStyle(a, '').width
      }, false);
    }
  })()
}
$(window).resize(function() {
	if ($(window).width() <= 576) {
		$(".product-item").parent().css({
			padding: "0 7px"
		});

	}
	else {

	}
});




$("#mmenu").mmenu({
	"extensions": [
	"position-front",
	"pagedim-black"
	]
});
$(".magnific").magnificPopup({
	type: 'inline',
	mainClass: 'mfp-with-zoom', 
});

$("button.mfp-close").on("click", function() {
	$("body").removeAttr("style");
});

$(".magnific").on("click", function() {
	if ($(".modal").is(":visible") ) {
		$("body, html").css({
			overflow: 'hidden'
		});
	}

	$("button.mfp-close").on("click", function() {
		$("html").removeAttr("style");
		$("body").removeAttr("style");
	});
});


	// Custom JS
	$('.mob_slider').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed:500
	});

	$(".file-upload input[type=file]").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$(".file-upload label span").html(filename);
	});

	$('.product-slider-mob').owlCarousel({
		items:1,
		loop:true,
		navText: "",
		nav: true,
		smartSpeed:800
	});
	
	$('.add-more-slider').owlCarousel({
		items:  3,
		//margin: 47,
		loop:   true,
		navText: "",
		nav: true,
		dots: false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		checkVisible: false
	});

	$('.product-img').each(function() {
		var imgSlideCount = $(this).find('.imgages-content img').length;
		for (var i = 1; i <= imgSlideCount; i++) {
			$(this).find('.imgages-content-control').append('<div class="control-item"></div>');		 
		}
		var widthControl = 100 / imgSlideCount;
		$(this).find(".control-item").css({
			width: widthControl + "%"
		});
		$(this).find(".control-item").each(function(indx, element) {
			$(this).css({
				left: indx * widthControl + "%"
			});
			// console.log(indx);
		});
		$(this).find(".control-item").hover(function() {
			var checkedImg = $(this).index();
			//console.log(checkedImg);
			$(this).parent().parent().find('.imgages-content img').hide();
			$(this).parent().parent().find('.imgages-content img:eq('+ checkedImg +')').css({
				display: "block"
			});
		});
		//console.log(imgSlideCount);
	});
	$(".rating-star-list li").hover(function() {
		var starHover = $(this).index();
		$('.rating-star-list li i').removeClass("full");
		$('.rating-star-list li:eq('+ starHover +')').prevAll().find("i").addClass("full");
		$('.rating-star-list li:eq('+ starHover +')').find("i").addClass("full");
		// $('.rating-star-list li').removeClass("active");
		// $('.rating-star-list li:eq('+ starHover +')').addClass("active");

		$(this).mouseleave(function() {
			$(".rating-star-list li.active").find("i").addClass("full");
			$(".rating-star-list li.active").prevAll().find("i").addClass("full");
		});
	});
	$(".rating-star-list li").on("click", function() {
		var starHover = $(this).index();
		$('.rating-star-list li i').removeClass("full");
		$('.rating-star-list li:eq('+ starHover +')').prevAll().find("i").addClass("full");
		$('.rating-star-list li:eq('+ starHover +')').find("i").addClass("full");
		$('.rating-star-list li').removeClass("active");
		$('.rating-star-list li:eq('+ starHover +')').addClass("active");
	});
	$(".rating-star-list li.active").find("i").addClass("full");
	$(".rating-star-list li.active").prevAll().find("i").addClass("full");
	$(".phone-input").mask("+99999999999");
	$(".date").mask("99.99.9999");
	$("a.promocode").on("click", function() {
		$("form.promocode").fadeToggle();
		return false;
	});

	$(".add-more-wrap a").on("click", function() {

		if ( $("#add-more:visible") ) {
			$(".add-more-wrap").hide();
			$("#add-more").css({
				opacity: 1,
				zIndex: 1
			});
		}
		return false;
	});

	$(".close-add").on("click", function() {
		if ( $("#add-more:hidden") ) {
			$(".add-more-wrap").show();
			$("#add-more").css({
				opacity: 0,
				zIndex: -1
			});
		}

		return false;
	});

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".product-slider").each(function() {
		$(this).find("ul li img").each(function() {
			var imgSrc = $(this).attr("src");
			$(this).attr("data-src", imgSrc);
		});
		$(this).append('<div class="contr-left"></div><div class="contr-right"></div>');
		$(this).find("ul li").not(":first").on("click", function() {
			$(".product-slider ul li").removeClass("active");
			$(this).addClass("active");
			$(this).each(function() {
				var activeImg = $(this).parent().find("li.active").find("img");
				var imgLink = activeImg.attr("data-src");
				$(".product-slider ul li").first().find("img").attr("src", imgLink);
			});
		});
		$(".product-slider ul li:nth-child(2)").addClass("active");

		$(".contr-right").on("click", function() {

			if ( $(".product-slider ul li:last-child").hasClass("active") ) {
				$(".product-slider ul li").removeClass("active");
				$(".product-slider ul li:nth-child(2)").addClass("active");
				var activeImg = $(".product-slider ul li:nth-child(2)").find("img");
				var imgLink = activeImg.attr("data-src");
				$(".product-slider ul li").first().find("img").attr("src", imgLink);
			}	else {
				var activeImg = $(".product-slider ul li.active").next().find("img");
				var imgLink = activeImg.attr("data-src");
				$(".product-slider ul li").first().find("img").attr("src", imgLink);
				$(".product-slider ul li.active").next().addClass("active").prev().removeClass("active");
			}
		});

		$(".contr-left").on("click", function() {

			if ( $(".product-slider ul li:nth-child(2)").hasClass("active") ) {
				$(".product-slider ul li").removeClass("active");
				$(".product-slider ul li:last-child").addClass("active");
				var activeImg = $(".product-slider ul li:last-child").find("img");
				var imgLink = activeImg.attr("data-src");
				$(".product-slider ul li").first().find("img").attr("src", imgLink);
			
			} else {
				var activeImg = $(".product-slider ul li.active").prev().find("img");
				var imgLink = activeImg.attr("data-src");
				$(".product-slider ul li").first().find("img").attr("src", imgLink);
				$(".product-slider ul li.active").prev().addClass("active").next().removeClass("active");
			}
		});

	});
	
	$(".plus-proc").hide();

	$(".order-variants ul li").on("click", function() {
		$(".order-variants ul li").removeClass("active");
		$(this).addClass("active");
		var count = $(this).attr("data-count");
		$(".plus-proc").html( count );
		if ($(".plus-proc").html() == '') {
			$(".plus-proc").hide();
		} else {
			$(".plus-proc").fadeIn();
		}
	});

	$( ".hidden-input" ).find("input").on( "click", function() {
		if( $(this).is(":checked") ) {
			$(this).parent().parent().find(".input-wraper").fadeIn();
		}
		else {
			$(this).parent().parent().find(".input-wraper").fadeOut();
			$(this).parent().parent().find(".input-wraper").find(".field").val('');
		}
	})

	$(".input-wraper.input").find("input").change(function() {
		if ( $(this).val().length != 0) {
			$(this).parent().addClass("full-input");
		} else {
			$(this).parent().removeClass("full-input");
		}
	});

	$(".input-wraper.textarea").find("textarea").change(function() {
		if ( $(this).val().length != 0) {
			$(this).parent().addClass("full-input");
		} else {
			$(this).parent().removeClass("full-input");
		}
	});


	$(window).scroll(function(){
		$('.mob-menu-fixed').toggleClass('vissible', $(this).scrollTop() > 150);
	});



});



