var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.get("/", function(req, res){
  res.sendfile('client/index.html');
});

var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Listening on port " + port);
});
