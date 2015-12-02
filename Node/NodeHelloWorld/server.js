var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("Hello World\n");
}).listen(8090);
console.log("server listening at http://localhost:8090");
