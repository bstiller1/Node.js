var http = require('http');

function process_request(req,res){
	res.end("Hello Node.JS");
}

var s = http.createServer(process_request);
s.listen(8080);