'use strict'
/*
 * class declaration
 * write static method
 * module export class
*/ 
class BookController {

    static FindAllBooks(req, res) {
        res.send('ini book controller');
    }
}

module.exports = {
    BookController,
};