'use stict'

/* 
 * initialization  express
 * require book controller
 * main endpoint
 * module export
*/

const express = require('express');
const bookRouter = express.Router();

// controller
const { BookController } = require('../controller/BookController');

// endpoint : home
bookRouter.get('/', BookController.FindAllBooks);

// module export
module.exports = { bookRouter };