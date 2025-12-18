const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3306,
    password:"1234",
    database:"aws"
})

connection.connect(function(err){
    if (err){
        console.log('Error.....', err.sqlMessage)
    }
    else{
        console.log("Connected.....")
    }
})
module.exports = connection;

