var express = require('express');
var app = express();
const mongo = require('./mongo');
var assert = require('assert');
const testSchema = require('./schema/testschema')

var url = 'mongodb://localhost9000'

app.get('/', function(req, res){
   res.send("Hello world!");
});

const connectToMongoDB = async () => {
   await mongo().then(async (mongoose) => {
     try{
       console.log('Connected to mongodb');
       const test = {
         name: "Pete Peterson",
         id: 123
       }
       
       await new testSchema(test).save()
     } finally {
       mongoose.connection.close();
     }
   })
 }

 connectToMongoDB()

 app.listen(9000, ()=>{
   console.log("Server has started");
 });