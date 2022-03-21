'use strict'

/*
 * initialization mysql
 * import db config
 * create connection to database
 * open mysql connection
*/ 

//  initialization mysql
const mysql = require('mysql');

// import db config
const DBConfig = require('./db.config');

// create connection to database
const connectDB = mysql.createConnection ({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB
});

// open mysql connection
connectDB.connect(err => {
    if(err) throw err;
    console.log("database connect");
});

// module export
module.exports = connectDB;