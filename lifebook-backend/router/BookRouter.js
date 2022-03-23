'use stict'

/* 
 * initialization  express
 * require book controller
 * main endpoint
 * module export class
*/

const express = require('express');
const bookRouter = express.Router();

// controller
const { BookController } = require('../controller/BookController');

// endpoint : all books
bookRouter.get('/', BookController.FindAllBooks);

// endpoint : book by id
bookRouter.get('/:id', BookController.FindBookById);

// endpoint : post by id
bookRouter.post('/post', BookController.NewBook);


// module export
module.exports = { bookRouter };