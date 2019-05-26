let popup = document.getElementById('popupContact'),
	popupToggle = document.getElementById('popupBtn'),
	popupToggle2 = document.getElementById('popupMail'),
	popupBtnStyle = document.getElementById('popupMail'),
	popupClose = document.querySelector('.popupClose');

	popupToggle.onclick = function() {
		popup.style.display="block";
	};

	popupToggle2.onclick = function() {
	popup.style.display="block";
	};

	popupClose.onclick = function () {
		popup.style.display="none";
	}

	window.onclick = function (e) {
		if(e.target == popup) {
			popup.style.display="none";
		}
	}

$(document).ready(function () {

$('.gallery').slick({
  dots: false,
  slidesToShow: 1,
  infinite: true
}); 


});