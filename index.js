var express = require('express');
var app = express();

app.get('/:name?', function(req, res, next){
  res.send('Hello '+(req.params.name || 'World'));
});

app.listen(3000);