var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'community_db'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/category/select', (req, res) => {
    const sqlSelect = "SELECT CategoryName FROM Category_tbl;"
    db.query(sqlSelect, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});
app.post('/category/insert', (req, res) => {
    const CategoryName = req.body.CategoryName;
    const sqlInsert = "INSERT INTO Category_tbl (CategoryName) VALUES (?)"
    db.query(sqlInsert, [CategoryName], (err, result)=> {
        console.log(result);
    });
});

/*
app.get('/', (req, res) => {
    const sqlSelect = "INSERT INTO Category_tbl (CategoryID, CategoryName, CategoryVotes) VALUES(3, 'Automobiles', 200000)"
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send("Hello");
    });
;})
*/

app.listen(3001, ()=>{
    console.log("Running");
});
