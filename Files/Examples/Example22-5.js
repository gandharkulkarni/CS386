const config = require("./modules/config"); //Getting configuration values
const express = require("express"); //Top-level function exported by the express module
const app = express(); //Instantiate express instance

//Middleware
app.use(function(req, res, next) { //Display request method and url, also secondary resources
	console.log('Request method= ' + req.method + " : " + req.url); //Display request method and url
	next(); //Go to next middleware (--> static)
})
app.use(express.static(__dirname + config.root)); //Use static middleware

app.listen(config.port,config.server, function() {//Create server
	console.log(`Express server started on ${Date()} on server ${config.server}:${config.port}`);
});


