var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welome to front-end container');
});

app.listen(3004, function () {
  console.log('Example app listening on port 3000!');
});
