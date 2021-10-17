const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password'
});

db.connect((err) => {
    if(err){
        throw err;
        }
        console.log('connected');
});

app.get('/', (req, res) => {
    let sql = 'CREATE DATABASE community_db;'
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("gworks");
    });
});
/*
app.get("/", (req, res)=> {
    const sqlInsert = 
    "INSERT INTO Category_tbl (CategoryID, CategoryName, CategoryVotes) VALUES(2, 'Marvel', 2000000);"
    db.query(sqlInsert, (err, result) => {
        res.send("gworks");
    });
});
*/
app.listen(3001, ()=>{
    console.log("Running");
});