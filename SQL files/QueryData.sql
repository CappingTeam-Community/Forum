/**
* Initial database for Community Web Application
* QueryData.sql will show the queries that will be used
* on the react app for sorting comments, posts, and categories.
* also shows data joines between tables
* 
* Still need many more queries.
*
* @version  1.0.0
* @since    10-13-2021
* @author   Devin White
**/


--Sort by votes
SELECT * FROM Comment_tbl ORDER BY CommentVotes DESC;

--Sort by oldest 
SELECT * FROM Comment_tbl ORDER BY CommentID DESC;

--Sort by tags
SELECT * FROM Comment_tbl ORDER BY CommentTags DESC;

--Shows all posts within a category
SELECT CategoryID, CategoryName, PostTitle
FROM Category_tbl, Post_tbl
WHERE CategoryID = CategoryID_Post;

--Shows all comments within a post
SELECT PostID, PostTitle, Comment
FROM Post_tbl, Comment_tbl
WHERE PostID = PostID_Comment;

--Shows all comments that were made by a user
SELECT CommentID, Comment, UserName
FROM Comment_tbl, User_tbl
WHERE CommenterID = UserID, UserID=1;