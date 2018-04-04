/**
 * Created by bhavyaagg on 03/04/18.
 */

const express = require('express');
const app = express();
const shell = require('shelljs');
const fs = require('fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/test", (req, res) => {
  fs.writeFileSync("test.js", req.body.sourceCode);
  let code = shell.exec("node test.js", {silent: true})
  if (code.stderr) {
    return res.send(code.stderr);
  }

  // console.log(code)
  // console.log(code.code)
  // console.log(code.stdout)
  // console.log(code.stderr)
  res.send(code.stdout);
})

app.post("/test2", (req, res) => {
  fs.writeFileSync("test.py", req.body.sourceCode);
  let code = shell.exec("python3 test.py", {silent: true})
  if (code.stderr) {
    return res.send(code.stderr);
  }

  // console.log(code)
  // console.log(code.code)
  // console.log(code.stdout)
  // console.log(code.stderr)
  res.send(code.stdout);
})

app.use(express.static(__dirname + '/public'));

app.listen(9999, () => {
  console.log("Server listening on port 9999");
})