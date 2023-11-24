/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */
( function( $ ) {
	"use strict";
// Enable menu toggle for small screens.
	$(document).ready(function() {
		$('.newsletterpopup .close-popup').on( "click", function(){
			_wpbingo_HideNLPopup();
		});
		$('.popupshadow').on( "click", function(){
			_wpbingo_HideNLPopup();
		});			
	});
	/* Show/hide NewsLetter Popup */
	$( window ).load(function() {
		_wpbingo_ShowNLPopup();
		_wpbingo_campbar();
	});	
	/* Function Show NewsLetter Popup */
	function _wpbingo_ShowNLPopup() {
		if($('.newsletterpopup').length){
			var cookieValue = $.cookie("funio_lpopup");
			if(cookieValue == 1) {
				$('.newsletterpopup').hide();
				$('.popupshadow').hide();
			}else{
				$('.newsletterpopup').show();
				$('.popupshadow').show();
			}				
		}
	}
	/* Function Hide NewsLetter Popup when click on button Close */
	function _wpbingo_HideNLPopup(){
		$('.newsletterpopup').hide();
		$('.popupshadow').hide();
		if($('input:checked','.hidden-popup-newsletter').length > 0){
			$.cookie("funio_lpopup", 1, { expires : 24 * 60 * 60 * 1000 });
		}
	}
	function _wpbingo_campbar(){
		$(".close-campbar").on( "click", function() {
			$('.header-campbar').slideUp();
			$.cookie("funio_campbar", 1, { expires : 24 * 60 * 60 * 1000 });
		});
		var cookieValue = $.cookie("funio_campbar");
		if(cookieValue == 1) {
			$('.header-campbar').hide();
		}	
	}	
} )( jQuery );