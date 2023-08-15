// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./modules/config')
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); // Use cors middleware

const routes = require('./routes/routes'); // Import the routes.js file
app.use('/', routes); // Use the routes with '/' prefix
app.use(express.static(path.join(__dirname , 'public', 'pages', 'react-app')));

// For all other routes, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages','react-app', 'index.html'));
});

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});