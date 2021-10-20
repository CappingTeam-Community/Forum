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

app.get('/post/select', (req, res) => {
    const sqlSelectPost = "SELECT PostTitle, PostVotes FROM Category_tbl, Post_tbl WHERE CategoryID = CategoryID_Post ORDER BY PostID DESC"
    db.query(sqlSelectPost, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/comment/select', (req, res) => {
    const sqlSelectComment = "SELECT CommentTags, Comment, CommentVotes FROM Post_tbl, Comment_tbl WHERE PostID = PostID_Comment AND PostID = 6;"
    db.query(sqlSelectComment, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/category/select', (req, res) => {
    const sqlSelectCategory = "SELECT CategoryName FROM Category_tbl"
    db.query(sqlSelectCategory, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/user/select/', (req, res) => {
    const sqlSelect = "SELECT * FROM User_tbl"
    db.query(sqlSelect, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

//insert into comment page
/*
app.post('/comment/insert' (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const Email = req.body.Email;

});*/

//insert insto user page
app.post('/signup/insert', (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const Email = req.body.Email;

    const sqlInsertUsers = "INSERT INTO User_tbl (FirstName, LastName, UserName, Password, Email) VALUES  (?, ?, ?, ?, ?)"

    db.query(sqlInsertUsers, [FirstName, LastName, UserName, Password, Email], (err, result)=> {
        console.log(result);
    });
;})

//insert
app.post('/category/insert', (req, res) => {
    const CategoryName = req.body.CategoryName;
    const CategoryDescription = req.body.CategoryDescription;
    const sqlInsert = "INSERT INTO Category_tbl (CategoryName, CategoryDescription) VALUES (?, ?)"
    db.query(sqlInsert, [CategoryName, CategoryDescription], (err, result)=> {
        console.log(result);
    });
});

//insert into users


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