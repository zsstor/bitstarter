var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
var str = buf.toString();
console.log("Echo");

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
