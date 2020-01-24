
var http = require('http');

//create a server object:
console.log("Listening on 3001")
http.createServer(function (req, res) {
  res.write('{ id:1, name:"Zac" }'); //write a response to the client
  res.end(); //end the response
}).listen(3001); //the server object listens on port 8080
