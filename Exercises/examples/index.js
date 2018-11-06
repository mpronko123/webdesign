$(document).ready(function(){
	// run fintion on initial page
	demoFunction();

	// run function on resize of the window
	$(window.resize(function()){});

	// run function of scroll
	$(window).scroll(function(){

	});

});

function demoFunction(){
	$('p').addClass('bigger');
// added message to the console,helpful
	console.log('added bigger');
	$('p').click(function(){
		$('p').css('color', 'yellow');

	});

}
function bgChange(){
	$('body').addClass('blue');
}