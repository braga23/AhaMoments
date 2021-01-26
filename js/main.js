$(document).ready(function(){
	$('.slider__top-wrapper').slick({
        infinite: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<button class="arrow-left fas fa-chevron-left"></button>',
		nextArrow: '<button class="arrow-right fas fa-chevron-right"></button>',
    });
});

$(document).ready(function(){
	$('.testimonials__persons').slick({
        infinite: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        prevArrow: '<button class="testimonial-left fas fa-chevron-left"></button>',
		nextArrow: '<button class="testimonial-right fas fa-chevron-right"></button>',
    });
});
$(document).ready(function(){
		$(".hamburger").click(function(){
			$(".header__responsive-list").slideToggle("slow");
		});
		
		$(".btn__menu").click(function(){
			$(".header__responsive-list").slideToggle("slow");
		});
	});

$(document).ready(function(){
			$("#element__one").click(function(){
		$(".step").removeClass("active");
		$("#element__one").addClass("active");
		$(".arrow-one").addClass("puls");
		$(".arrow-two").removeClass("puls");
		$(".arrow-three").removeClass("puls");
		$(".arrow-four").removeClass("puls");
		$(".sort-one").css("display", "block");
		$(".sort-two").css("display", "none");
		$(".sort-three").css("display", "none");
		$(".sort-four").css("display", "none");
		$(".sort-five").css("display", "none");
		$(".steps__inner-one").css("display", "block");
			$(".succes__images-one").css("display", "block");
			$(".steps__inner-two").css("display", "none");
			$(".succes__images-two").css("display", "none");
			$(".steps__inner-three").css("display", "none");
			$(".succes__images-three").css("display", "none");
			$(".steps__inner-four").css("display", "none");
			$(".succes__images-four").css("display", "none");
			$(".steps__inner-five").css("display", "none");
			$(".succes__images-five").css("display", "none");

		});
		$("#element__two").click(function(){
		$(".step").removeClass("active");
		$("#element__one").addClass("active");
  		$("#element__two").addClass("active");
  		$(".arrow-two").addClass("puls");
  		$(".arrow-one").removeClass("puls");
  		$(".arrow-three").removeClass("puls");
  		$(".arrow-four").removeClass("puls");
  		$(".sort-one").css("display", "none");
		$(".sort-two").css("display", "block");
		$(".sort-three").css("display", "none");
		$(".sort-four").css("display", "none");
		$(".sort-five").css("display", "none");
  		$(".steps__inner-two").css("display", "block");
		$(".succes__images-two").css("display", "block");
		$(".steps__inner-one").css("display", "none");
			$(".succes__images-one").css("display", "none");
			$(".steps__inner-three").css("display", "none");
			$(".succes__images-three").css("display", "none");
			$(".steps__inner-four").css("display", "none");
			$(".succes__images-four").css("display", "none");
			$(".steps__inner-five").css("display", "none");
			$(".succes__images-five").css("display", "none");
		});


				$("#element__three").click(function(){
		$(".step").removeClass("active");
		$("#element__one").addClass("active");
  		$("#element__two").addClass("active");
  		$("#element__three").addClass("active");
  		$(".arrow-three").addClass("puls");
  		$(".arrow-one").removeClass("puls");
  		$(".arrow-two").removeClass("puls");
  		$(".arrow-four").removeClass("puls");
  		$(".sort-one").css("display", "none");
		$(".sort-two").css("display", "none");
		$(".sort-three").css("display", "block");
		$(".sort-four").css("display", "none");
		$(".sort-five").css("display", "none");
$(".steps__inner-three").css("display", "block");
			$(".succes__images-three").css("display", "block");
			$(".steps__inner-one").css("display", "none");
			$(".succes__images-one").css("display", "none");
			$(".steps__inner-two").css("display", "none");
			$(".succes__images-two").css("display", "none");
			$(".steps__inner-four").css("display", "none");
			$(".succes__images-four").css("display", "none");
			$(".steps__inner-five").css("display", "none");
			$(".succes__images-five").css("display", "none");
		});
		$("#element__four").click(function(){
		$(".step").removeClass("active");
		$("#element__one").addClass("active");
  		$("#element__two").addClass("active");
  		$("#element__three").addClass("active");
		$("#element__four").addClass("active");
		$(".arrow-four").addClass("puls");
		$(".arrow-one").removeClass("puls");
		$(".arrow-two").removeClass("puls");
		$(".arrow-three").removeClass("puls");
		$(".sort-one").css("display", "none");
		$(".sort-two").css("display", "none");
		$(".sort-three").css("display", "none");
		$(".sort-four").css("display", "block");
		$(".sort-five").css("display", "none");
		$(".steps__inner-four").css("display", "block");
			$(".succes__images-four").css("display", "block");
			$(".steps__inner-one").css("display", "none");
			$(".succes__images-one").css("display", "none");
			$(".steps__inner-three").css("display", "none");
			$(".succes__images-three").css("display", "none");
			$(".steps__inner-two").css("display", "none");
			$(".succes__images-two").css("display", "none");
			$(".steps__inner-five").css("display", "none");
			$(".succes__images-five").css("display", "none");

		});

		$("#element__five").click(function(){
		$(".step").removeClass("active");
		$("#element__one").addClass("active");
  		$("#element__two").addClass("active");
  		$("#element__three").addClass("active");
  		$("#element__four").addClass("active");
  		$("#element__five").addClass("active");
  		$(".arrow-one").removeClass("puls");
		$(".arrow-two").removeClass("puls");
		$(".arrow-three").removeClass("puls");
		$(".arrow-four").removeClass("puls");
		$(".sort-one").css("display", "none");
		$(".sort-two").css("display", "none");
		$(".sort-three").css("display", "none");
		$(".sort-four").css("display", "none");
		$(".sort-five").css("display", "block");
  		 $(".steps__inner-five").css("display", "block");
			$(".succes__images-five").css("display", "block");
			$(".steps__inner-one").css("display", "none");
			$(".succes__images-one").css("display", "none");
			$(".steps__inner-three").css("display", "none");
			$(".succes__images-three").css("display", "none");
			$(".steps__inner-four").css("display", "none");
			$(".succes__images-four").css("display", "none");
			$(".steps__inner-two").css("display", "none");
			$(".succes__images-two").css("display", "none");


		});
	});

// $(document).ready(function(){
// 		$(".step-two").click(function(){
// 			$(".steps__inner-two").css("display", "block");
// 			$(".succes__images-two").css("display", "block");
// 			$(".steps__inner-one").css("display", "none");
// 			$(".succes__images-one").css("display", "none");
// 			$(".steps__inner-three").css("display", "none");
// 			$(".succes__images-three").css("display", "none");
// 			$(".steps__inner-four").css("display", "none");
// 			$(".succes__images-four").css("display", "none");
// 			$(".steps__inner-five").css("display", "none");
// 			$(".succes__images-five").css("display", "none");
// 			// $("step-two").addClass(".active");
// 			$(".step-three").css("color", "#999");
// 			$(".step-three").css("border-color", "#999");
// 			$(".step-four").css("color", "#999");
// 			$(".step-four").css("border-color", "#999");
// 			$(".step-five").css("color", "#999");
// 			$(".step-five").css("border-color", "#999");
// 		});
// 	});
// $(document).ready(function(){
// 		$(".step-three").click(function(){
// 			$(".steps__inner-three").css("display", "block");
// 			$(".succes__images-three").css("display", "block");
// 			$(".steps__inner-one").css("display", "none");
// 			$(".succes__images-one").css("display", "none");
// 			$(".steps__inner-two").css("display", "none");
// 			$(".succes__images-two").css("display", "none");
// 			$(".steps__inner-four").css("display", "none");
// 			$(".succes__images-four").css("display", "none");
// 			$(".steps__inner-five").css("display", "none");
// 			$(".succes__images-five").css("display", "none");

// 			$(".step-two").css("color", "#47c6d9");
// 			$(".step-two").css("border-color", "#47c6d9");
// 			$(".step-three").css("color", "#47c6d9");
// 			$(".step-three").css("border-color", "#47c6d9");
// 			$(".step-four").css("color", "#999");
// 			$(".step-four").css("border-color", "#999");
// 			$(".step-five").css("color", "#999");
// 			$(".step-five").css("border-color", "#999");
// 			// $("step-two").focus();
// 			// $("step-three").addClass("active");
// 		});
// 	});
// $(document).ready(function(){
// 		$(".step-four").click(function(){
// 			$(".steps__inner-four").css("display", "block");
// 			$(".succes__images-four").css("display", "block");
// 			$(".steps__inner-one").css("display", "none");
// 			$(".succes__images-one").css("display", "none");
// 			$(".steps__inner-three").css("display", "none");
// 			$(".succes__images-three").css("display", "none");
// 			$(".steps__inner-two").css("display", "none");
// 			$(".succes__images-two").css("display", "none");
// 			$(".steps__inner-five").css("display", "none");
// 			$(".succes__images-five").css("display", "none");
// 			// $("step-two").focus();
// 			// $("step-three").focus();
// 			$(".step-two").css("color", "#47c6d9");
// 			$(".step-two").css("border-color", "#47c6d9");
// 			$(".step-three").css("color", "#47c6d9");
// 			$(".step-three").css("border-color", "#47c6d9");
// 			$(".step-four").css("color", "#47c6d9");
// 			$(".step-four").css("border-color", "#47c6d9");
// 			$(".step-five").css("color", "#999");
// 			$(".step-five").css("border-color", "#999");
// 		});
// 	});
// $(document).ready(function(){
// 		$(".step-five").click(function(){
// 			$(".steps__inner-five").css("display", "block");
// 			$(".succes__images-five").css("display", "block");
// 			$(".steps__inner-one").css("display", "none");
// 			$(".succes__images-one").css("display", "none");
// 			$(".steps__inner-three").css("display", "none");
// 			$(".succes__images-three").css("display", "none");
// 			$(".steps__inner-four").css("display", "none");
// 			$(".succes__images-four").css("display", "none");
// 			$(".steps__inner-two").css("display", "none");
// 			$(".succes__images-two").css("display", "none");
// 			// $("step-two").focus();
// 			// $("step-three").focus();
// 			// $("step-four").focus();
// 			$(".step-two").css("color", "#47c6d9");
// 			$(".step-two").css("border-color", "#47c6d9");
// 			$(".step-three").css("color", "#47c6d9");
// 			$(".step-three").css("border-color", "#47c6d9");
// 			$(".step-four").css("color", "#47c6d9");
// 			$(".step-four").css("border-color", "#47c6d9");
// 			$(".step-five").css("color", "#47c6d9");
// 			$(".step-five").css("border-color", "#47c6d9");
// 		});
// 	});
// $(document).ready(function(){
// 		$(".step-one").click(function(){
// 			// $(".steps__inner-two").css("display", "block");
// 			// $(".succes__images-two").css("display", "block");
// 			// $(".steps__inner-one").css("display", "none");
// 			// $(".succes__images-one").css("display", "none");
// 			$(".step-two").css("color", "#999");
// 			$(".step-two").css("border-color", "#999");
// 			$(".step-three").css("color", "#999");
// 			$(".step-three").css("border-color", "#999");
// 			$(".step-four").css("color", "#999");
// 			$(".step-four").css("border-color", "#999");
// 			$(".step-five").css("color", "#999");
// 			$(".step-five").css("border-color", "#999");
// 		});
// 	});