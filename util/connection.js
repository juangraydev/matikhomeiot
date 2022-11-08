const mysql = require('mysql');

var mySqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'matikdb',
    multipleStaments : true
})  

mySqlConnection.connect((err) => {
    if(!err){
    console.log("Succesfully Connect to MySql");
    }else {
    console.log("Failed to Connect to MySql: ", err);
    }
})

module.exports = mySqlConnection;