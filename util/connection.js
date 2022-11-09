const mysql = require('mysql');

var mySqlConnection = mysql.createConnection({
    host : 'sql12.freesqldatabase.com',
    user : 'sql12554580',
    password : 'gerlTvFeC9',
    database : 'sql12554580',
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