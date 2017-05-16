// requires
// node modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// serve static files
app.use(bodyParser.json());
app.use(express.static(path.resolve('./server/public')));

// server port set and listenvar
var serverPort = process.env.port || 3001;
app.set('port', serverPort);

// server index file
app.get('/info', function(req, res) {
    res.send("hello from the server");
});

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});
