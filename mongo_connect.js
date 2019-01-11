// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/testdb", function(err, client) {
  if(!err) {
    var db = client.db("testdb")  
    console.log("We are connected");
    var collection = db.collection('monsters');
    var oneMonster = collection.findOne({"name" : "Aboleth"}, function(err, result){
        console.log(result.abilities);
    });
    
  }
});