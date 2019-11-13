const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
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

    
})
  var collection = db.collection("test");
  collection.stats((err, stats) => {

    if (err) throw err;

    console.log(stats);

   
})
  
  
  client.close();
});