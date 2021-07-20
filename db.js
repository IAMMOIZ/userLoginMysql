const mysql = require("mysql");
const dbConnectInfo = {
    host : "localhost",
    user : 'root',
    password : "",
    database : "mtf_vessels_accounting"
}

var dbConnection = mysql.createConnection(
    dbConnectInfo
);

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = dbConnection;