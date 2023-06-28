window.addEventListener("load", fAnimation); //DOM is ready

function fAnimation() {
	const intSquareWidth = 20, intPathWidth = 600; //Width of square and path
	//const requestID = 0; //Store ID value for animation for canceling later
	let leftPos = 0; //Initializing position from left which changes for each animation	
	const square = document.getElementById("square"); //Reference of inner div
	const path = document.getElementById("path"); //Reference to outer div
	square.style.width = intSquareWidth + "px"; //Setting width of square
	path.style.width = intPathWidth + "px"; //Setting width of path
	let requestID = requestAnimationFrame(fMoveSquare); //Calling requestAnimationFrame for first time
	function fMoveSquare() { //Nested function
		leftPos += 2; //Increment position value by 2
		console.log("Pos = " + leftPos); //Output position value
		//Defining end condition, when square left position reaches width of path minus width of square
		if (leftPos > intPathWidth - intSquareWidth) { //This is the end
				window.cancelAnimationFrame(requestID); //Cancel animation
		} else { //Did not reach end yet
			square.style.left = leftPos + "px"; //Set left attribute to new position value
			requestID = requestAnimationFrame(fMoveSquare); //Call function recursively
		}
	}
}

