/**
 * Created by bhavyaagg on 14/04/18.
 */
const express = require('express');
const route = express.Router();
const shell = require('shelljs');
const fs = require('fs');

route.post("/run", (req, res) => {
  fs.writeFileSync("test.py", req.body.sourceCode);
  let code = shell.exec("python3 test.py", {silent: true})
  if (code.stderr) {
    return res.send(code.stderr);
  }

  res.send(code.stdout);
})


module.exports = route;