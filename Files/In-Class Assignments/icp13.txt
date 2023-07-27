const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const HOST = 'localhost';
const PORT = 3000;
const DIR = path.join(__dirname, '/logs');
const FILE_LOG = path.join(DIR, 'log.txt');
const HTML = '<h1>In-Class Programming 13</h1>';

// Home route
app.get('/', (req, res) => {
    fLog('Request received on:', true);

    let userAgent = req.get('user-agent');
    let hostname = req.hostname;
    let ip = req.ip;
    let protocol = req.protocol;

    fLog(`User Agent : ${userAgent}`,false);
    fLog(`Hostname : ${hostname}`,false);
    fLog(`Ip address : ${ip}`,false);
    fLog(`Protocol : ${protocol}`,false);

    res.send(HTML);
});


// Server listening
const server = app.listen(PORT, HOST, () => {
    // Create logs directory if not exists
    if (!fs.existsSync(DIR)) {
        fs.mkdirSync(DIR);
    }
    fLog('Server started at:',true);
    console.log(`Server running at http://${HOST}:${PORT}`);
});

// Function to write log information to the file
function fLog(message, useTimeStamp = true) {
    const now = new Date();
    const timestamp = useTimeStamp ? now.toLocaleString() : '';
    const logMessage = `${message} ${timestamp} \n`;
    fs.appendFileSync(FILE_LOG, logMessage, 'utf8');
}

// Create route to throw an error
app.get('/error', (req, res, next) => {
    throw new Error('Something went wrong');
});

// 404 Handler
app.use((req, res, next) => {
    fLog(`ERROR 404 generated on:`, true);
    res.status(404).send('<p>404 Not Found</p>');
});

// 500 Handler
app.use((error,req, res, next) => {
    let errCode = error.code || 500;
    let errMsg = error.message || 'Internal Server Error';
    res.status(errCode).send(`<p>${errCode} ${errMsg}</p>`);
    fLog(`ERROR ${errCode} generated on on:`, true);
});

// Event handler for SIGINT signal (Ctrl+C)
process.on('SIGINT', () => {
    fLog('SIGINT signal received on: ', true);
    fLog('Closing http server on: ', true);
    
    // Close the server
    server.close(() => {
      fLog('Http server closed on: ', true);
      process.exit(0);
    });
  });
