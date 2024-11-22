$(document).ready(function(){
	
/** ON Main Slider **/
$("#main-slider").slick({
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: true,
	fade: true,
});	

/** News Rotate **/
$("#news-rotator").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true, 
	centerPadding: "",
	responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 822,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
			{
                breakpoint: 835,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]	
});
	
/** Sidebar Toggler **/
$(".sidebar-toggler .btn").click(function(){
	$(".sidebar-toggl").slideToggle();
});
	
});