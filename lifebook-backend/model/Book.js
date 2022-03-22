'use strict'

const nodeModules = require("node-modules")

/*
 * sql init from config
 * class book init
*/

const sql = require('../config/db');

class Book {
    constructor(book_id, book_label, book_title, book_author, book_genre, book_publisher, book_isbn, book_price, book_stock, created_at, updated_at) {
        this.book_id = book_id;
        this.book_label = book_label;
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_genre = book_genre;
        this.book_publisher = book_publisher;
        this.book_isbn = book_isbn;
        this.book_price = book_price;
        this.book_stock = book_stock;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    /*
     * static methods
     * show all books
     * show book by id
     * post new book
     * update book data
     * delete book
    */ 

    static showAllBooks(result) {
        /*
         * sql connection
         * query sql
         * get result
         * change to object instanse
         * send to book controller
         */ 

        let sqlQuery = `SELECT * FROM book`;
        sql.query(sqlQuery, (err, res) => {
            if(err) {
                console.log('error => /n', err);
            } else {
                console.log('result', res);
            }
        })
    }
}


module.exports = { Book }