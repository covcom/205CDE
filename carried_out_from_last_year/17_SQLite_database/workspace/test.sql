-- http://www.sql-format.com/ is an example formatter
-- sqlite3 test.db

DROP TABLE IF EXISTS lecturers;

CREATE TABLE lecturers (
  Id integer PRIMARY KEY, 
  Name text NOT NULL, 
  Room integer, 
  Building text DEFAULT 'Engineering & Computing' 
  );

-- .tables
-- .schema lecturers

INSERT INTO lecturers
VALUES (1,
        'John',
        404,
        "Engineering and Computing");

INSERT INTO lecturers (Id, Name, Room)
VALUES (2,
        'Matt',
        418);

INSERT
OR
REPLACE INTO lecturers (id, name, room)
VALUES (3,
        'Carl',
        305);

INSERT INTO lecturers (Name)
VALUES ('Carl');

SELECT * FROM lecturers;

DELETE
FROM lecturers
WHERE id=4;

UPDATE lecturers
SET building = 'EC'
WHERE id=3;


CREATE TABLE l2 (Id, Name);

INSERT INTO l2
VALUES (2,
        'Steve');

SELECT Id + 100
FROM l2
WHERE id=2;

SELECT Id || 100
FROM l2
WHERE id=2;

CREATE TABLE l3 AS
SELECT *
FROM lecturers
WHERE id>1;

DROP TABLE l2;

DROP TABLE IF EXISTS l3;

ALTER TABLE lecturers RENAME TO l1;

ALTER TABLE l1 ADD COLUMN Age integer;

UPDATE l1
SET age=30
WHERE id =1;

UPDATE l1
SET age=38
WHERE id =2;

UPDATE l1
SET age=38
WHERE id =3;

INSERT INTO l1
VALUES(4,
       'Steve',
       301,
       'EC',
       28);

-- .mode column
-- .headers on

SELECT *
FROM l1;

SELECT id,
       name,
       room,
       age
FROM l1;

SELECT name AS 'Full Name'
FROM l1;

SELECT *
FROM l1 LIMIT 1,
              2;

SELECT *
FROM l1
ORDER BY room;

SELECT *
FROM l1
WHERE age < 35;

SELECT DISTINCT age
FROM l1;


SELECT max(age),
       min(age)
FROM l1;

SELECT 'employ name: ' || Name AS Name,
                          age
FROM l1;

SELECT count(*)
FROM l1;

SELECT avg(age)
FROM l1;

SELECT group_concat(name),
       age
FROM l1
GROUP BY age;

CREATE TABLE building (Room, Capacity);

INSERT INTO building
VALUES(404,
       3);

INSERT INTO building
VALUES(418,
       5);

INSERT INTO building
VALUES(305,
       2);

SELECT *
FROM l1
JOIN building ON l1.Room=building.Room;

SELECT *
FROM l1
INNER JOIN building ON l1.Room=building.Room;

SELECT *
FROM l1
NATURAL JOIN building;

SELECT *
FROM l1
LEFT JOIN building ON l1.Room=building.Room;

SELECT *
FROM l1 NATURAL
LEFT JOIN building;

CREATE VIEW level4 AS
SELECT *
FROM l1
WHERE room > 399;

-- .tables

CREATE UNIQUE INDEX ind_id ON l1 (id);

CREATE INDEX ind_name ON l1 (name);

-- .indices

CREATE TRIGGER update_room
UPDATE OF room ON l1 BEGIN
UPDATE building
SET room = new.room
WHERE room = old.room; END;

SELECT name
FROM sqlite_master
WHERE TYPE = 'trigger';

BEGIN TRANSACTION;

 -- some SQL code goes here
COMMIT;



