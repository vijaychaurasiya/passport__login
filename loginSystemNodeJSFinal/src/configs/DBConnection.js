require('dotenv').config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'passport_test'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;
