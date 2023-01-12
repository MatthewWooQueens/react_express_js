var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000 || process.env.PORT, ()=>console.log("Server has started"));