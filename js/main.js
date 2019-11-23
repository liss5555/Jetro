$(function(){

  $('.slider__inner').slick({
	  slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
  	fade: true,
  	asNavFor: '.slider-nav__inner'
	});
	$('.slider-nav__inner').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider__inner',
		// centerMode: true,
		focusOnSelect: true,
		// variableWidth: true
	});
	
});