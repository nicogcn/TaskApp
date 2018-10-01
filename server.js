//MAIN APP
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
//Routes
//var persons = require("./routes");
//app.use('/persons', persons);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port);

console.log('Serempre task aplication started at port: ' + port);
