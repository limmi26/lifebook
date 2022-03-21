'use stict'

/* 
 * initialization  express
*/

const express = require('express');
const router = express.Router();

// controller
const { Controller } = require('../controller/Contoller');

// book controller
const { bookRouter } = require('./BookRouter');

// endpoint : home
router.get('/', Controller.Homepage)

// endpoint : books
router.use('/books', bookRouter);
// module export
module.exports = { router };