/* global $, jQuery, alert, console */



$(function () {
	"use strict";

	var wid = $(window).width(),
		hei = $(window).height();
		console.log(wid, hei);

		if (wid > 980 ) {

				$(".pan").addClass("border-right");
						
					
		} else {
					
				$(".pan").removeClass("border-right");
						
					
				}

		$(window).on("resize" ,function () {
				var wid = $(window).width(),
					hei = $(window).height();
				
					console.log(wid, hei);

					/*if (wid > 980 ) {

							$(".pan").addClass("pan:before");
							
						
					} else {
						
							$(".pan").removeClass("pan:before");
				
					}*/
		});
});


