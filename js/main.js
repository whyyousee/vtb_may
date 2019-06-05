$(document).ready(function () {

$('#popupBtn').click(function() { 
	$('#popupContact').fadeIn();
	$('.header-right-form').addClass('contactButtonActive');
});

$('#popupMail').click(function() { 
	$('#popupContact').fadeIn();
	$('.header-right-form').addClass('contactButtonActive');
});

$('.popupClose').click(function() { 
	$('#popupContact').fadeOut();
	$('.header-right-form').removeClass('contactButtonActive');
});

$(document).mouseup(function (e) { 
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('#popupContact').fadeOut();
		$('.header-right-form').removeClass('contactButtonActive');
	}
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