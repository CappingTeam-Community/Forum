USE communitydb;
DROP DATABASE communitydb;

CREATE DATABASE communitydb;
USE communitydb;

CREATE TABLE Category(
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(100),
    CategoryVotes INT,
    PRIMARY KEY (CategoryID));

CREATE TABLE Post(
    PostID INT NOT NULL AUTO_INCREMENT,
    CategoryID INT,
    PostTitle VARCHAR(10000),
    DateCreated DATE,
    PostVotes INT,
    Creator VARCHAR(100),
    PRIMARY KEY (PostID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID));

CREATE TABLE Comment(
    CommentID INT NOT NULL AUTO_INCREMENT,
    PostID INT,
    Comment TEXT(100000),
    Commenter VARCHAR(100),
    CommentVotes INT,
    CommentTags VARCHAR(100),
    CommentDate DATE,
    PRIMARY KEY (CommentID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID));

CREATE TABLE Users(
    UserID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(100) NOT NULL,
    PassWord VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    CategoryID INT,
    PostID INT,
    CommentID INT,
    PRIMARY KEY (UserID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID),
    FOREIGN KEY (CommentID) REFERENCES Comment(CommentID));

CREATE TABLE UserCategory(
    UserCategoryID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CategoryID INT,
    PRIMARY KEY (UserCategoryID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID));

CREATE TABLE UserPost(
    UserPostID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    PostID INT,
    PRIMARY KEY (UserPostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID));

CREATE TABLE UserComment(
    UserCommentID INT NOT NUll AUTO_INCREMENT,
    UserID INT,
    CommentID INT,
    PRIMARY KEY (UserCommentID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CommentID) REFERENCES Comment(CommentID));


/*SHOW TABLE STATUS\G*/
SHOW FULL TABLES;
SHOW COLUMNS FROM Users;
SHOW COLUMNS FROM Category;
SHOW COLUMNS FROM Post;
SHOW COLUMNS FROM Comment;
SHOW COLUMNS FROM UserCategory;
SHOW COLUMNS FROM UserPost;
SHOW COLUMNS FROM UserComment;
