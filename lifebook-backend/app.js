'use strict'

/*
 *express init
 * setting port
 * cors init
 * dotenv init
 * body parser 
*/

// initialization dotenv
require('dotenv').config();

// initialization libraries
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {router} = require('./router/router');

// initialization PORT
const port = process.env.PORT || 3000;

// cors option origin
let originOptionCors = {
    origin: `http://localhost${port}`
}

app.use(cors(originOptionCors));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routing
app.use('/', router)

// port connection
app.listen(port, () => `port connection on ${port}`);

