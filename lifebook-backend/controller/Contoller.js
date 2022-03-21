'use strict'
/*
 * class declaration
 * write static method
 * module export class
*/ 
class Controller {

    static Homepage(req, res) {
        res.send('ini controller');
    }
}

module.exports = {
    Controller,
};