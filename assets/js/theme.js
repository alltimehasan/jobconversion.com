$(function(){

	"use strict";
	
	// Smooth Scrolling
	$('.navbar-light .navbar-nav .nav-link').click(function(e) {

		// Get the height of the Header
		var headerHeight = $('#header').outerHeight();
		
		var targetHref   = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 77 // Add it to the calculation here
		}, 1000);

		// After clicking on a item, the navbar will be collapsed
		$('.navbar-collapse').removeClass('show');

		e.preventDefault();
	});


	// When the user scrolls down 100px from the top of the document, header will be fixed
	window.onscroll = function() {scrollFunction();};
	var header = document.getElementById("header");
	function scrollFunction() {
	    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	        header.classList.add("is-scrolling");
	    } else {
			header.classList.remove("is-scrolling");
	    }
	}

});