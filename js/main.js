let popup = document.getElementById('popupContact'),
	popupToggle = document.getElementById('popupBtn'),
	popupToggle2 = document.getElementById('popupMail'),
	body = document.querySelector('body'),
	popupBtnStyle = document.getElementById('popupMail'),
	popupClose = document.querySelector('.popupClose');

	popupToggle.onclick = function() {
		popup.style.display="block";
		body.style.overflow="hidden";
		popupToggle.style.backgroundColor="#a01a43";
		popupToggle.style.color="#fff";
		popupToggle.style.textDecoration="none";
	};

	popupToggle2.onclick = function() {
		popup.style.display="block";
		body.style.overflow="hidden";
		popupToggle.style.backgroundColor="#a01a43";
		popupToggle.style.color="#fff";
		popupToggle.style.textDecoration="none";
	};

	popupClose.onclick = function () {
		popup.style.display="none";
		body.style.overflow="auto";
		popupToggle.style.backgroundColor="transparent";
		popupToggle.style.color="#121435";
		popupToggle.style.textDecoration="underline";
	}

	window.onclick = function (e) {
		if(e.target == popup) {
			popup.style.display="none";
			body.style.overflow="auto";
			popupToggle.style.backgroundColor="transparent";
			popupToggle.style.color="#121435";
			popupToggle.style.textDecoration="underline";
		}
	}

$(document).ready(function () {

$('.gallery').slick({
  dots: false,
  slidesToShow: 1,
  infinite: true
}); 


});