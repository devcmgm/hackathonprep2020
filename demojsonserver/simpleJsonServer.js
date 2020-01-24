
var http = require('http');

//create a server object:
console.log("Listening on 3001")
http.createServer(function (req, res) {
  //res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "*");
  res.write('{ id:1, name:"Zac" }'); //write a response to the client
  res.end(); //end the response
}).listen(3001); //the server object listens on port 8080
