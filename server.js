require('dotenv').config();
const express     = require('express');
// Start up express.
const app          =  express();
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require ('body-parser');
const hotelRouter = require('./resources/hotels');

// Who is setting our port?
const PORT = process.argv[2] || process.env.PORT || 3000;
