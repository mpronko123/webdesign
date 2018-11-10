$(document).ready(function(){
	// run fintion on initial page
	demoFunction();

	// run function on resize of the window
	$(window).resize(function(){

	});

	// run function of scroll
	$(window).scroll(function(){

	});

});

function demoFunction(){
	$('.five').click(function(){
		$('.number5').toggleClass('purpleBG');
	$('.four').mouseenter(function(){
		$('.number4').toggleClass('greenBG');
	$('.three').mouseenter(function(){
		$('.number3').toggleClass('big');
	$('.two').mouseleave(function(){
		$('.number2').toggleClass('small');
	$('.one').click(function(){
		$('.number1').toggleClass('spin');
		console.log('clicked');
	})
})
})
})
})
};
	


	// $('.one').click(function(){
	// 	$('.number1').toggleClass('blueBG');
		
// added message to the console,helpful
	// console.log('added bigger');
	// $('p').click(function(){
	// 	$('p').css('color', 'yellow');




// function bgChange(){
// 	$('body').addClass('blue');
// }