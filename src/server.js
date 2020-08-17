
Dashboard
Issues
Pull Requests
Milestones
Explore
Notifications
 Create…
 Profile and Settings…
 docker-image / hostinfo
Unwatch
1
Star
0
Fork
0
Code
Issues
0
Pull Requests
1
Releases
0
Wiki
Activity
Settings
No Description
Manage Topics
 66 Commits
 2 Branches
 88 KiB
 Branch: master 
hostinfo/src/server.js
40 lines
941 B
Raw
Permalink
Blame
History
  
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
Powered by Gitea Version: 1.12.3 Page: 9ms Template: 2ms JavaScript licenses API Website Go1.14.6
