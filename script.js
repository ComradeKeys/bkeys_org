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
var set_background  = function() {

    /*If it is dard outside*/
    if(h < 7 || h > 20) {
	document.body.style.backgroundColor = "rgb(34, 34, 34)";
    }
    /*It's before lunch break*/
    else if(h > 7 && h < 12) {
	document.body.style.backgroundColor = "rgb(152, 245, 255)";
    }
    /*It's the afternoon*/
    else if(h > 12 && h < 20) {
	document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }    
};

/*
Main function of javascript
*/
$(document).ready(function() {

    set_background();
    nav_but_mouse_handler();
    draw_circle();
});
