$(function() {

	/*Menu_burger*/
	$(".menu_burger").click (function() {
		$(".menu_burger, .nav").toggleClass('show');
	})

	$(".nav_link").click (function() {
		$(".menu_burger, .nav").removeClass('show');
	})

	/*Slider*/
	$('.intro_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});


	/*Moretext*/
	$(".btn--more").on("click", function(event) {
		event.preventDefault();

		$(this).prev().toggleClass("show");
	})

	/*Packages*/
	let grey = $(".btn_table--grey");
	let red = $(".btn_table--red");
	let yellow = $(".btn_table--yellow");


	grey.hover(function() {
		$(".btn_table--grey").toggleClass("see");
		$(".td:nth-child(1)").toggleClass("see");
		$(".td--price:nth-child(1)").toggleClass("see");
		$("th:nth-child(1)").toggleClass("see");
	});

	red.hover(function() {
		$(".btn_table--red").toggleClass("see");
		$(".td:nth-child(2)").toggleClass("see");
		$(".td--price:nth-child(2)").toggleClass("see");
		$("th:nth-child(2)").toggleClass("see");
	});

	yellow.hover(function() {
		$(".btn_table--yellow").toggleClass("see");
		$(".td:nth-child(3)").toggleClass("see");
		$(".td--price:nth-child(3)").toggleClass("see");
		$("th:nth-child(3)").toggleClass("see");
	});

})
