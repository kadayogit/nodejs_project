var mysql  = require('mysql');
//mysql database connection
var db = mysql.createConnection( {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodejs_db'
});

db.connect( function(err){
if(err) throw err;
console.log("Connected successfully!");

//Create dadabase query
//db.query("CREATE DATABASE nodejs_db", function(err, result) {
   //check if created success or not
//if(err) throw err;
//console.log("Database created!");

//});

//Create table query
// var sql = "CREATE TABLE staff(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(200), phone varchar(20), address varchar(100))";
//  db.query(sql, function(err, result) {
//  	if (err) throw err;
//  	console.log("Table created successfully!");
//  });

 //Insert query  
 // var sqlInsert = "INSERT INTO staff(name, phone, address)VALUE('Guled Mohamed','36328828','Pepsiga')";
 // //execute the query
 // db.query(sqlInsert, function(err, result){
 //  if (err) throw err;
 //  console.log('Table has been added new record!');
 // });

 //Select query
 // db.query("SELECT * FROM staff WHERE name LIKE 'g%'", function(err, result, fields){

 // 	if (err) throw err;
 // 	console.log(result);
 // });
 

 //Delete query
 // db.query("DELETE FROM staff WHERE address = 'jigjiga yar'", function(err, result) {
 // 	if (err) throw err;
 // 	 console.log(result);
 // });

 //Update query
 // db.query("UPDATE staff SET address ='Pepsiga' WHERE address = 'star area'", function(err, result){
 //  if(err) throw err;
 //  console.log(result.affectedRows + " record(s) updated");
 // });

 //Limit the query

 var sql = "SELECT * FROM staff LIMIT 1 OFFSET 1"; //"OFFSET 1", means starting from the second position, not the first!
   db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });


  //Join table query (users table and products table)
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
     con.query(sql, function (err, result) {
       if (err) throw err;
       console.log(result);
  });
 
});