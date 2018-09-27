//in order for any jQuery to work you need to add the code to call the jQuery library and add the tag to call your js file. Reference the bottom two tags before the close of the body on the Day 6 notes file.

$(document).ready(function() {
    // run function on initial page load
    // call your function by writing yourFunctionName(); below
   random();

});

//change your function name to something that makes sense. Use that name to call it above.

function random() {
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

	$('#randomImage').css({'background-image': 'url(../memes/' + images[Math.floor(Math.random() * images.length)] + ')'});
}