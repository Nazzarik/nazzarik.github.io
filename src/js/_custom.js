$(function() {
	// 
	$('.logo-letter').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('MAN', '<span>MAN</span>'));
	});

	$('.search').click(function() {
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	});
	$(document).keyup(function(e) {
		if(e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function() {
		$('.search-field').slideUp();
	});
	$('.search-wrap').click(function(e) {
		e.stopPropagation();
	});

	$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
	});
	
	// Mobile menu slider
	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function() {
		$('.mobile-menu').stop().slideToggle();
	});

	//Header menu scroll to top:
	var prevScrollpos = window.pageYOffset;
	$(window).scroll(function() {
		var currentScrollpos = window.pageYOffset;
		if($(window).scrollTop()){
			$('#navbar').addClass('sticky');
		} else{
			$('#navbar').removeClass('sticky');
		}
		
		if(prevScrollpos > currentScrollpos){
			$('#navbar').css({"top":"0"});
		} else {
			$('#navbar').css({"top":"-65px"});
		}
		prevScrollpos = currentScrollpos;
	});

	//Card anumate 
	// $('.card').hover(function() {
  //   $(this).find('.card__description').stop().animate({
  //     height: "toggle",
  //     opacity: "toggle"
  //   }, 300);
	// });
	
	//Parallax
	// $('.parallax-window').parallax({
	// 	// speed: 0.5,
	// 	// iosFix: false,
	// 	// androidFix: false
  //   // naturalWidth: 600,
  //   // naturalHeight: 400
  // });
});