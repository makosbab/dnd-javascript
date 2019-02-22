var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var path = require('path');
var morgan = require('morgan');

const expressApp = express();
const searchRoute = require('./routes/api/search');
const port = process.env.PORT || 5000;

expressApp.use(morgan('combined'));
expressApp.use(bodyParser.json());
expressApp.use(cors());
expressApp.use(express.static(path.join(__dirname, 'public')));
expressApp.use('/api/search', searchRoute);

expressApp.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});