           $(window).on('load', function() {
           	$(".se-pre-con").fadeOut("slow");
           });

           function myFunction() {
           	alert("You need to be logged into your fb account before clicking this button to connect with me!!");
           }
           $(window).scroll(function() {
           	var height = $(window).scrollTop();
           	if (height > 100) {
           		$('#back2Top').fadeIn();
           	} else {
           		$('#back2Top').fadeOut();
           	}
           });
           $(document).ready(function() {
           	$("#back2Top").click(function(event) {
           		event.preventDefault();
           		$("html, body").animate({
           			scrollTop: 0
           		}, "slow");
           		return false;
           	});
           });
           $(function() {
           	$('.scroll-dn').click(function() {
           		$('html, body').animate({
           			scrollTop: $('div.Template').offset().top
           		}, 'slow');
           		return false;
           	});
           });
           $(function() {
           	$('.scroll-down').click(function() {
           		$('html, body').animate({
           			scrollTop: $('div.Bg').offset().top
           		}, 'slow');
           		return false;
           	});
           });
           $(function() {
           	$('.scroll-dw').click(function() {
           		$('html, body').animate({
           			scrollTop: $('div#footer').offset().top
           		}, 'slow');
           		return false;
           	});
           });
           var slideIndex = 0;
           showSlides();

           function showSlides() {
           	var i;
           	var slides = document.getElementsByClassName("mySlides");
           	var dots = document.getElementsByClassName("dot");
           	for (i = 0; i < slides.length; i++) {
           		slides[i].style.display = "none";
           	}
           	slideIndex++;
           	if (slideIndex > slides.length) {
           		slideIndex = 1
           	}
           	for (i = 0; i < dots.length; i++) {
           		dots[i].className = dots[i].className.replace(" active", "");
           	}
           	slides[slideIndex - 1].style.display = "block";
           	dots[slideIndex - 1].className += " active";
           	setTimeout(showSlides, 4000);
           }