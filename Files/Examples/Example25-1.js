const host = '127.0.0.1'; //Setting host
const port = 3000; //Setting port
const express = require("express"); //Load express module
const app = express(); //Instantiate express app instance
const cookieParser = require('cookie-parser');
app.use(cookieParser())
//Routing
app.get("/", function(req, res, next) { //Usual GET route
	//throw new Error("Something went wrong!"); //Testing server error
	res.send("<h1>Home Page</h1><hr />"); //Sending view home
});//Ending callback function curly brace, method app.get parenthesis
app.get("/setcookie", function(req, res) { //Set cookie route
	//-- //Setting cookie name to cs386, value to 'cookie set on ' + current date/time
    res.cookie('cs386','cookie set on ' + new Date().toLocaleDateString());
	res.send("<h1>Home Page</h1><hr /><p>Cookie has been set.</p>"); //Sending response
});//Ending callback function curly brace, method app.get parenthesis
app.get("/getcookie", function(req, res) { //Get cookie route
	//-- //Display 'cookie: ' + cookie cs386 property in console 
    console.log('cookie: ' +req.cookies.cs386);
	res.send("<h1>Home Page</h1><hr /><p>Cookie: " + req.cookies.cs386 + " is in effect.</p>"); //Sending response including cookie object
});//Ending callback function curly brace, method app.get parenthesis
//Middleware
//404 error, route not found
app.use(function(req, res, next) { //app.use 404 middleware
	const error = new Error("Page not found"); //store new error "Page not found" into const error
	error.status = 404; //Set error status to 404
	next(error); //Go to next middleware
}); //Ending callback function curly brace, method app.use parenthesis

//Error handler middleware
app.use( function(error, req, res, next) { //app.use error middleware
	let errCode = error.status || 500; //Declare errCode, assign error.status or 500
	let errMsg = error.message || 'Internal Server Error'; //Declare errMsg, assign error.message or internal server error
    res.status(errCode); //Set status of response object to errCode
	res.send("Error: " + errCode + "\n" + errMsg); //End response, pass errror text 
}); //Ending callback function curly brace, method app.use parenthesis

//Create server and listen on port
app.listen(port, host, function(){//app.listen, get port and server, callback
	console.log( `Express started on ${host}:${port} 
	at ${new Date().toLocaleString()} 
	; press Ctrl-C to terminate.` ); 
});//Ending callback function curly brace, method app.listen parenthesis


