$(document).ready(function(){
	
	/**********
	ON Spoiler
	**********/
	$(".spoiler-title").click(function(){
		if($(".spoiler").hasClass("one")){
			$(".spoiler-title").not($(this)).removeClass('active');
			$(".spoiler-text").not($(this).next()).slideUp(500);
		}
		$(this).toggleClass('active').next().slideToggle(500);
	});
	
});