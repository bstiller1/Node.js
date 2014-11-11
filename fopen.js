var fs = require('fs');
fs.open('info.txt', 'r',
function(err, handle){
if(err){
console.log("ERROR: " + err.code
	+ " ( " + err.message + ") This file doesn't exist or is corrupted.");
	return;
}
var buf = new Buffer(100000);
	
fs.read( handle, buf, 0, 100000, null,
function(err, length){
if(err){
console.log("ERROR: " + err.code
	+ " ( " + err.message + ") This file doesn't exist or is corrupted.");
	return;
}
	console.log(buf.toString('utf8', 0, length));
	fs.close(handle, function() { /* nothing happens in here */ });
	}
);
}
);