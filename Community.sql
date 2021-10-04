/**
* Initial database for Community Web Application
* Community.sql creates the needed database and tables 
*
* @version  1.0
* @since    10-03-2021
* @author   Devin White
**/

USE communitydb;
DROP DATABASE communitydb;

--Creates and switches active database to 'communitydb'
CREATE DATABASE communitydb;
USE communitydb;

--Creates all tables with appropriate attribues for database
CREATE TABLE Categorytbl(
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(100),
    CategoryVotes INT,
    PRIMARY KEY (CategoryID)
    );

CREATE TABLE Posttbl(
    PostID INT NOT NULL AUTO_INCREMENT,
    CategoryID INT,
    PostTitle VARCHAR(10000),
    DateCreated DATE,
    PostVotes INT,
    Creator VARCHAR(100),
    PRIMARY KEY (PostID),
    FOREIGN KEY (CategoryID) REFERENCES Categorytbl(CategoryID)
    );

CREATE TABLE Commenttbl(
    CommentID INT NOT NULL AUTO_INCREMENT,
    PostID INT,
    Comment TEXT(100000),
    Commenter VARCHAR(100),
    CommentVotes INT,
    CommentTags VARCHAR(100),
    CommentDate DATE,
    PRIMARY KEY (CommentID),
    FOREIGN KEY (PostID) REFERENCES Posttbl(PostID)
    );

CREATE TABLE Usertbl(
    UserID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(100) NOT NULL,
    PassWord VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    CategoryID INT,
    PostID INT,
    CommentID INT,
    PRIMARY KEY (UserID),
    FOREIGN KEY (CategoryID) REFERENCES Categorytbl(CategoryID),
    FOREIGN KEY (PostID) REFERENCES Posttbl(PostID),
    FOREIGN KEY (CommentID) REFERENCES Commenttbl(CommentID)
    );

CREATE TABLE UserCategorytbl(
    UserCategoryID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CategoryID INT,
    PRIMARY KEY (UserCategoryID),
    FOREIGN KEY (UserID) REFERENCES Usertbl(UserID),
    FOREIGN KEY (CategoryID) REFERENCES Categorytbl(CategoryID)
    );

CREATE TABLE UserPosttbl(
    UserPostID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    PostID INT,
    PRIMARY KEY (UserPostID),
    FOREIGN KEY (UserID) REFERENCES Usertbl(UserID),
    FOREIGN KEY (PostID) REFERENCES Posttbl(PostID)
    );

CREATE TABLE UserCommenttbl(
    UserCommentID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CommentID INT,
    PRIMARY KEY (UserCommentID),
    FOREIGN KEY (UserID) REFERENCES Usertbl(UserID),
    FOREIGN KEY (CommentID) REFERENCES Commenttbl(CommentID)
    );


--SHOW TABLE STATUS\G
--prints active tables & table attributes
SHOW FULL TABLES;
SHOW COLUMNS FROM Usertbl;
SHOW COLUMNS FROM Categorytbl;
SHOW COLUMNS FROM Posttbl;
SHOW COLUMNS FROM Commenttbl;
SHOW COLUMNS FROM UserCategorytbl;
SHOW COLUMNS FROM UserPosttbl;
SHOW COLUMNS FROM UserCommenttbl;
