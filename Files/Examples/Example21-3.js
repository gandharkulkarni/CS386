const htmlForm = require('./modHtmlFormGET'); //Loading string html form
const http = require('http');//Load http module
const url = require('url');//Load url module
//Create http server
const server = http.createServer(function(req, res){//Assign return value of createServer into server constant
	console.log(`Request method: ${req.method} and url: ${req.url}`);//Output request method and url
	//Create variable objURL, parse request url with true argument for query string
	let objURL = url.parse(req.url, true);
	//Check for request method and url = /
		//Send html form
	if(req.method=='GET' && req.pathname ==='/'){
		res.end(htmlForm);
	}
	//Check for request method GET and objURL pathname /form_get
	else if(req.method=='GET' && objURL.pathname ==='/form_get'){
		const objQS = objURL.query;
		let strHTML = "<h1>GET Request</h1>";
		for(let prop in objQS){
			strHTML += `<p>${prop} : ${objQS[prop]}`;
		}
		res.end(strHTML);
		//Assign query property of objURL into constant objQS
		//Assign variable strHtml h1 with string 'GET Request'
		//Loop over query object objQS using prop as iteration variable
			//Accumulate iteration variable prop, colon and value of objQS wrapped in <p> into strHTML
		//Ending for loop curly brace
		//Send strHtml
	};//Ending else if curly brace
});//Ending callback function curly brace, method parenthesis
server.listen(3000, function() {//Starting server and listening for income connections
	console.log(`Server started on port 3000 on ${new Date}`);//Display console message when server started
});//Ending callback function curly brace, method parenthesis





