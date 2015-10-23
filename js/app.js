// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var headerHeight;
/*
$(document).ready(function() {

	headerHeight = $("#masthead").height();
	height = $(window).innerHeight();
	$('.fullscreen').css('height', '');

});
*/

$(document).ready(function() {

	headerHeight = $("#masthead").height();
	console.log("header: " + headerHeight);

  	$('a.scroll').click(function() {//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
  		var href = $(this).attr('href');
		//$.scrollTo(href, 500,{ offset: -headerHeight, easing:'easeOutCubic' });
		$.scrollTo($(href).offset().top, 500, {easing:'easeOutCubic'});

		//return false;
	});
});