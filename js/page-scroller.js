$(document).ready(function(){
		var a = $(".nav").offset().top;

		$(document).scroll(function(){
		    if($(this).scrollTop() > a)
		    {   
		       $('.navbar').css({"background-color":"#FFEB3B","color":"#C62828"});
		    } else {
		       $('.navbar').css({"background-color":"transparent"});
		    }
		});
});