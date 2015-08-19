var d = new Date();
var m = d.getMinutes();
var h = d.getHours();

var nav_but_mouse_handler  = function() {
    $('.nav_but').mouseover(function() {
	$(this).fadeTo("slow", 0.5);
    });

    $('.nav_but').mouseout(function() {
	$(this).fadeTo("fast", 1.0);
    });
};

/*
Sets a background according to the time of day
*/
var set_theme  = function() {

    var background  = "rgb(255, 255, 255)";
    var primary     = "rgb(10, 40, 129)";
    var secondary   = "rgb(255, 174, 0)";
    var tertiary    = "rgb(13, 17, 254)";
    var foot_div    = " linear-gradient(to right, rgba(0, 0, 0, 0)," + primary + ", rgba(0, 0, 0, 0))";
    var nav_bar     = " linear-gradient(to top, " + tertiary + ", " + primary;
    /*If it is dard outside*/
    if(h < 7 || h > 20) {
	background  = "rgb(10, 10, 10)";
	primary     = "rgb(37, 37, 37)";
	secondary   = "rgb(72, 72, 72)";
    }

    $('body').css({ "background-color": background});
    $('h1').css({ "color": secondary});
    $('.nav_but').css({ "color": "white"});
    $('.main_nav').css({ "background-image": nav_bar});
    $('.nav_but').css({ "color": "white"});
    $('.foot_divide').css({ "background-image": foot_div});
};

/*
Main function of javascript
*/
$(document).ready(function() {

    set_theme();
    nav_but_mouse_handler();
    draw_circle();
});
