// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./modules/config')
const cors = require('cors');
const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

const routes = require('./routes/routes'); // Import the routes.js file
app.use('/', routes); // Use the routes with '/' prefix

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});