//Create constants for host and port
const HOST = 'localhost';
const PORT = 3000;

//Load express and express-session
const express = require('express');
const session = require('express-session');

//Instantiate express
const app = express();

//Load file icp15_html.js and store in variable html
const html = require('./icp15_html');

//Use middleware session
app.use(
  session({
    secret: 'UsF-s$cr$t', //secret key
    resave: true,
    saveUninitialized: true,
  })
);

//Use middleware urlencoded
app.use(express.urlencoded({ extended: true }));

//Create a get route for root ('/')
app.get('/', (req, res) => {
    // Set variable sSession to the session object of the request
    sSession = req.session;
    // Test whether property user of sSession (from form name attribute user) exists
    if (sSession.user) {
        // If yes, redirect (code 303) to route ‘/admin’
        res.redirect(303, '/admin');
        return; // Preceded by a return (to exit)
    } else {
        // If no, return login form as in step 2
        const loginForm = html.top + html.login + html.bottom;
        res.send(loginForm);
    }
});

//Get route for '/admin'
app.get('/admin', (req, res) => {
    // Set variable sSession to the session object of the request
    sSession = req.session;

    // Test whether property user of sSession exists
    if (!sSession.user) {
        // If no, redirect to ‘/’ using code 303
        res.redirect(303, '/');
        return; // Preceded by a return (to exit)
    } else {
        // If yes, create variable strHTML using admin property of html wrapped in top and bottom properties
        const strHTML = html.top + html.admin + html.bottom;

        // Send strHtml back to the client
        res.send(strHTML);
    }
});

//get route for '/logout'
app.get('/logout', (req, res) => {
    // Destroy session here
    req.session.destroy(() => {
      // Send loggedOut html wrapped in top and bottom html
      const loggedOutHtml = html.top + html.loggedOut + html.bottom;
      res.send(loggedOutHtml);
    });
});

//post route for '/login'
app.post('/login', (req, res) => {
    // Set variable sSession to the session object of the request
    sSession = req.session;

    // Assign the property user of the request body into sSession.user
    sSession.user = req.body.user;

    // Redirect to '/admin' with code 303
    res.redirect(303, '/admin');
});

//Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
