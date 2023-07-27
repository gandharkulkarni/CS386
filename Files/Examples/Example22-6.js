const config = require("./modules/config"); //Getting configuration values
const express = require("express"); //Top-level function exported by the express module
const app = express(); //Instantiate express instance
const fs = require('fs'); //Use filesystem
let users = JSON.parse(fs.readFileSync("./modules/users.js")); //Load user data from JSON file
const objRootPages = { root: __dirname + config.root }; //Define root for serving static html pages
//Middleware
app.use(function(req, res, next) { //Display request method and url, also secondary resources
	//Using debug flag to only display message when debug is set to true
	if (config.debug) console.log('Request method= ' + req.method + " : " + req.url); //Display request method and url
	next(); //Go to next middleware (--> static)
})
app.use(express.static(__dirname + config.root)); //Use static middleware

app.get("/", function(req, res) { //root route
	res.sendFile('home.html', objRootPages); //Send html file
})
app.get("/home", function(req, res) { //home route
	res.sendFile("home.html", objRootPages); //Send html file
})
app.get("/users", function(req, res) { //users route
	strUsers = config.html_top + "<h2>List of users</h2><hr />";//Assemble html string including html_top 
	for (let index in users)  { //Loop over users object
		strUsers += users[index].name + "<br />"; //Assemble html string of users
	}
	strUsers += config.html_bottom; //Add html_bottom at the end of html string
	res.send(strUsers); //Send entire html string as response
})
app.get("/edit", function(req, res) { //edit route
	res.send(config.html_top + '<h2>Edit Users</h2>' + config.html_bottom); //Send h2 html markup
})
app.listen(config.port,config.server, function() { //Listen to incoming requests
	console.log(`Express server started on ${Date()} on server ${config.server}:${config.port}`);
});


