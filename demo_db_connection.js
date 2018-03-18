var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "adrian.boulescu",
  password: "database_pass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
