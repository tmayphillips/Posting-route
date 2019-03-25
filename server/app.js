const http = require('http');

// const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
const server = express()
const bodyParser = require('body-parser')

var cors = require('cors')
server.use(cors())
server.use(bodyParser.json())

server.post('/fullname',(req,res) => {
  console.log(req.body);
  let firstname = req.body.userFirstName
  let lastname = req.body.userLastName

  console.log(firstname);
  console.log(lastname);

  res.json({firstname: firstname, lastname: lastname})
})

server.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});
