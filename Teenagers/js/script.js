$(document).ready(function() {
	var button = $('.go-top');

	button.click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});