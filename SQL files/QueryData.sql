/**
* Initial database for Community Web Application
* QueryData.sql will show the queries that will be used
* on the react app for sorting comments, posts, and categories.
* also shows data joines between tables
*
* @version  1.0.1
* @since    10-13-2021
* @author   Devin White
**/

--Sort Comments by votes
SELECT * FROM Comment_tbl ORDER BY CommentVotes DESC;

--Sort by oldest 
SELECT * FROM Comment_tbl WHERE CommentID = 2 ORDER BY CommentID DESC;

--Sort by tags
SELECT * FROM Comment_tbl WHERE PostID_comment = 6 ORDER BY CommentTags DESC;

--Shows categories (homepage)
SELECT CategoryName
FROM Category_tbl;

--Shows all posts within a category newest first(default, category page)
SELECT PostTitle, PostVotes
FROM Category_tbl, Post_tbl
WHERE CategoryID = CategoryID_Post
AND CategoryID = 1
ORDER BY PostID DESC;

--Shows all posts within category by postvotes or popularity
SELECT PostTitle, PostVotes
FROM Category_tbl, Post_tbl
WHERE CategoryID = CategoryID_Post
AND CategoryID = 1
ORDER BY PostVotes DESC;

--Default(oldest first) Shows all comments within a post (6)
SELECT CommentTags, Comment, CommentVotes
FROM Post_tbl, Comment_tbl
WHERE PostID = PostID_Comment
AND PostID = 6;

--All comments sorted by votes in specific post (6)
SELECT CommentTags, Comment, CommentVotes
FROM Post_tbl, Comment_tbl
WHERE PostID = PostID_Comment
AND PostID = 6
ORDER BY CommentVotes;

--All comments sorted by tags in specific post (6)
SELECT CommentTags, Comment, CommentVotes
FROM Post_tbl, Comment_tbl
WHERE PostID = PostID_Comment
AND PostID = 6
ORDER BY CommentTags;

--Shows all comments that were made by a user
SELECT CommentID, Comment, UserName
FROM Comment_tbl, User_tbl
WHERE CommenterID = UserID;


