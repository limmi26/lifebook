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
                console.log(`error`);
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

    static NewBook(req, res) {
        let payload = req.body;
        payload.book_price = +req.body.book_price;
        payload.book_stock = +req.body.book_stock;

        for (const each in payload) {
          if (!payload[each]) {
            payload[each] = null;
          }
        }
        console.log(payload, 'ini adalah payload');
    
        Book.addBook(payload, (err, data) => {
          if (err) {
            console.log(`error`);
          } else {
            res.json({
              title: 'API Backend Toko Buku',
              message: 'Koleksi Buku',
              status: 200,
              data
            });
          }
        });
      }

    // static UpdateBook(req, res){
    //     res.send('halaman update buku');
    // }

}

module.exports = {
    BookController,
};