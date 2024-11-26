$(document).ready(function(){

/** News Rotate **/
$("#slider-news").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true, 
	centerPadding: "",
	responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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