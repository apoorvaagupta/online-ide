/**
 * Created by bhavyaagg on 14/04/18.
 */
const express = require('express');
const route = express.Router();
const shell = require('shelljs');
const fs = require('fs');

route.post("/run", (req, res) => {
  fs.writeFileSync("test.js", req.body.sourceCode);
  let code = shell.exec("node test.js", {silent: true})
  if (code.stderr) {
    return res.send(code.stderr);
  }

  res.send(code.stdout);
})

module.exports = route;