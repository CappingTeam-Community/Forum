/**
* Initial database for Community Web Application
* Community.sql creates the needed database and tables 
*
* @version  1.0.2
* @since    10-03-2021
* @author   Devin White
**/

USE community_db;
DROP DATABASE community_db;

CREATE DATABASE community_db;
USE community_db;

CREATE TABLE Category_tbl(
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(100) NOT NULL,
    CategoryDescription TEXT(1000000),
    CategoryImage VARCHAR(1000),
    CategoryVotes INT DEFAULT 0,
    PRIMARY KEY (CategoryID)
    );

CREATE TABLE Post_tbl(
    PostID INT NOT NULL AUTO_INCREMENT,
    CategoryID_Post INT,
    PostTitle VARCHAR(10000),
    PostBody TEXT(100000),
    PostImage VARCHAR(1000),
    PostDate DATE,
    PostVotes INT DEFAULT 0,
    CreatorID INT,
    PRIMARY KEY (PostID),
    FOREIGN KEY (CategoryID_Post) REFERENCES Category_tbl(CategoryID)
    );

CREATE TABLE User_tbl(
    UserID INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    UserName VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    CategoryID_User INT,
    PostID_User INT,
    CommentID_User INT,
    PRIMARY KEY (UserID),
    FOREIGN KEY (CategoryID_User) REFERENCES Category_tbl(CategoryID),
    FOREIGN KEY (PostID_User) REFERENCES Post_tbl(PostID)
    );

CREATE TABLE Comment_tbl(
    CommentID INT NOT NULL AUTO_INCREMENT,
    PostID_Comment INT,
    Comment TEXT(100000) NOT NULL,
    CommentDate DATE,
    CommentVotes INT DEFAULT 0,
    CommenterID INT,
    CommentTags VARCHAR(100),
    PRIMARY KEY (CommentID),
    FOREIGN KEY (PostID_Comment) REFERENCES Post_tbl(PostID)
    );
      
CREATE TABLE UserCategory(
    IDUser INT NOT NULL,
    IDCategory INT NOT NULL,
    PRIMARY KEY (IDUser, IDCategory),
    CONSTRAINT Constr_UserCategory_User_fk FOREIGN KEY (IDUser) REFERENCES User_tbl (UserID),
    CONSTRAINT Constr_UserCategory_Category_fk FOREIGN KEY (IDCategory) REFERENCES Category_tbl (CategoryID)
);

CREATE TABLE UserPost(
    IDUser INT NOT NULL,
    IDPost INT NOT NULL,
    PRIMARY KEY (IDUser, IDPost),
    CONSTRAINT Constr_UserPost_User_fk FOREIGN KEY (IDUser) REFERENCES User_tbl (UserID),
    CONSTRAINT Constr_UserPost_Post_fk FOREIGN KEY (IDPost) REFERENCES Post_tbl (PostID)
);

CREATE TABLE UserComment(
    IDUser INT NOT NULL,
    IDComment INT NOT NULL,
    PRIMARY KEY (IDUser, IDComment),
    CONSTRAINT Constr_UserComment_User_fk FOREIGN KEY (IDUser) REFERENCES User_tbl (UserID),
    CONSTRAINT Constr_UserComment_Comment_fk FOREIGN KEY (IDComment) REFERENCES Comment_tbl (CommentID)
);

SHOW FULL TABLES;
SHOW COLUMNS FROM User_tbl;
SHOW COLUMNS FROM Category_tbl;
SHOW COLUMNS FROM Post_tbl;
SHOW COLUMNS FROM Comment_tbl;
SHOW COLUMNS FROM UserCategory;
SHOW COLUMNS FROM UserComment;
SHOW COLUMNS FROM UserPost;
