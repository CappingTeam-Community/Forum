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
app.get('/post-category/select/:id/recent', (req, res) => {
    const id = req.params.id;
    // TODO: delete categoryname after testing
    const sqlSelectPost = "SELECT CategoryName, PostTitle, PostVotes, PostDate, PostID, PostBody, PostImage, UserName FROM Category_tbl, Post_tbl, User_tbl WHERE CategoryID = CategoryID_Post AND CategoryId = ? AND CreatorID = UserID ORDER BY PostDate DESC"
    db.query(sqlSelectPost, [id], (err, result)=> {
        if (err){
            console.log("pc error", err);
        }
        console.log('result', result);
        res.send(result);
    });
});

app.get('/post-category/select/:id/popular', (req, res) => {
    const id = req.params.id;
    // TODO: delete categoryname after testing
    const sqlSelectPost = "SELECT CategoryName, PostTitle, PostVotes, PostDate, PostID, PostBody, PostImage, UserName FROM Category_tbl, Post_tbl, User_tbl WHERE CategoryID = CategoryID_Post AND CategoryId = ? AND CreatorID = UserID ORDER BY PostVotes DESC"
    db.query(sqlSelectPost, [id], (err, result)=> {
        if (err){
            console.log("pc error", err);
        }
        console.log('result', result);
        res.send(result);
    });
});

app.get('/post-category/select/:id/oldest', (req, res) => {
    const id = req.params.id;
    // TODO: delete categoryname after testing
    const sqlSelectPost = "SELECT CategoryName, PostTitle, PostVotes, PostDate, PostID, PostBody, PostImage, UserName FROM Category_tbl, Post_tbl, User_tbl WHERE CategoryID = CategoryID_Post AND CategoryId = ? AND CreatorID = UserID ORDER BY PostDate"
    db.query(sqlSelectPost, [id], (err, result)=> {
        if (err){
            console.log("pc error", err);
        }
        console.log('result', result);
        res.send(result);
    });
});

// Select Comments under a given post
app.get('/post-comment/select/:id/recent', (req, res) => {
    const id = req.params.id;
    // TODO: delete posttitle after testing
    const sqlSelectComment = "SELECT PostTitle, Comment, CommentID, CommentDate, CommentVotes, CommentTags, UserName FROM Post_tbl, Comment_tbl, User_tbl WHERE PostID = PostID_Comment AND PostID = ? AND CommenterID = UserID ORDER BY CommentDate DESC"
    db.query(sqlSelectComment, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

//select comments by popular
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

//select comments by oldest
app.get('/post-comment/select/:id/oldest', (req, res) => {
    const id = req.params.id;
    // TODO: delete posttitle after testing
    const sqlSelectComment = "SELECT PostTitle, Comment, CommentID, CommentDate, CommentVotes, CommentTags, UserName FROM Post_tbl, Comment_tbl, User_tbl WHERE PostID = PostID_Comment AND PostID = ? AND CommenterID = UserID ORDER BY CommentID"
    db.query(sqlSelectComment, [id], (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/post-comment/select/:id/tags', (req, res) => {
    const id = req.params.id;
    // TODO: delete posttitle after testing
    const sqlSelectComment = "SELECT PostTitle, Comment, CommentID, CommentDate, CommentVotes, CommentTags, UserName FROM Post_tbl, Comment_tbl, User_tbl WHERE PostID = PostID_Comment AND PostID = ? AND CommenterID = UserID ORDER BY CommentTags DESC"
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
app.get('/category/select/', (req, res) => {
    const id = req.params.id;
    const sqlSelectCategory = "SELECT CategoryID, CategoryName, CategoryDescription, CategoryImage, CategoryVotes FROM Category_tbl"
    db.query(sqlSelectCategory, [id], (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/category/select/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelectCategory = "SELECT CategoryID, CategoryName, CategoryDescription, CategoryImage, CategoryVotes FROM Category_tbl WHERE CATEGORYID = ?"
    db.query(sqlSelectCategory, [id], (err, result)=> {
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
    console.log("id", id);
    const sqlSelect = "SELECT * FROM User_tbl WHERE UserID = ?"
    db.query(sqlSelect, [id], (err, result)=> {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send(result);
    });
});

app.get('/user/select/credentials/:email/:password', (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    const sqlSelect = "SELECT * FROM User_tbl WHERE Email = ? and Password = ?"
    db.query(sqlSelect, [email, password], (err, result)=> {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
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

    db.query(sqlInsertUsers, [FirstName, LastName, UserName, Password, Email], (err, result) => {
        console.log('api.signup.insert.result',result);
    });
    res.send()
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

//insert post
app.post('/post/insert', (req, res) => {
    const PostTitle = req.body.PostTitle;
    const PostBody = req.body.PostBody;
    const CategoryID_Post = req.body.CategoryID_Post;
    const PostDate = req.body.PostDate;
    const PostImage = req.body.PostImage;
    const CreatorID = req.body.CreatorID
    const sqlInsert = "INSERT INTO Post_tbl (PostTitle, PostBody, CategoryID_Post, PostDate, PostImage, CreatorID) VALUES (?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [PostTitle, PostBody, CategoryID_Post, PostDate, PostImage, CreatorID], (err, result)=> {
        console.log(result);
    });
});

app.post('/comment/insert', (req, res) => {
    const Comment = req.body.Comment;
    const CommentDate = req.body.CommentDate;
    const CommentTags = req.body.CommentTags;
    const PostID_Comment = req.body.PostID_Comment
    const CommenterID = req.body.CommenterID
    const sqlInsert = "INSERT INTO Comment_tbl (Comment, CommentDate, CommentTags, PostID_Comment, CommenterID) VALUES (?, ?, ?, ?, ?)"
    db.query(sqlInsert, [Comment, CommentDate, CommentTags, PostID_Comment, CommenterID], (err, result)=> {
        console.log(result);
    });
});
app.post('/user-category/insert', (req, res) => {
    const uid = req.body.uid;
    const cid = req.body.cid;
    const sqlInsert = "INSERT INTO UserCategory (IDUser, IDCategory) VALUES (?, ?)"
    db.query(sqlInsert, [uid, cid], (err, result)=> {
        console.log(result);
    });
});

app.post('/post/liked', (req, res) => {
    const PostID = req.body.PostID;
    const sqlInsert = "INSERT INTO UserPost (IDUser, IDPost) VALUES (2, ?)"
    db.query(sqlInsert, [PostID], (err, result)=> {
        console.log(result);
    });
});

app.post('/post/unliked', (req, res) => {
    const PostID = req.body.PostID;
    const sqlInsert = "DELETE UserPost FROM Post_tbl JOIN UserPost ON Post_tbl.PostID = UserPost.IDPost WHERE UserPost.IDUser = 2 AND UserPost.IDPost = ?"
    db.query(sqlInsert, [PostID], (err, result)=> {
        console.log(result);
    });
});

app.post('/post/liked/update', (req, res) => {
    const PostID = req.body.PostID;
    const sqlInsert = "UPDATE Post_tbl SET PostVotes = PostVotes + 1 WHERE PostID = ?"
    db.query(sqlInsert, [PostID], (err, result)=> {
        console.log(result);
    });
});

app.post('/post/unliked/update', (req, res) => {
    const PostID = req.body.PostID;
    const sqlInsert = "UPDATE Post_tbl SET PostVotes = PostVotes - 1 WHERE PostID = ?"
    db.query(sqlInsert, [PostID], (err, result)=> {
        console.log(result);
    });
});

app.post('/comment/liked', (req, res) => {
    const CommentID = req.body.CommentID;
    const sqlInsert = "INSERT INTO UserComment (IDUser, IDComment) VALUES (2, ?)"
    db.query(sqlInsert, [CommentID], (err, result)=> {
        console.log(result);
    });
});

app.post('/comment/unliked', (req, res) => {
    const CommentID = req.body.CommentID;
    const sqlInsert = "DELETE UserComment FROM Comment_tbl JOIN UserComment ON Comment_tbl.CommentID = UserComment.IDComment WHERE UserComment.IDUser = 2 AND UserComment.IDComment = ?"
    db.query(sqlInsert, [CommentID], (err, result)=> {
        console.log(result);
    });
});

app.post('/comment/liked/update', (req, res) => {
    const CommentID = req.body.CommentID;
    const sqlInsert = "UPDATE Comment_tbl SET CommentVotes = CommentVotes + 1 WHERE CommentID = ?"
    db.query(sqlInsert, [CommentID], (err, result)=> {
        console.log(result);
    });
});

app.post('/comment/unliked/update', (req, res) => {
    const CommentID = req.body.CommentID;
    const sqlInsert = "UPDATE Comment_tbl SET CommentVotes = CommentVotes - 1 WHERE CommentID = ?"
    db.query(sqlInsert, [CommentID], (err, result)=> {
        console.log(result);
    });
});

// Select posts under all categories in users interests
/*
app.get('/post/select/interests/:uid', (req, res) => {
    const uid = req.params.uid;
    const sqlSelectPosts = "SELECT PostTitle, PostVotes, PostID, PostDate, PostVotes, PostBody, PostImage, UserName, UserID FROM Post_tbl, User_tbl, UserCategory WHERE IDUser = ? AND IDCategory = CategoryID_Post AND CreatorID = UserID ORDER BY PostDate DESC"
    db.query(sqlSelectPosts, [uid], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    });
});*/

// Select posts under all categories in users interests
app.get('/post-category/select/interests/:uid/:sort', (req, res) => {
    const uid = req.params.uid;
    const sort = req.params.sort;
    let mySort = "";
    if (sort == "Recent") {
        mySort = "PostDate DESC";
    } else if (sort == "Popular") {
        mySort = "PostVotes DESC";
    } else if (sort == "oldest") {
        mySort = "PostDate"
    }
    const sqlSelectPosts = "SELECT PostTitle, PostVotes, PostID, PostDate, PostVotes, PostBody, PostImage, UserName, UserID FROM Post_tbl, User_tbl, UserCategory WHERE IDUser = ? AND IDCategory = CategoryID_Post AND CreatorID = UserID ORDER BY " + mySort
    db.query(sqlSelectPosts, [uid, sort], (err, result) => {
        if (err) {
            console.log(err);
        }
    res.send(result)
    });
    });

app.listen(3001, ()=>{
    console.log("Running");
});