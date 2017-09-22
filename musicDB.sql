DROP DATABASE IF EXISTS musicDB;

CREATE DATABASE musicDB;

USE musicDB;

CREATE TABLE music (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(45) NULL,
artist VARCHAR(25) NULL,
genre VARCHAR(25) NULL,
PRIMARY KEY  (id)
);

USE musicDB;

INSERT INTO music (title, artist, genre)
VALUES ("Come as You Are", "Nirvana", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("Stairway to Heaven", "Led Zeppelin", "Rock");

INSERT INTO music (title, artist, genre)
VALUES ("God Loves Ugly", "Atmosphere", "Rap");

SELECT * FROM music;