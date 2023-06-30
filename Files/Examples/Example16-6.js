//Switch html content by hovering
$(function() {
	$("#btn").click(fAnimation); //Animate image when clicking on button
})

function fAnimation() {
	fComplete('Beginning of statements');
	$("img").fadeOut(2000, function() {fComplete('fadeout complete')}) //Animation 2 seconds
		.show(2000, function() {fComplete('show complete')}) //Animation 2 seconds
		.slideUp(2000, function() {fComplete('slideUp complete')}) //Animation 2 seconds
		.slideToggle(2000, function() {fComplete('slideToggle complete')}); //Animation 2 seconds
	fComplete('End of statements');
}
function fComplete(pMessage) {
	let dt = new Date();
	let strTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "." + dt.getMilliseconds();
	console.log(`${pMessage} at: ${strTime}`);
}


