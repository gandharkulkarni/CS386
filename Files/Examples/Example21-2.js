const http = require('http');

const port = 3000;
const host = 'localhost';

let strHeader = '';
const server  = http.createServer(function(req, res){
    const reqHeader = req.headers;
    for(header in reqHeader){
        strHeader += `<li>${header} = ${reqHeader[header]}<li>`;
    }
    res.end(`<!DOCTYPE HTML><html><body><ul>${strHeader}</ul></body></html>`);
});

server.listen(port,host);
