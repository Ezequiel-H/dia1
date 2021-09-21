var express = require('express');
var routes = require('./routes.js');
var app = express();

app.use('/routes', routes);

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});