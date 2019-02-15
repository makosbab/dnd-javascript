var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
//var mongojs = require('mongojs');


const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(cors());

const port = process.env.PORT || 5000;

expressApp.listen(port, () => {
    console.log("Listening on port...");
});