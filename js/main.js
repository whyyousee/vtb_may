$(document).ready(function () {

	$('.js-openPopupDestkop').click(function(event) { 
		event.preventDefault();

		var self = $(this);

		$('.overlay').fadeIn(300);
		$('.popup').fadeIn(300);
		self.addClass('contactButtonActive');
		disablePageScroll();
	});

	$('.js-openPopupMail').click(function() { 
		event.preventDefault();

		$('.overlay').fadeIn(300);
		$('.popup').fadeIn(300);
		$('.header-right-form').addClass('contactButtonActive');
	});

	$('.js-popupClose').click(function() { 
		$('.overlay').fadeOut(300);
		$('.popup').fadeOut(300);
		$('.header-right-form').removeClass('contactButtonActive');
	});

	$('.overlay').click(function() { 
		$('.overlay').fadeOut(300);
		$('.popup').fadeOut(300);
		$('.header-right-form').removeClass('contactButtonActive');
	});

$('.gallery').slick({
  dots: false,
  slidesToShow: 1,
  infinite: true
}); 

$('#formValidate').validate({
	rules: {
		name: {
			required: true,
			minlength: 3
		},
		number: {
			required: true
		}
	},
	messages: {
		name: {
			required: 'Обязательное поле',
			minlength:  jQuery.validator.format('Минимальная длина имени — {0} символа')
		},
		number: {
			required: 'Обязательное поле'
		}
	},
	submitHandler: function() {
		alert('Форма отправлена!');
	}
});

$('#phone').mask("+7 999 999-99-99")



});