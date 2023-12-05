
$(document).ready(function () {
	
	

	$('.category-dropdown-toggle').click(function (e){
		e.preventDefault()
		e.stopPropagation();

		$('.category-dropdown').toggleClass('active')
	})

	$(document).click(function (e){
		e.stopPropagation();
		$('.category-dropdown').removeClass('active')
	})
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
		   var c = ca[i];
		   while (c.charAt(0)==' ') c = c.substring(1);
		   if(c.indexOf(name) == 0)
			  return c.substring(name.length,c.length);
		}
		return "";
   }

   function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function copytext(el) {
   		var $tmp = $("<textarea>");
    	$("body").append($tmp);
    	$tmp.val($(el).text()).select();
    	document.execCommand("copy");
    	$tmp.remove();
	}

	$('.open-all-serv').click(function () {
		$('.servsingle-box-l').toggleClass('visible');
	});

// 	$('.main-filter-bottom-btns button,.main-filter-bottom-btns a').click(function () {
// 		// $(this).toggleClass('open');
// 		$('.main-filter-wrapper').removeClass('visible');
// 	});

if ($('.header-slider')) {
	document.querySelectorAll('.header-slider .slide')
		.forEach((slide) => { slide.classList.remove('d-none') });
	// $('.header-slider .slide').removeClass('d-none');
	$('.header-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 600
});
}

	$(window).on('load resize', function () {
		// let get_header_top_inner_height = $('.header-top-inner').outerHeight();
		$('.header-top-hidden').css('top', '0px')
	});



	if ($('.prod-slider-main')) {
		$('.prod-slider-main').slick({
			slidesToShow: 1,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			arrows: false,
			// adaptiveHeight: true,
			// fade: true,
			asNavFor: '.prod-slider-nav',
			infinite: false
		});
		$('.prod-slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.prod-slider-main',
			dots: false,
			// centerMode: true,
			focusOnSelect: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						// slidesToScroll: 1
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						// slidesToScroll: 1
					}
				},
				// {
				// 	breakpoint: 768,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }


			]
		});
	}




	$('.open-popup').fancybox({
		type: 'inline',
		thumbs: false,
		loop: false,
		touch: false,
		infobar: false,
		buttons: ["close"],
		hash: false,
		backFocus: false,
		autoFocus: false,
		afterShow: function () {
			$('.carousel-main,.carousel-nav').flickity('reloadCells');
			$('.carousel-main,.carousel-nav').flickity('resize');
		},
		beforeClose: function () {
			$('.price-box').removeClass('spec');
		}
	});






	$("button[name=copy_pre]").click(function () {
		var id = $(this).attr('data-copy-from');
		var el = document.getElementById(id);
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		document.execCommand('copy');
		// console.log("Contents copied to clipboard.");

		return false;
	});

	if ($('.parnters-slider').length) {
		$('.parnters-slider').slick({
			infinite: true,
			centerMode: true,
			speed: 300,
			slidesToShow: 5,
// 			variableWidth: true,
			// adaptiveHeight: true,
			arrows: true,
			dots: false,
			// lazyLoad: 'ondemand',
			slidesToScroll: 2
		});
	}




	if ($('.carpromo-slider').length) {

		$('.carpromo-slider').slick({
			slidesToShow: 2,

			slidesToScroll: 1,
			adaptiveHeight: false,

			arrows: true,
			dots: false,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						// slidesToScroll: 1
					}
				},
				// {
				// 	breakpoint: 768,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }


			]
		});

		let get_slider_height = $('.carpromo-slider .slick-list').height();
		// console.log(get_slider_height);

		$('.carpromo-slider .slick-slide').css('height', get_slider_height + 'px');

		$(window).resize(function () {
			// get_slider_height = $('.carpromo-slider .slick-list').height();

			$('.carpromo-slider .slick-slide').css('height', 'auto');
			setTimeout(function () {
				$('.carpromo-slider .slick-slide').css('height', $('.carpromo-slider .slick-list').height() + 'px');
			}, 1000);


		});



		// .on('setPosition', function (event, slick) {
		// 	let get_height = $('.carpromo-slider .promo-card').height();
		// 	console.log(get_height);

		// 	slick.$slides.css('height', get_height + 'px');
		// 	$('.carpromo-slider').slick('setPosition');

		// })
		// .on('afterChange', function (event, slick, currentSlide, nextSlide) {

		// 	let get_height = $('.carpromo-slider .promo-card').height();
		// 	console.log(get_height);

		// 	slick.$slides.css('height', get_height + 'px');
		// 	$('.carpromo-slider').slick('setPosition');
		// });
	}

	if ($('.revsec-slider').length) {
		$('.revsec-slider').slick({
			slidesToShow: 2,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: false,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						// slidesToScroll: 1
					}
				},
				// {
				// 	breakpoint: 768,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }


			]
		});
	}

	if ($('.revsec-slider-img').length) {
		$('.revsec-slider-img').slick({
			slidesToShow: 3,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: false,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						// slidesToScroll: 1
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						// slidesToScroll: 1
					}
				}
				// {
				// 	breakpoint: 768,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }


			]
		});
	}

	if ($('.class-slider').length) {
		// $(window).on('load resize', function () {
		// 	let get_window_width = $(window).outerWidth();
		// 	console.log(get_window_width);

		// 	if (get_window_width > 992) {

		// 	}

		$('.class-slider').slick({
			slidesToShow: 4,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: false,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						// slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						lazyLoad: 'progressive',
						variableWidth: true,
						// infinite: true
					}
				}


			]
		});

		// $slider.slick('unslick');
		// });



	}


	if ($('.secpopular-cars .woocommerce ul.products' || '.secdiscount-cars .woocommerce ul.products').length) {
		$('.secpopular-cars .woocommerce ul.products, .secdiscount-cars .woocommerce ul.products').slick({
			slidesToShow: 4,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: true,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						// slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
					}
				},
				// {
				// 	breakpoint: 576,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		// lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }

			]
		});
	}
	if ($('.car-park .woocommerce ul.products').length) {
		$('.car-park .woocommerce ul.products').slick({
			slidesToShow: 4,
			lazyLoad: 'ondemand',
			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: true,

			infinite: false,
			speed: 300,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						// slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
					}
				},
				// {
				// 	breakpoint: 576,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		// lazyLoad: 'progressive',
				// 		variableWidth: true,
				// 		// infinite: true
				// 	}
				// }

			]
		});
	}
	if ($('.reviews-slider').length) {
		$('.reviews-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

	if ($('.rev-slider').length) {
		$('.rev-slider').slick({
			slidesToShow: 1,

			slidesToScroll: 1,
			adaptiveHeight: true,

			arrows: true,
			dots: false,

			infinite: false,
			speed: 300
		});
	}

	if ($('.rent-bnf-box').length) {

		var sliderElem = $(".rent-bnf-box"),
			sliderBool = false,
			sliderBreakpoint = 768,
			sliderSettings = {
				arrows: true,
				dots: true,
				autoplaySpeed: 3000,
				mobileFirst: true,
				adaptiveHeight: true,
				infinite: false,
				responsive: [
					{
						breakpoint: sliderBreakpoint,
						settings: "unslick"
					}
				]
			};
		function sliderInit() {
			if (window.innerWidth <= sliderBreakpoint) {
				if (sliderBool == false) {
					sliderElem.slick(sliderSettings);
					sliderBool = true;
				}
			} else {
				sliderBool = false;
			}
		}

		// resize
		$(window).on('load resize', function () {
			sliderInit();
		});
	}


	if ($('.beefup').length) {
		$('.beefup').beefup({
			openSingle: true,
			// stayOpen: 'last'
		});
	}

	if ($('#range').length) {
		$("#range").ionRangeSlider({
			min: 0,
			type: "double",
			max: 99999,
			from: 0,
			onChange: function (data) {
				$('#price_min').val(data.from);
				$('#price_max').val(data.to);
			}
		});
	}


	$('.inline-gallery').click(function () {
		var galleryName = ($(this).attr('data-fancybox'));
		var galleryNameForOneGroup = '[data-fancybox="' + galleryName + '"]';

		$().fancybox({
			hideScrollbar: false,
			baseClass: "image-on-top",
			animationEffect: 'fade',
			selector: galleryNameForOneGroup,
			thumbs: false,
			loop: false,
			infobar: false,
			// toolbar  : false,
			buttons: ["close"],
			hash: false,
			backFocus: false
		});
	});



	setTimeout(function () {
		$('.js-styled').styler({
			onSelectOpened: function () {
				// Рє РѕС‚РєСЂС‹С‚РѕРјСѓ СЃРµР»РµРєС‚Сѓ РґРѕР±Р°РІР»СЏРµС‚СЃСЏ РєСЂР°СЃРЅР°СЏ РѕР±РІРѕРґРєР°
				// $(this).css('outline', '3px solid red');
				if ($(this).closest('.selectcar-i').length) {
					$('.selectcar-i').removeClass('active');
					$(this).closest('.selectcar-i').addClass('active');
				}
			}
		});
	}, 1000);

if(getCookie('newcurrency') == null) {
		if (document.location.pathname.includes('/en/')) {
			setCookie('newcurrency','usd',1);
		} else setCookie('newcurrency','eur',1);
	} 
	document.querySelectorAll('[lang="en-US"]').forEach(item => {
		item.addEventListener('click', () => setCookie('newcurrency','usd',1))
	})

		if (document.getElementById( "currency_choice" )) {
			document.getElementById( "currency_choice" ).onchange = function() {
			setCookie('newcurrency',this.value,1);
			location.reload();
			return false;
			}
		}

	$('#burger').click(function () {
		// $(this).toggleClass('open');
		$('.header-top-hidden').toggleClass('visible');
		$('body').toggleClass('body-mobile-menu-open');
		$('.burger-menu-background').css("display", "block");

	});
	$('#burger-inside').click(function () {
		// $(this).toggleClass('open');
		$('.header-top-hidden').toggleClass('visible');
		$('body').toggleClass('body-mobile-menu-open');
		$('.burger-menu-background').css("display", "none");
	});


// 	$('.menu-item-has-children').click(function (e) {
//     $(this).toggleClass('open-sub-menu');
//     $(this).children('.sub-menu').toggleClass('sub-menu-open');
// });
$('.menu-item-has-children').click(function (e) {
	if (!$(e.target).is('a')) {
			e.preventDefault(); 
			$(this).toggleClass('open-sub-menu');
			$(this).children('.sub-menu').toggleClass('sub-menu-open');
	}
});


	$('.open-all-filters').mouseup(function (e) {
		$('.main-filter-wrapper').css("display", "block");
		$('.main-filter-wrapper').toggleClass('visible');
		e.stopPropagation();
	});
// 	$(document).mouseup(function (e) {
// 		var container = $(".main-filter-wrapper");
// 		if (container.has(e.target).length === 0){
// 			container.css("display", "none");
// 			container.toggleClass('visible');
//     }
// 	});

const popupOpenButtons = document.querySelectorAll('[data-product-label]');
if (popupOpenButtons.length > 0) {
	popupOpenButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			document.querySelector('[name="car-title"]').value = btn.getAttribute('data-product-label');
		})
	});
}

const popupRadio = document.querySelectorAll('[name="radio-612"]');
const popupControlledTextField = document.querySelector('[name="text-733"]');
popupControlledTextField.setAttribute('disabled', true)
	popupRadio.forEach((button, index) => {
		button.addEventListener('click', () => {
			if (index === 1) {
				popupControlledTextField.setAttribute('disabled', true)
			} else popupControlledTextField.removeAttribute('disabled', false)
		})
	})
});

const telRegEx = document.querySelector('[name="Phone"]')
const regex = /[^0-9()+-]/g
telRegEx.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace(regex,'');
})

/////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    let get_product_title;
    $(".book-me-btn").on("click", function () {
        get_product_title = $(this).closest('li.product').find('.woocommerce-loop-product__title').text();
        $('#form3 input[name="Namecar"]').val(get_product_title);
        //console.log(get_product_title);
    });
  });



$(document).ready(function () {
  $("#form1").submit(function () {
    // РџРѕР»СѓС‡РµРЅРёРµ ID С„РѕСЂРјС‹
    var formID = $(this).attr('id');
    // Р”РѕР±Р°РІР»РµРЅРёРµ СЂРµС€С‘С‚РєРё Рє РёРјРµРЅРё ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '/wp-content/themes/somyh/mailobr.php',
      data: formNm.serialize(),
      success: function (data) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° СЂРµР·СѓР»СЊС‚Р°С‚Р° РѕС‚РїСЂР°РІРєРё
        $(formNm).html(data);
      },
      error: function (jqXHR, text, error) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° РѕС€РёР±РєРё РѕС‚РїСЂР°РІРєРё
        $(formNm).html(error);
      }
    });
    return false;
  });
});
$(document).ready(function () {
  $("#form2").submit(function () {
    // РџРѕР»СѓС‡РµРЅРёРµ ID С„РѕСЂРјС‹
    var formID = $(this).attr('id');
    // Р”РѕР±Р°РІР»РµРЅРёРµ СЂРµС€С‘С‚РєРё Рє РёРјРµРЅРё ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '/wp-content/themes/somyh/mailotz.php',
      data: formNm.serialize(),
      success: function (data) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° СЂРµР·СѓР»СЊС‚Р°С‚Р° РѕС‚РїСЂР°РІРєРё
        $(formNm).html(data);
      },
      error: function (jqXHR, text, error) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° РѕС€РёР±РєРё РѕС‚РїСЂР°РІРєРё
        $(formNm).html(error);
      }
    });
    return false;
  });
});
$(document).ready(function () {
  $("#form3").submit(function () {
    // РџРѕР»СѓС‡РµРЅРёРµ ID С„РѕСЂРјС‹
    var formID = $(this).attr('id');
    // Р”РѕР±Р°РІР»РµРЅРёРµ СЂРµС€С‘С‚РєРё Рє РёРјРµРЅРё ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '/wp-content/themes/somyh/mailzakaz.php',
      data: formNm.serialize(),
      success: function (data) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° СЂРµР·СѓР»СЊС‚Р°С‚Р° РѕС‚РїСЂР°РІРєРё
        $(formNm).html(data);
      },
      error: function (jqXHR, text, error) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° РѕС€РёР±РєРё РѕС‚РїСЂР°РІРєРё
        $(formNm).html(error);
      }
    });
    return false;
  });
});

$(document).ready(function () {


  $(".wpcf7 form, #form1, #form4").submit(function() {
	  const queryString = window.location.search;
	  const urlParams = new URLSearchParams(queryString);
	  const utm_source = urlParams.get('utm_source')
	  const utm_medium = urlParams.get('utm_medium')
	  const utm_term = urlParams.get('utm_term')
	  var form = $(this).serializeArray()

	  if (utm_source != null){
		  form.push({name: 'utm_source',value :utm_source});
	  }
	  if (utm_medium != null){

		  form.push({name: 'utm_medium',value :utm_medium});
	  }
	  if (utm_term != null){

		  form.push({name: 'utm_term',value :utm_term});
	  }

		console.log(form)
	  $.ajax({
		  type: "POST",
		  url: '/wp-content/themes/somyh/nethunt.php',
		  data: form,
		  success: function (data) {

		  }
	  });
  });

  $("#form4").submit(function () {
    // РџРѕР»СѓС‡РµРЅРёРµ ID С„РѕСЂРјС‹
    var formID = $(this).attr('id');
    // Р”РѕР±Р°РІР»РµРЅРёРµ СЂРµС€С‘С‚РєРё Рє РёРјРµРЅРё ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '/wp-content/themes/somyh/mailpodbor.php',
      data: formNm.serialize(),
      success: function (data) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° СЂРµР·СѓР»СЊС‚Р°С‚Р° РѕС‚РїСЂР°РІРєРё
        $(formNm).html(data);
      },
      error: function (jqXHR, text, error) {
        // Р’С‹РІРѕРґ С‚РµРєСЃС‚Р° РѕС€РёР±РєРё РѕС‚РїСЂР°РІРєРё
        $(formNm).html(error);
      }
    });
    return false;
  });
});


$(document).ready(function () {
  $('.car-brands__inner').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    appendDots: '.car-brands__dots',
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

if(getCookie('newcurrency') == null)  setCookie('newcurrency','eur',1);

document.getElementById( "currency_choice" ).onchange = function() {
	setCookie('newcurrency',this.value,1);
	location.reload();
	return false;
}


// document.getElementById( "currency_choice_mob" ).onchange = function() {
// 	setCookie('newcurrency',this.value,1);
// 	location.reload();
// 	return false;
// }

document.querySelectorAll('[data-currency-choice]').forEach((item) => {
	item.addEventListener('click', () => {
			setCookie('newcurrency', item.getAttribute('value'), 1);
			location.reload();
			return false;
		})
	})
});

if (document.querySelector('.prod_description_block__text.servsingle-content')){

	if (document.querySelector('.prod_description_block__text.servsingle-content').innerHTML == '' && document.querySelector('.video-content').innerHTML == ''){
		document.querySelector('.prod_description_block').style.display = 'none';
	};
}

function clearFirter() {
	intervalCounter--;
	if (intervalCounter === 0) {
		clearInterval(id);
	}
	if (document.querySelector('.woof_redraw_zone')){
	const categoryFilter = document.querySelector('.woof_redraw_zone');
	if (!categoryFilter.querySelector('[data-css-class="woof_container_pa_klass_avto"]')) {
		categoryFilter.querySelectorAll('.woof_list_image').forEach(e => (e.style.maxWidth = "495px"));
		categoryFilter.style.justifyContent = 'space-around';
		clearInterval(id);
	};
	if (!categoryFilter.querySelector('[data-css-class="woof_container_pa_marki-avto"]')) {
		categoryFilter.querySelectorAll('.woof_list_image').forEach(e => {
			e.style.maxWidth = "600px";
			e.style.flexDirection = 'row';
			e.style.flexWrap = 'wrap'
		});
		categoryFilter.style.justifyContent = 'space-around';
		categoryFilter.querySelector('[data-css-class="woof_container_pa_klass_avto"]').style.flexBasis = '600px';
		clearInterval(id);
	};
}
}
let intervalCounter = 1000;
const id = setInterval(clearFirter, 250);






function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function open_popup(){
	$('.open-popup').fancybox({
		type: 'inline',
		thumbs: false,
		loop: false,
		touch: false,
		infobar: false,
		buttons: ["close"],
		hash: false,
		backFocus: false,
		autoFocus: false,
		afterShow: function () {
			$('.carousel-main,.carousel-nav').flickity('reloadCells');
			$('.carousel-main,.carousel-nav').flickity('resize');
		},
		beforeClose: function () {
			$('.price-box').removeClass('spec');
		}
	});
}

if (document.documentElement.lang === 'uk') {
	$('.woof_container_image.woof_container_pa_klass_avto.woof_container_2.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('РљР»Р°СЃ Р°РІС‚Рѕ');
	$('.woof_container_image.woof_container_pa_marki-avto.woof_container_3.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('РњР°СЂРєРё Р°РІС‚Рѕ');
	$('.woof_container_image.woof_container_pa_tip-korobki.woof_container_4.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('РўСЂР°РЅСЃРјС–СЃС–СЏ');
	var filetrButtonsBlock = document.getElementsByClassName('woof_submit_search_form_container')[0];
	if (filetrButtonsBlock) {
		filetrButtonsBlock.insertAdjacentHTML('afterbegin', '<div class=\"main-filter-title\">Р РћР—РЁРР Р•РќРР™ Р¤Р†Р›Р¬РўР </div>');
	};
} else if (document.documentElement.lang === 'en-US') {
	$('.woof_container_image.woof_container_pa_klass_avto.woof_container_2.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('Vehicle class');
	$('.woof_container_image.woof_container_pa_marki-avto.woof_container_3.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('Car brands');
	$('.woof_container_image.woof_container_pa_tip-korobki.woof_container_4.woof_container_ > div.woof_container_inner.woof_container_inner_ > h4').html('Transmission');
	var filetrButtonsBlock = document.getElementsByClassName('woof_submit_search_form_container')[0];
	if (filetrButtonsBlock) {
		filetrButtonsBlock.insertAdjacentHTML('afterbegin', '<div class=\"main-filter-title\">ADVANCED FILTER</div>');
	};
} else if (document.documentElement.lang === 'ru-RU') {
	var filetrButtonsBlock = document.getElementsByClassName('woof_submit_search_form_container')[0];
	if (filetrButtonsBlock) {
		filetrButtonsBlock.insertAdjacentHTML('afterbegin', '<div class=\"main-filter-title\">Р РђРЎРЁРР Р•РќРќР«Р™ Р¤РР›Р¬РўР </div>');
	};
}

//////РїРѕРїР°Рї РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ///
var buttons = document.querySelectorAll('.popup_buy');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const carCost = parseInt(button.getAttribute('data-car-cost')) || 10990;
        const productName = button.getAttribute('data-product-label');
        const calculatorPopup = document.querySelector('#calculator');

        if (calculatorPopup) {
            // РЈСЃС‚Р°РЅРѕРІРєР° СЃС‚РѕРёРјРѕСЃС‚Рё Рё РЅР°Р·РІР°РЅРёСЏ РїСЂРѕРґСѓРєС‚Р° РІ Р°С‚СЂРёР±СѓС‚С‹ РїРѕРїР°РїР°
            calculatorPopup.setAttribute('data-car-cost', carCost);
            calculatorPopup.setAttribute('data-product-name', productName);

            // РЎР±СЂРѕСЃ Р·РЅР°С‡РµРЅРёР№ РІ С„РѕСЂРјРµ РїРµСЂРµРґ РѕС‚РѕР±СЂР°Р¶РµРЅРёРµРј РїРѕРїР°РїР°
            calculatorPopup.querySelector('#initialPayment').value = '';
            calculatorPopup.querySelector('#months').value = '12'; 
            calculatorPopup.querySelector('#monthsValue').textContent = '12';

            setInitialPayment(carCost);
            calculateAndUpdate(carCost);
        }

        $.fancybox.open({
            src  : '#calculator',
            type : 'inline'
        });
    });
});


    function setInitialPayment(carCost) {
        const minInitialPayment = Math.round(carCost * 0.1);
        const initialPaymentInput = document.getElementById('initialPayment');
        initialPaymentInput.placeholder = minInitialPayment.toString();
        initialPaymentInput.min = minInitialPayment;
    }

    function calculateAndUpdate(carCost) {
        const currencyRate = 38; // РљСѓСЂСЃ USD Рє UAH
        const registration = 100; // РџРµСЂРµРѕС„РѕСЂРјР»РµРЅРёРµ
        const initialPaymentInput = document.getElementById('initialPayment');
        let initialPayment = parseFloat(initialPaymentInput.value) || Math.round(carCost * 0.1);

        // РџСЂРѕРІРµСЂРєР° РЅР° РґРѕРїСѓСЃС‚РёРјРѕСЃС‚СЊ Р·РЅР°С‡РµРЅРёСЏ РїРµСЂРІРѕРЅР°С‡Р°Р»СЊРЅРѕРіРѕ РІР·РЅРѕСЃР°
        const minInitialPayment = Math.round(carCost * 0.1);
        const maxInitialPayment = Math.round(carCost * 0.5);
        if (initialPayment < minInitialPayment || initialPayment > maxInitialPayment) {
            return; // Р’С‹С…РѕРґ РёР· С„СѓРЅРєС†РёРё, РµСЃР»Рё Р·РЅР°С‡РµРЅРёРµ РЅРµРґРѕРїСѓСЃС‚РёРјРѕ
        }

        const months = parseInt(document.getElementById('months').value);
        const kasko = Math.round(carCost * 0.06);
        const osago = Math.round(carCost * 0.005);

        const interestRates = {
            '12': 0.2935,
            '18': 0.4392,
            '24': 0.5902,
            '30': 0.73075,
            '36': 0.878
        };

        if (!months || isNaN(months) || months === 0) {
            return;
        }

        const creditAmount = carCost - initialPayment;
        const interestRate = interestRates[months.toString()] || 0;
        const totalCost = Math.round((creditAmount + (creditAmount * interestRate) + (kasko + osago) * (months / 12) + registration) / months);

        const monthlyPayment = totalCost;
        const monthlyPaymentUAH = Math.round(monthlyPayment * currencyRate);

        document.querySelector('.rateAmount').innerHTML = `${monthlyPayment} $<span>/РјС–СЃ</span>`;
        document.querySelector('.rateConversion').textContent = `${monthlyPaymentUAH} РіСЂРЅ`;
    }

    document.getElementById('initialPayment').addEventListener('blur', function() {
        const carCost = parseInt(document.querySelector('#calculator').getAttribute('data-car-cost')) || 10990;
        const initialPaymentInput = this;
        let initialPayment = parseFloat(initialPaymentInput.value);

        const minInitialPayment = Math.round(carCost * 0.1);
        const maxInitialPayment = Math.round(carCost * 0.5);
        if (isNaN(initialPayment) || initialPayment < minInitialPayment) {
            initialPaymentInput.value = minInitialPayment;
        } else if (initialPayment > maxInitialPayment) {
            initialPaymentInput.value = maxInitialPayment;
        }

        calculateAndUpdate(carCost);
    });

		document.getElementById('months').addEventListener('input', function() {
			const carCost = parseInt(document.querySelector('#calculator').getAttribute('data-car-cost')) || 10990;
			document.getElementById('monthsValue').textContent = this.value;
			calculateAndUpdate(carCost);
	});

    document.getElementById('initialPayment').addEventListener('input', function() {
        const carCost = parseInt(document.querySelector('#calculator').getAttribute('data-car-cost')) || 10990;
        calculateAndUpdate(carCost);
    });



		///////РІС‚РѕСЂРѕР№ РїРѕРїР°Рї///
		var openCalculator2Button = document.querySelector('.calc_credit');

openCalculator2Button.addEventListener('click', function(event) {
    event.preventDefault();

    // Р—Р°РєСЂС‹С‚РёРµ РїРµСЂРІРѕРіРѕ РїРѕРїР°РїР°
    $.fancybox.close();

    // РЎР±РѕСЂ РґР°РЅРЅС‹С… РёР· РїРµСЂРІРѕРіРѕ РїРѕРїР°РїР°
    var initialPayment = document.getElementById('initialPayment').value;
    var months = document.getElementById('months').value;
    var rateAmount = document.querySelector('.rateAmount').textContent.trim();
    var productName = document.querySelector('#calculator').getAttribute('data-product-name');

    // РЈСЃС‚Р°РЅРѕРІРєР° Р·РЅР°С‡РµРЅРёР№ РІ СЃРєСЂС‹С‚С‹Рµ РїРѕР»СЏ РІС‚РѕСЂРѕРіРѕ РїРѕРїР°РїР°
		document.getElementById('hiddenAuto').value = productName; 
    document.getElementById('hiddenInitialPayment').value = initialPayment;
    document.getElementById('hiddenMonths').value = months;
    document.getElementById('hiddenRateAmount').value = rateAmount;
    // РћС‚РєСЂС‹С‚РёРµ РІС‚РѕСЂРѕРіРѕ РїРѕРїР°РїР°
    $.fancybox.open({
        src  : '#calculator2',
        type : 'inline'
    });
});
		



//////РїРѕРїР°Рї РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ final///