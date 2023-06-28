window.addEventListener("load", function() {
	let btnAddEvt = document.getElementById("btnAddEvt"); //Reference to second button
	let name = prompt('Enter your name ');
	btnAddEvt.addEventListener("click", function() {fAddEvt(name);}); //Registering event with parameter
	btnAddEvt.addEventListener("click", fAlert); //Registering second event
	function fAddEvt(pName) {
		alert(`Hello ${pName} !`);
	}
	function fAlert() {
		alert('Event raised with addEventListener method.');
		btnAddEvt.removeEventListener("click", fAlert); //Removing event
	}
})



