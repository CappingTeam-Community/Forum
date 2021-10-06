/**
* Initial database for Community Web Application
* Community.sql creates the needed database and tables 
*
* @version  1.0
* @since    10-03-2021
* @author   Devin White
**/

USE community_db;
DROP DATABASE community_db;

--Creates and switches active database to 'community_db'
CREATE DATABASE community_db;
USE community_db;

--Creates all tables with appropriate attribues for database
CREATE TABLE Category_tbl(
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(100) NOT NULL,
    CategoryVotes INT DEFAULT 0,
    PRIMARY KEY (CategoryID)
    );

CREATE TABLE Post_tbl(
    PostID INT NOT NULL AUTO_INCREMENT,
    CategoryID INT,
    PostTitle VARCHAR(10000) NOT NULL,
    DateCreated DATE,
    PostVotes INT DEFAULT 0,
    Creator VARCHAR(100),
    PRIMARY KEY (PostID),
    FOREIGN KEY (CategoryID) REFERENCES Category_tbl(CategoryID)
    );

CREATE TABLE Comment_tbl(
    CommentID INT NOT NULL AUTO_INCREMENT,
    PostID INT,
    Comment TEXT(100000),
    Commenter VARCHAR(100),
    CommentVotes INT DEFAULT 0,
    CommentTags VARCHAR(100),
    CommentDate DATE,
    PRIMARY KEY (CommentID),
    FOREIGN KEY (PostID) REFERENCES Post_tbl(PostID)
    );

CREATE TABLE User_tbl(
    UserID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(100) NOT NULL,
    PassWord VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    CategoryID INT,
    PostID INT,
    CommentID INT,
    PRIMARY KEY (UserID),
    FOREIGN KEY (CategoryID) REFERENCES Category_tbl(CategoryID),
    FOREIGN KEY (PostID) REFERENCES Post_tbl(PostID),
    FOREIGN KEY (CommentID) REFERENCES Comment_tbl(CommentID)
    );

CREATE TABLE UserCategory_tbl(
    UserCategoryID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CategoryID INT,
    PRIMARY KEY (UserCategoryID),
    FOREIGN KEY (UserID) REFERENCES User_tbl(UserID),
    FOREIGN KEY (CategoryID) REFERENCES Category_tbl(CategoryID)
    );

CREATE TABLE UserPost_tbl(
    UserPostID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    PostID INT,
    PRIMARY KEY (UserPostID),
    FOREIGN KEY (UserID) REFERENCES User_tbl(UserID),
    FOREIGN KEY (PostID) REFERENCES Post_tbl(PostID)
    );

CREATE TABLE UserComment_tbl(
    UserCommentID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CommentID INT,
    PRIMARY KEY (UserCommentID),
    FOREIGN KEY (UserID) REFERENCES User_tbl(UserID),
    FOREIGN KEY (CommentID) REFERENCES Comment_tbl(CommentID)
    );


--SHOW TABLE STATUS\G
--prints active tables & table attributes
SHOW FULL TABLES;
SHOW COLUMNS FROM User_tbl;
SHOW COLUMNS FROM Category_tbl;
SHOW COLUMNS FROM Post_tbl;
SHOW COLUMNS FROM Comment_tbl;
SHOW COLUMNS FROM UserCategory_tbl;
SHOW COLUMNS FROM UserPost_tbl;
SHOW COLUMNS FROM UserComment_tbl;