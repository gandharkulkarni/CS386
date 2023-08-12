// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./modules/config')
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

const routes = require('./routes/routes'); // Import the routes.js file
app.use('/', routes); // Use the routes with '/' prefix
// app.use(express.static(path.join(__dirname , 'react-app')));

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});