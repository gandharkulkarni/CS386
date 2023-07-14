//Declaring variables
const http = require('http'), //Loading http package
	fs = require("fs"), //Loading file system
	path = require("path"), //Loading core module path
	host = '127.0.0.1', //Setting IP address of localhost
	port = 3021; //Setting port number
	
function fSend404(res){ //404 response (Not found)
	res.writeHead(404, {'Content-Type': 'text/plain'}); //Write response header
	res.write('Error 404: Resource not found.'); //Write error messsage
	res.end(); //End response and send it back to client
}

const mimeLookup = { //MIME types based on file extension
	'.js': 'application/javascript',
	'.html': 'text/html'
};
//Creating an instance of http server using createServer method
const server = http.createServer(function(req, res) { //createServer method
	let fileurl; //Declare variable to hold file path
	console.log('Request url: ' + req.url); //Display request url
	if (req.url === "/") { //Home page
		fileurl = 'index.html'; //Use index html page
	} else {
		fileurl = req.url; //Use request url to load appropriate file
	}
	let filepath = path.resolve('./' + fileurl); //Build file path
    let fileExt = path.extname(filepath); //Get extension of physical file
    let mimeType = mimeLookup[fileExt]; //Use extension for mime type

    if(!mimeType) { //Test for MIME type, if not found return 404
		console.log('MIME error'); //Display 'MIME error' in console
		fSend404(res); //If does not exist, send 404 response
		return; //Return here, we are done
    }
    fs.access(filepath, function(err) { //Test file path
		if(err){ //If file does not exist
			fSend404(res); //Send 404 response
			return; //Return here, we are done
		}
		//At this point, file exists, finally sending file
		//writeHead method allows for writing multiple items into header
		res.writeHead(200, {'Content-Type': mimeType}); //Set status code 200, content type to mime type 
		fs.createReadStream(filepath).pipe(res); //File is sent using streaming, then pipe into response
	})	  
});//Ending callback function curly brace, method parenthesis
//Setup listener on newly created instance
server.listen(port, host, function() { //listen method on server object
	//Display current server parameters
	console.log(`Server started on:
	${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} 
	at http://${host}:${port}/`);
});//Ending callback function curly brace, method parenthesis




