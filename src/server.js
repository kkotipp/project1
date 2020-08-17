var express = require('express');
var app = express();
var audit = require('express-requests-logger')

app.use(audit({}));

app.get('/health', function (req, res) {
  res.send(JSON.stringify({"client":{"message":"ok","ok":true}}));
});

app.get('/', function (req, res) {

   // console.log(req.get("X-Forwarded-For") + " : " + req.method + " " + req.originalUrl + " (Authorization: " + req.get("Authorization") + ")")

  res.header('Content-Type', 'text/html; charset=UTF-8');
  res.status(200);
  let ret = {};

  let out = '<html>';
  out += '<font face="verdana">'

  out += 'OK<br/>'

  out += '<hr/>'

  for(let key in req.headers) 
    out += key + " -> " + req.headers[key] + '<br/>'

  out += 'ip -> ' + req.ip;
  out += '</font></html>';
  res.send(out);

});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s !!!', port);
});
module.exports = server;
