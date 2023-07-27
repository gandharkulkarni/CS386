const http = require('http');//Load http module
//Create http server
const server = http.createServer(function(req, res){//Assign return value of createServer into server constant
	if (req.method === 'GET'){ //Check for request method
		//Writing response headers
		//Set Content-Type using setHeader method
		//Add header test property with value 'This is a test'
		//Store request headers object using getHeaders() method in constant resHeaders
		//Declare string variable strHeaders and initialize to empty string
		//Loop over all properties p in response header object resHeaders
			//Accumulate string of li elements using p and resHeaders[p]
		//Ending for loop curly brace
		//Use method writeHead to put http code 200 and string 'Example 21-6 Successful Request'
        //Send html string back using method end
		res.end(`<html<head><meta charset="UTF-8"></head><body><h1>Response Headers</h1>
		<p>Response header properties on ${new Date()}:</p>
		<ul> ${strHeaders} </ul>
		</body></html>`);//Merging strHeaders into html markup
	};//Ending if curly brace
});//Ending callback function curly brace, method parenthesis
server.listen(3000, function() {//Starting server and listening for income connections
	console.log(`Server started on port 3000 on ${new Date}`);//Display console message when server started
});//Ending callback function curly brace, method parenthesis



