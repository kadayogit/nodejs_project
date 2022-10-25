var MongoClient = require('mongodb').MongoClient;
//create database url connection
var url = "mongodb://localhost:27017/nodejs_mongodb";

MongoClient.connect(url, function(err, db) {

//Create database query
// if(err) throw err;
// console.log('Database created!');

//Important: In MongoDB, a database is not created until it gets content!
//MongoDB waits until you have created a collection (table)

//Create collection or table query
 var dbo = db.db('nodejs_mongodb');
// dbo.createCollection("customers", function(err, res){
// if (err) throw err;
// console.log('Collection created');
// db.close();
// });

//Create insert query single document using insertOne()
// var insertObj = { name: "Mohamed Jama", phone: "736363732", address: "Hargeisa 31 may" };
// dbo.collection('customers').insertOne(insertObj,  function(err, res) {
// 	if(err) throw err;
// 	console.log('i document inserted!');
//     db.close();
// });

//Create insert query multiple documents using insertMany()
// var insertMultiple = [
//  {name: "Guled Mohamed", phone: "332292927", address: "calamadaha"},
//  {name: "Siciid Jama", phone: "482292927", address: "october"},
//  {name: "Amina Muse", phone: "672292927", address: "siiney"},
//  {name: "Abokor Hasan", phone: "46792927", address: "ahmed guray"},
//  {name: "Samira Hasan", phone: "84292927", address: "total area"},
//  {name: "Muna Liban", phone: "982292927", address: "cabaaye"}
// ];

// dbo.collection('customers').insertMany(insertMultiple, function(err, res) {
// 	if (err) throw err;
// 	console.log("number of documents inserted" + res.insertedCount);

// 	db.close();
// });

//Create find all query using find() or findOne()
//  dbo.collection('customers').find({}).toArray(function(err, result) {
// if (err) throw err;
//     console.log(result);

//     db.close();
//  });

//delete query using deleteOne() or deleteMany()
// var deleteQ = {address: 'siiney'};
// dbo.collection('customers').deleteOne(deleteQ, function(err, result) {
//      if (err) throw err;
//      console.log('1 document deleted!');
//      db.close();
// });

  //update query using updateOne() or updateMany()
  var update_address = { address: "total area" };
  var new_update_value = { $set: {name: "Sumaya Nasir", address: "new hargeisa" } };
  dbo.collection("customers").updateOne(update_address, new_update_value, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });

});