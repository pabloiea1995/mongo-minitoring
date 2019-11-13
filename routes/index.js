var express = require('express');
var router = express.Router();
var path = require('path');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
/* GET mongo database statistic */
router.get('/db/statistics', function(req, res) {

  // Connection URL
 
// Database Name of the database to monitor
//const dbName = 'mongo-minitoring-load';
 const dbName = 'testload'
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true },function(err, client) {
  
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  db.stats((err, stats) => {

    if (err) throw err;

    console.log(stats);
    res.json(stats)
    
})
  client.close();
});
 
});

/* GET mongo collection statistic */
router.get('/collection/:collection/statistics', function(req, res) {

  // Connection URL

 var colereq = req.params.collection;
// Database Name of the database to monitor
//const dbName = 'mongo-minitoring-load';
 const dbName = 'testload'
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true },function(err, client) {
  
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const col = db.collection(colereq)
  col.stats((err, stats) => {

    if (err) throw err;

    console.log(stats);
    res.json(stats)
    
})
  client.close();
});
 
});
/* GET mongo collection statistic */
router.get('/collections/statistics', function(req, res) {

  // Connection URL

 var colereq = req.params.collection;
// Database Name of the database to monitor
//const dbName = 'mongo-minitoring-load';
 const dbName = 'testload'
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true },function(err, client) {
  
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  
  db.collections((err, collections) => {

    if (err) throw err;

    var collectionsList =[]

    for(var collection in collections)
    {
      collectionsList.push(collections[collection].collectionName)
    }
    res.json({
      collections:collectionsList
    })
    
})
  client.close();
});
 
});

module.exports = router;
