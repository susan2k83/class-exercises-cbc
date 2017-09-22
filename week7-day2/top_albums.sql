/*CREATE DATABASE top_songsDB;*/

USE top_songsDB;

/*CREATE TABLE top5000(
	id INTEGER(10) PRIMARY KEY,
	artist VARCHAR(255),
    song_title VARCHAR(255),
    song_year INTEGER(10),
    total_sales DECIMAL(10, 4),
    us_sales DECIMAL(10, 4),
    uk_sales DECIMAL (10, 4),
    europe_sales DECIMAL(10, 4),
    row_number DECIMAL(10, 4)
    
);*/





CREATE TABLE top_albums(
	id INTEGER(10) PRIMARY KEY,
	artist VARCHAR(255),
    song_title VARCHAR(255),
    song_year INTEGER(10),
    total_sales DECIMAL(10, 4),
    us_sales DECIMAL(10, 4),
    uk_sales DECIMAL (10, 4),
    europe_sales DECIMAL(10, 4),
    row_number DECIMAL(10, 4)
    
);

SELECT * FROM top_albums;

