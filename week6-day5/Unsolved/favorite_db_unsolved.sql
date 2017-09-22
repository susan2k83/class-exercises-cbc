-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30)NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(30)NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30)NOT NULL,
  -- Make an integer column called "score" --
  score INTEGER(10)NOT NULL
);


