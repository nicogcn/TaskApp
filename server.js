//MAIN APP
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
//Routes
var tasksRoutes = require("./routes/taskRoutes");
app.use('/tasks', tasksRoutes);

app.listen(port);

console.log('Serempre task aplication started at port: ' + port);
