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
  // , (code, stdout, stderr) => {
  //   console.log(code)
  //   console.log(stdout)
  //   console.log(stderr)
  //   res.send("Hello");
  // })

  console.log(code)
  console.log(code.code)
  console.log(code.stdout)
  console.log(code.stderr)
  res.send(code.stdout);
})

app.use(express.static(__dirname + '/public'));

app.listen(9999, () => {
  console.log("Server listening on port 9999");
})