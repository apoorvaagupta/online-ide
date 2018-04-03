/**
 * Created by bhavyaagg on 03/04/18.
 */

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(9999, () => {
  console.log("Server listening on port 9999");
})