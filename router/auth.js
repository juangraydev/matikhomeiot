const express = require("express");
const Router = express.Router();
const jwt = require('jsonwebtoken');
// const connection = require('../util/connection');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;  

Router.post("/signin", (req, res) => {
    // console.log("req:", req.body)
    // const {username,password} = req.body;
    // let sql = `SELECT * FROM users WHERE username="${username}" `
    
    // connection.query(sql, function (err, result, fields) {
    //     if(err) throw err;
    //     if(result[0]){
    //         console.log("password: ", password, result[0]['password'])
    //         bcryptjs.compare(password, result[0].password, function(err, results) {
    //             // result == true
    //             if(results){         
    //                 console.log("result:", result[0].username);
                    
    //                 const token = jwt.sign(result[0].username, "matik");
    //                 res.json({
    //                     token: token, 
    //                     displayName: result[0].display, 
    //                     username: result[0].username
    //                 });
    //             }
    //         });
    //         console.log("value: ", result);
            

    //     }else {
    //         res.status(403).send();
    //     }
    res.json({Test:"test"})
       
    // });


})

Router.post("/signup", (req, res) => {
    console.log("Data Recieve:", req.body)
    const {username, displayName, password} = req.body;
    const user = { name: username};
    bcryptjs.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        connection.query("INSERT INTO users(`id`, `display`, `username`, `type`, `password`) VALUES (NULL,'"+displayName+"', '"+username+"','1', '"+hash+"')");
        console.log("hash", hash);
        
    });
    res.json({accessToken: accessToken, name: username});

})

module.exports = Router;