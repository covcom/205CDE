-- in root folder of project, issue the following to create database
-- sqlite3 comments.db < schema.sql

DROP TABLE IF EXISTS comments_table;


CREATE TABLE comments_table (
    id integer PRIMARY KEY,
    name text NOT NULL,
    comments text NOT NULL
    );