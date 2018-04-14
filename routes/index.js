/**
 * Created by bhavyaagg on 14/04/18.
 */
const express = require('express');
const route = express.Router();

route.use('/node', require('./node'));
route.use('/python3', require('./python3'));

module.exports = route;