//in order for any jQuery to work you need to add the code to call the jQuery library and add the tag to call your js file. Reference the bottom two tags before the close of the body on the Day 6 notes file.

$(document).ready(function() {
    // run function on initial page load
    // call your function by writing yourFunctionName(); below
   random();

});

//change your function name to something that makes sense. Use that name to call it above.

function random() {
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg','11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg','21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg','26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg'];

	$('#randomImage').css({'background-image': 'url(memes/' + images[Math.floor(Math.random() * images.length)] + ')'});
}