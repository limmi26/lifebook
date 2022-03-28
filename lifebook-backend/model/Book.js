'use strict'

const { raw } = require("mysql");
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
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(each => {
                    book = new Book(each.book_id, each.book_label, each.book_title, each.book_author, each.book_genre, each.book_genre, each.book_publisher, each.book_isbn, each.book_year, each.book_price, each.book_stock, each.created_at, each.updated_at);

                    books.push(book);
                }),

                console.log('result', books);
                result(null, books);
            }
        })
    }

    static showBookById(id, result) {
        /*
         * sql connection
         * query sql
         * get result
         * change to object instanse
         * send to book controller
         */ 

        let sqlQuery = `SELECT * FROM book WHERE book_id = ${id}`;
        sql.query(sqlQuery, (err, res) => {
            if(err) {
                console.log('error => /n', err);
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(each => {
                    book = new Book(each.book_id, each.book_label, each.book_title, each.book_author, each.book_genre, each.book_genre, each.book_publisher, each.book_isbn, each.book_year, each.book_price, each.book_stock, each.created_at, each.updated_at);

                    books.push(book);
                }),

                console.log('result', books);
                result(null, books);
            }

        });
    }

    static addBook(data, result) {
        let sqlQuery = `INSERT INTO book SET ?`;
        sql.query(sqlQuery, data, (err, res) => {
          if (err) {
            console.log('ini err', err);
            result(err, null);
          } else {
            console.log('ini rest');
            result(null, true);
          }
        });
    }
}


module.exports = { Book };