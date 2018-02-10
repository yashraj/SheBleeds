// window height
var windowHeight = $(window).height();

// banner height
$(".sb-content .sb-img").css("height",windowHeight - 90);

// page load animation
$(window).on('load', function(){
	$(".se-pre-con").fadeOut("slow");
});


// window height
var wh = $(".journey-desc").innerHeight();

// banner height
$(".journey-img").css("height",wh);