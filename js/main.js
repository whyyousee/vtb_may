$(document).ready(function () {

	$('.js-openPopup').click(function(event) { 
		event.preventDefault();

		var self = $(this);

		if ( $('.popup[data-popup="' + self.data('popup') + '"]').length ) {
			$('.overlay').fadeIn(300);
			$('.popup[data-popup="' + self.data('popup') + '"]').fadeIn(300);
			$('.header-right-form').addClass('contactButtonActive');
			disablePageScroll();
		}
	});

	$('.js-popupClose').click(function() { 
		$('.overlay').fadeOut(300);
		$('.popup').fadeOut(300);
		$('.header-right-form').removeClass('contactButtonActive');
		enablePageScroll();
	});

	$('.overlay').click(function() { 
		$('.overlay').fadeOut(300);
		$('.popup').fadeOut(300);
		$('.header-right-form').removeClass('contactButtonActive');
		enablePageScroll();
	});

$('.gallery').slick({
  dots: false,
  slidesToShow: 1,
  infinite: true
}); 

	$.validator.methods.tel = function(value, element) {
        return this.optional(element) || /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
	};
	$('.js-validForm').each(function() {
		var self = $(this);

		self.validate({
			errorPlacement: function(error, element) {
				return false;
			},
			submitHandler: function() {
				alert('Форма отправлена.');
			}
		});
	});

$('#phone').mask("+7 999 999-99-99")

});

function disablePageScroll() {
    $('body').css('top', (-(getBodyScrollTop())) + 'px').addClass('fixed');
}

function enablePageScroll() {
    $('body').removeClass('fixed');
    $('html, body').scrollTop(-(parseInt($('body').css('top'))));
    $(document).scrollTop(-(parseInt($('body').css('top'))));
    $(window).scrollTop(-(parseInt($('body').css('top'))));
}

function getBodyScrollTop () {
    var el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
}