const express = require("express");
const app = express();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'password',
    database:'databaseName'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MySQL Server!')
})

app.get('/',(req,res)=>{
    connection.query('SELECT * from people', (err, rows)=>{
        if(err) throw err;
        console.log('The data: \n', rows);
        connection.end()
    })
})
