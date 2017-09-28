$(function() {

	// Custom JS
	//===================================SLIDER============================//

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	loop: true,
  	items: 1,
  	autoplay: true,
  	autoplayHoverPause: true,
  	nav: true,
  	smartSpeed: 1000,
  	navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive : {
    // breakpoint from 0 up
    0 : {
           dots: true,
           nav: false
        },
        // breakpoint from 480 up
        870 : {
          dots: false,
          nav: true
        },
    }
   });
//Products carousel
  resS();
});


window.onresize = resS;
 // var currentHam = document.querySelector('.inner-top-line');
  function resS(){
    screenW = window.innerWidth ;
    if(screenW < 700){
      $('.hamburger').css('display', 'inline-block');
    }
    if(screenW > 700){
      $('.hamburger').css('display', 'none');
    }
  }
});
