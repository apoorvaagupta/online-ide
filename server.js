/**
 * Created by bhavyaagg on 03/04/18.
 */

const express = require('express');
const app = express();
const shell = require('shelljs');
const fs = require('fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes'));

app.use(express.static(__dirname + '/public'));

app.listen(9999, () => {
  console.log("Server listening on port 9999");
})