const host = '127.0.0.1' , port = 3000; //Initialize server constants
const express = require("express");//Load express module
const app = express();//Instantiate express app instance


let f_lt05 = function(req, res, next){
    if(Math.random()<0.5){
        res.send('<h1>Middleware Page </h1> Condition random < 0.5');
    }else{
        return next();
    }
}

let f_gte05 = function(req, res, next){
    res.send('<h1>Middleware Page </h1> Condition random >= 0.5');
}


app.get("/", function(req, res, next) { //Usual GET route
	res.send("<h1>Home Page</h1>"); //Sending view home
});//Ending callback function curly brace, method app.get parenthesis
app.get('/middleware',f_lt05, f_gte05);
//Middleware
//404 error, route not found
app.use(function(req, res, next) { //app.use 404 middleware
	const error = new Error("Page not found"); //store new error "Page not found" into const error
	error.status = 404;//Set error status to 404
	next(error);//Go to next middleware
});//Ending callback function curly brace, method app.use parenthesis
//Error handler middleware
app.use( function(error, req, res, next) { //app.use error middleware
	let errCode = error.status || 500; //Declare errCode, assign error.status or 500
	let errMsg = error.message || 'Internal Server Error'; //Declare errMsg, assign error.message or internal server error
    res.status(errCode); //Set status of response object to errCode
	res.send("Error: " + errCode + "\n" + errMsg); //End response, pass errror text 
});//Ending callback function curly brace, method app.use parenthesis

//Create server and listen on port
app.listen(port, host, function(){ //app.listen, get port and server, callback
	console.log( 'Express started on ' + host + ':' + //app.get server
	port + '; press Ctrl-C to terminate.' ); //app.get port
});//Ending callback function curly brace, method app.listen parenthesis


