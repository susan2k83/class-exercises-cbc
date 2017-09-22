DROP DATABASE IF EXISTS quiz_db;
-- Creates the "favorite_db" database --
CREATE DATABASE quiz_db;
USE quiz_db;
CREATE TABLE quiz (
   ID int NOT NULL AUTO_INCREMENT, 
   row1 VARCHAR(10)NOT NULL, 
  
   row2 VARCHAR(30)NOT NULL,
  
   row3 VARCHAR(30)NOT NULL,
  
   PRIMARY KEY(id)
);
