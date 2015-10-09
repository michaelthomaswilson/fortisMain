// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var headerHeight;
var windowHeight;

$(document).ready(function() {

	headerHeight = $("#masthead").height();
	windowHeight = $(window).innerHeight();
	console.log(windowHeight);

});