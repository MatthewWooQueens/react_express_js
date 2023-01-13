var express = require('express');
var router = express.Router();
var mongo = require('./mongo');
var assert = require('assert');
const testSchema = require('./schema/testschema')

var url = 'mongodb://localhost9000'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try{
      console.log('Connected to mongodb')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
router.get('/get-data', function(req,res,next){
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null,err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc,err){
      assert.equal(null,err);
      resultArray.push(doc);
    }, function(){
      db.close();
      res.render('index',{info: resultArray});
    });
  });
});

module.exports = router;
