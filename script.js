var nav_but_mouse_handler  = function() {
    $('.nav_but').mouseover(function() {
	$(this).fadeTo("slow", 0.5);
    });

    $('.nav_but').mouseout(function() {
	$(this).fadeTo("fast", 1.0);
    });

    $('.nav_active').mouseover(function() {
	$(this).fadeTo("slow", 0.5);
    });

    $('.nav_active').mouseout(function() {
	$(this).fadeTo("fast", 1.0);
    });
};

/*
  Main function of javascript
*/
$(document).ready(function() {

    nav_but_mouse_handler();
});
