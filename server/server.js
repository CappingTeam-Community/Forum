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

// Select all Posts
app.get('/post/select', (req, res) => {
    const sqlSelectPost = "SELECT PostId, PostTitle, PostVotes, PostDate, PostBody, PostImage, UserID, UserName FROM Post_tbl, User_tbl WHERE CreatorID = UserID ORDER BY PostDate"
    db.query(sqlSelectPost, (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
})

// Select Post by id
app.get('/post/select/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelectPost = "SELECT PostTitle, PostVotes, PostID, PostDate, PostVotes, PostBody, PostImage, UserName, UserID FROM Post_tbl, User_tbl WHERE PostID = ? AND CreatorID = UserID"
    db.query(sqlSelectPost, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

// Select Posts under a given category
app.get('/post-category/select/:id', (req, res) => {
    const id = req.params.id;
    // TODO: delete categoryname after testing
    const sqlSelectPost = "SELECT CategoryName, PostTitle, PostVotes, PostDate, PostID, PostBody, PostImage, UserName FROM Category_tbl, Post_tbl, User_tbl WHERE CategoryID = CategoryID_Post AND CategoryID = ? AND CreatorID = UserID"
    db.query(sqlSelectPost, [id], (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

// Select Comments under a given post
app.get('/post-comment/select/:id', (req, res) => {
    const id = req.params.id;
    // TODO: delete posttitle after testing
    const sqlSelectComment = "SELECT PostTitle, Comment, CommentID, CommentDate, CommentVotes, CommentTags, UserName FROM Post_tbl, Comment_tbl, User_tbl WHERE PostID = PostID_Comment AND PostID = ? AND CommenterID = UserID"
    db.query(sqlSelectComment, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

//select comments by likes
app.get('/post-comment/select/:id/popular', (req, res) => {
    const id = req.params.id;
    // TODO: delete posttitle after testing
    const sqlSelectComment = "SELECT PostTitle, Comment, CommentID, CommentDate, CommentVotes, CommentTags, UserName FROM Post_tbl, Comment_tbl, User_tbl WHERE PostID = PostID_Comment AND PostID = ? AND CommenterID = UserID ORDER BY CommentVotes DESC"
    db.query(sqlSelectComment, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

// Select Comment by id
app.get('/comment/select/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelectPost = "SELECT Comment, CommentVotes FROM Comment_tbl WHERE CommentID = ?"
    db.query(sqlSelectPost, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

// Select all categories
app.get('/category/select', (req, res) => {
    const sqlSelectCategory = "SELECT CategoryID, CategoryName, CategoryDescription, CategoryImage FROM Category_tbl"
    db.query(sqlSelectCategory, (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

// Select Individual User
app.get('/user/select/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM User_tbl WHERE UserID = ?"
    db.query(sqlSelect, [id], (err, result)=> {
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