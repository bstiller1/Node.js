var express = require('express');
var logger = require('morgan');
var app = express()
//.use(express.logger('dev'))
.use(express.cookieParser())
.use(function(req, res){
res.cookie("pet", "Zimbu the monkey",
{ expires: new Date(Date.now() + 86400000) });
res.end(JSON.stringify(req.query) + "\n");
})
.listen(8080);