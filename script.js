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

var draw_circle  = function() {
    var c=document.getElementById("main_art");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.stroke();
}

var set_background  = function() {

    document.body.style.backgroundColor = "#FFF6B5"; 
};

$(document).ready(function() {

    set_background();
    nav_but_mouse_handler();
    draw_circle();
});
