var express = require('express');
var app = express();
var audit = require('express-requests-logger')

app.use(audit({}));

app.get('/health', function (req, res) {
  res.send(JSON.stringify({"message":"ok"}));
});

app.get('/', function (req, res) {
  res.header('Content-Type', 'text/html; charset=UTF-8');
  res.status(200);
  let ret = {};
  for(let key in req.headers) 
    ret.key = req.headers[key];
  ret.ip = req.ip  
  res.send(req);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s !!!', port);
});

module.exports = server;
