var http = require('http');

function handle_incoming_requests(req, res){
	console.log("INCOMING REQUEST: " + req.method + " " + req.url);
	res.writeHead(200, { "Content-Type" : "application/json" });
	res.end(JSON.stringify({ error: null }) + "\n");
}

var s = http.createServer(handle_incoming_requests);
s.listen(8080);