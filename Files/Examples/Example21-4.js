const htmlForm = require('./modHtmlFormPOST');
const http = require('http');//Load http module
const url = require('url');//Load url module
//const parse = require('querystring').parse;//Use parse method from querystring module
//Create http server
const server = http.createServer(function(req, res){//Assign return value of createServer into server constant
	console.log(`Request method: ${req.method} and url: ${req.url}`);//Output request method and url
	objURL = url.parse(req.url,true); //Create variable objURL, parse request url with true argument for query string
	if (req.method === 'GET' && req.url === "/"){ //Check for request method and url = /
		res.end(htmlForm); //Send html form
	} else if (req.method === 'POST' && objURL.pathname === "/form_post") { //Check for request method POST and and objURL pathname /form_post
		//Initialize variable body to empty string
		let body = '';
		
		//Listen to data event using on method, callback function with parameter chunk
			  //Accumulate chunk converted to string into variable body
		req.on('data',function(chunk){
			body+= chunk.toString();
		})
		//Ending function curly brace, on method parenthesis
		req.on('end',function(){
			res.end(`<h1>Post Method</h1> ${body}`);
		})
		//Listen to end event using on method using callback function
			//Send h1 with string 'POST Method' and concatenate variable body
		//Ending function curly brace, on method parenthesis
	} //Ending else if curly brace
}) //Ending callback function curly brace, method parenthesis
server.listen(3000, function() {//Starting server and listening for income connections
	console.log(`Server started on port 3000 on ${new Date}`);//Display console message when server started
});//Ending callback function curly brace, method parenthesis





