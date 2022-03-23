'use strict'
/*
 * class declaration
 * write static method
 * add model to controller
 * module export class
*/ 

const {Book} = require('../model/Book');

class BookController {

    static FindAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if(err) {
                console.log(`controller error`);
            } else {
                res.json({
                    title: 'API backend toko buku',
                    message: 'koleksi buku',
                    status: 200,
                    data
                })                
            }
        });
    }

    static FindBookById(req, res) {
        // console.log('ini id', req.params.id);
        const { id } = req.params;
        console.log(id);

        Book.showBookById(id, (err, data) => {
            if(err) {
                console.log(err);
            } else {
                res.json({
                    title: 'API backend toko buku',
                    message: 'koleksi buku',
                    status: 200,
                    data
                })                
            }
        });
    }

}

module.exports = {
    BookController,
};