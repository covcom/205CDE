# Database

This current module assumes some prior knowledge of SQL (220CT) and Python (121COM/122COM). However, if you aren't familiar with these, you should complete the current and next labs (No. 13 & 14) before moving on. If you know SQL and Python already, you should skip these two labs and move to lab 15 directly.

In this lab, you'll do some SQL exercises using SQLite. The purpose of these exercises is to get yourself familiar with CRUD and other SQL operations using SQLite as the database engine. Most modern websites rely on some sort of databases either SQL or NoSQL. This includes the Python-based web framework Flask, which is the focus of the remaining part of the module.

<!--![](http://images.techhive.com/images/article/2014/10/sql-nosql-b-100527236-large.idge.gif)-->
![](.md_images/sql-nosql-b-100527236-large.idge.gif)

> [Comparisons of SQL and NoSQL on Sitepoint](http://www.sitepoint.com/sql-vs-nosql-differences/). Click for the [official documentation on using SQLite 3 with Flask](http://flask.pocoo.org/docs/0.10/patterns/sqlite3/).

Bear in mind that SQL has different flavors. Being very powerful and popular, SQLite is different from other implementations such as MySQL. 

> Check out this [comparisons of SQLite vs MySQL vs PostgreSQL](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems), [an example of using SQLite in Android](https://github.com/covcom/300CEM/tree/master/Week_06_Data_persistence#lab-2-sqlite-databases).

> If you want to choose the optional module [300CEM Android Application Development](https://github.com/covcom/300CEM) you need to do it quickly as it's a fairly popular module.

    
    ├── SQLite command line   
    ├── CRUD operations   
    ├── Queries   
    │   ├── Simple selection   
    │   └── SQLite functions   
    └── Advanced features
        ├── Join   
        ├── View, index, trigger, and transaction   
        └── Normalization          


## SQLite command line

SQLite is in its latest version 3 at the moment. It doesn't require installation. Once you're in your workspace, open a terminal and type in `sqlite3`. The system will give you back version number and build time etc.

Note that the command prompt `$` has changed to `sqlite>`. This means you're inside SQLite now, you can start typing SQL commands. Hit `ctrl` + `d` to quit the SQLite environment. This is very similar to Python.

SQLite3 is available on both Linux and Mac by default. What if I use Windows? OK, you got me. I don't normally use SQLite3 directly on a Windows machine. I reckon you have a look at [SQLiteStudio](http://sqlitestudio.pl/). This software should be available on all EC machines through MyLaunch.

## CRUD operations

CRUD stands for create, read, update, and delete. It's a common set of operations we use to manipulate SQL data.

**Create**

Go into the terminal again, and issue the following command

```bash
sqlite3 test.db
```

This should create a new file test.db in your current folder. This new file is the container of your tables/views etc. And it can be copied/moved to other locations, as it's just an ordinary file (unlike MySQL).

Issue the following command in SQLite environment

```sql
CREATE TABLE lecturers (
  Id integer PRIMARY KEY, 
  Name text NOT NULL, 
  Room integer, 
  Building text DEFAULT 'Engineering & Computing' 
  );
```

There are several things going on in the code above:
* It creates a table with 4 columns. In this example, it shows staff ID, room number etc.
* In SQL we don't distinguish between lower and upper case letters. The reason that reserved words use all upper cases is for convention only.
* Each SQL statement must terminate using a semicolon ';'.
* Code above should create a table with 4 columns. `integer` and `text` are data types supported by SQLite. Other data types supported by SQLite are real, null and blob.
* PRIMARY KEY, NOT NULL, and DEFAULT are examples of constraint. Other constraints include UNIQUE, FOREIGN KEY, and CHECK.

We can use the *dot commands* to verify the table and its schema. These *dot commands* are specific to SQLite, and it can be used for many different purposes such as exporting data from a table. Click [here](https://www.sqlite.org/cli.html) for more examples.

```sql
sqlite> .tables
lecturers
sqlite> .schema lecturers
CREATE TABLE lecturers (
  Id integer PRIMARY KEY, 
  Name text NOT NULL, 
  Room integer, 
  Building text DEFAULT 'Engineering & Computing' 
  );
```

**Insert**

Run the following commands to insert some data into the table you just created

```sql
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
```

Here we used 4 different syntaxes to do the insertion, depending if you want to insert all 4 columns and if you want to use default values or not. Note in the last case we didn't supply an id. Because the Id column was declared as `integer primary key`, SQLite will treat it as *autoincrement*.

> The example above was formatted using Sublime Text with 'SQL Beautifier' addon. If you want to format your code properly like this, you'll need to use additional formatters.

![](.md_images/format.png)

The insertion results can be verified in the following

```sql
sqlite> SELECT * FROM lecturers;
1|John|404|Engineering and Computing
2|Matt|418|Engineering & Computing
3|Carl|305|Engineering & Computing
4|Carl||Engineering & Computing
```

**Delete** and **Update**

Delete and Update can be done in a simple manner

```sql
DELETE
FROM lecturers
WHERE id=4;

UPDATE lecturers
SET building = 'EC'
WHERE id=3;
```

In the code above, we delete the duplicated row No.4 and update building column of row No.3 to be 'EC'. Note that normally in programming languages `=` is used for assignment and `==` is used for testing equality. But in SQL, we don't distinguish between the two.

**More on Create**

One of the advantages (or disadvantages some may say) of SQLite is that you don't have to specify the data type. The system will cast for you when needed, as in the example below:

```sql
sqlite> CREATE TABLE l2 (Id, Name);
sqlite> 
sqlite> INSERT INTO l2
   ...> VALUES (2,
   ...>         'Steve');
sqlite> 
sqlite> SELECT Id + 100
   ...> FROM l2
   ...> WHERE id=2;
102
sqlite> 
sqlite> SELECT Id || 100
   ...> FROM l2
   ...> WHERE id=2;
2100
```

In this example, we didn't specify the data type of Id column. The system automatically cast type for us depends on if we need integer (+) or text (||).

Another way to create table is to create based on data returned from queries run on other tables, as below

```sql
CREATE TABLE l3 AS
SELECT *
FROM lecturers
WHERE id>1;
```

**Drop and Alter**

The following commands show you how to drop a table, or drop table in a 'sensitive' manner. That is, check if it exists first and then drop it.

```sql
DROP TABLE l2;

DROP TABLE IF EXISTS l3;
```

After creation, you can change certain aspects of a table. But SQLite offers few options as opposed to MySQL. 

> In SQLite it is not possible to rename a column, remove a column, or add or remove constraints from a table.

```sql
ALTER TABLE lecturers RENAME TO l1;

ALTER TABLE l1 ADD COLUMN Age integer;
```

The code above renames the table we first created to l1 (lecturers 1) and adds a column called Age.

Now run the following commands to insert data into this new column, and add an additional row for later use

```sql
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
```

 our table l1 looks like this:

```sql
sqlite> SELECT * FROM l1;
1|John|404|Engineering and Computing|30
2|Matt|418|Engineering & Computing|38
3|Carl|305|EC|38
4|Steve|301|EC|28
```

This doesn't look very nice. Use `.mode` and `.header` *dot commands* to change the output format to make it more appealing.

```sql
sqlite> .mode column
sqlite> .headers on
sqlite> SELECT * FROM l1;
Id          Name        Room        Building                   Age       
----------  ----------  ----------  -------------------------  ----------
1           John        404         Engineering and Computing  30        
2           Matt        418         Engineering & Computing    38        
3           Carl        305         EC                         38        
4           Steve       301         EC                         28        
```

## Queries

### Simple selection

The power of SQL lies within queries. With it, you can do almost everything you want.

Run the following queries on table l1 and examine different outputs.

```sql
sqlite> SELECT *
   ...> FROM l1;
Id          Name        Room        Building                   Age       
----------  ----------  ----------  -------------------------  ----------
1           John        404         Engineering and Computing  30        
2           Matt        418         Engineering & Computing    38        
3           Carl        305         EC                         38        
4           Steve       301         EC                         28        
sqlite> 
sqlite> SELECT id,
   ...>        name,
   ...>        room,
   ...>        age
   ...> FROM l1;
Id          Name        Room        Age       
----------  ----------  ----------  ----------
1           John        404         30        
2           Matt        418         38        
3           Carl        305         38        
4           Steve       301         28        
sqlite> 
sqlite> SELECT name AS 'Full Name'
   ...> FROM l1;
Full Name 
----------
John      
Matt      
Carl      
Steve     
sqlite> 
sqlite> SELECT *
   ...> FROM l1 LIMIT 1,
   ...>               2;
Id          Name        Room        Building                 Age       
----------  ----------  ----------  -----------------------  ----------
2           Matt        418         Engineering & Computing  38        
3           Carl        305         EC                       38        
sqlite> 
sqlite> SELECT *
   ...> FROM l1
   ...> ORDER BY room;
Id          Name        Room        Building    Age       
----------  ----------  ----------  ----------  ----------
4           Steve       301         EC          28        
3           Carl        305         EC          38        
1           John        404         Engineerin  30        
2           Matt        418         Engineerin  38        
sqlite> 
sqlite> SELECT *
   ...> FROM l1
   ...> WHERE age < 35;
Id          Name        Room        Building                   Age       
----------  ----------  ----------  -------------------------  ----------
1           John        404         Engineering and Computing  30        
4           Steve       301         EC                         28        
sqlite> 
sqlite> SELECT DISTINCT age
   ...> FROM l1;
Age       
----------
30        
38        
28        
sqlite> 
```

Most examples above are self-explanatory. Note in code `SELECT * FROM l1 LIMIT 1, 2;`, '2' is the total number of records we want to display, and '1' is the offset. Basically, we want to skip the 1st one and see 2 rows in total.

### SQLite functions

Instead of simply selecting rows that meet certain criteria, what you can also do is to perform some simple calculations on query results. Functions provided by SQLite is not as comprehensive as other SQL flavors such as MySQL (sometimes makes you feel frustrating). But in most of the cases, you'll access SQLite through APIs using languages such as Python. So this becomes less of an issue.

```sql
sqlite> SELECT max(age),
   ...>        min(age)
   ...> FROM l1;
max(age)    min(age)  
----------  ----------
38          28        
sqlite> 
sqlite> SELECT 'employ name: ' || Name AS Name,
   ...>                           age
   ...> FROM l1;
Name               Age       
-----------------  ----------
employ name: John  30        
employ name: Matt  38        
employ name: Carl  38        
employ name: Stev  28        
sqlite> 
sqlite> SELECT count(*)
   ...> FROM l1;
count(*)  
----------
4         
sqlite> 
sqlite> SELECT avg(age)
   ...> FROM l1;
avg(age)  
----------
33.5      
sqlite> 
sqlite> SELECT group_concat(name),
   ...>        age
   ...> FROM l1
   ...> GROUP BY age;
group_concat(name)  Age       
------------------  ----------
Steve               28        
John                30        
Matt,Carl           38        
```

In all examples above, the functions operate on columns. That is, inputs to those functions are the columns in your table. This is why we need to have structured data for SQL databases.

The last example, `GROUP BY` belongs to a group of functions called aggregate functions. These are particularly useful when you want to provide a summary your data records according to some certain criteria. Another set of functions that are useful when you work with JS is called JSON function. Click [here](https://www.sqlite.org/json1.html) for a comprehensive list from the official documentation website. 

## Advanced features

The CRUD operations you saw earlier can be done in Excel or alike, and probably you can do much quicker there. But in this session, you'll learn something that cannot be done in spreadsheet applications, or at lease not in an obvious way.

### Some housekeeping

Use the code below to create a new table that contains some details of office room capacity. In this case, we only have 3 records, as opposed to 4 different rooms in table l1.

```sql
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
```

```sql
sqlite> SELECT * FROM building;
Room        Capacity  
----------  ----------
404         3         
418         5         
305         2    
```

### Join

SQLite supports two types of joins. Use inner join is when you want to get only those records from database tables that have matching values.

```sql
sqlite> SELECT *
   ...> FROM l1
   ...> JOIN building ON l1.Room=building.Room;
Id          Name        Room        Building                   Age         Room        Capacity  
----------  ----------  ----------  -------------------------  ----------  ----------  ----------
1           John        404         Engineering and Computing  30          404         3         
2           Matt        418         Engineering & Computing    38          418         5         
3           Carl        305         EC                         38          305         2         
sqlite> 
sqlite> SELECT *
   ...> FROM l1
   ...> INNER JOIN building ON l1.Room=building.Room;
Id          Name        Room        Building                   Age         Room        Capacity  
----------  ----------  ----------  -------------------------  ----------  ----------  ----------
1           John        404         Engineering and Computing  30          404         3         
2           Matt        418         Engineering & Computing    38          418         5         
3           Carl        305         EC                         38          305         2         
sqlite> 
sqlite> SELECT *
   ...> FROM l1
   ...> NATURAL JOIN building;
Id          Name        Room        Building                   Age         Capacity  
----------  ----------  ----------  -------------------------  ----------  ----------
1           John        404         Engineering and Computing  30          3         
2           Matt        418         Engineering & Computing    38          5         
3           Carl        305         EC                         38          2         
```

On the other hand, an outer join does not require each record in the two joined tables to have a matching record.

```sql
sqlite> SELECT *
   ...> FROM l1
   ...> LEFT JOIN building ON l1.Room=building.Room;
Id          Name        Room        Building                   Age         Room        Capacity  
----------  ----------  ----------  -------------------------  ----------  ----------  ----------
1           John        404         Engineering and Computing  30          404         3         
2           Matt        418         Engineering & Computing    38          418         5         
3           Carl        305         EC                         38          305         2         
4           Steve       301         EC                         28                                
sqlite> 
sqlite> SELECT *
   ...> FROM l1 NATURAL
   ...> LEFT JOIN building;
Id          Name        Room        Building                   Age         Capacity  
----------  ----------  ----------  -------------------------  ----------  ----------
1           John        404         Engineering and Computing  30          3         
2           Matt        418         Engineering & Computing    38          5         
3           Carl        305         EC                         38          2         
4           Steve       301         EC                         28                    
```

In both inner and outer join, SQLite supports natural join. This is when the two tables share the same column names. To avoid confusion, both to you and the system, always specify the column name.

### View, index, trigger, and transaction

Instead of creating sub-tables from existing tables, you can also create Views. Views are like pivot tables in excel in the sense that it gets updated automatically when it's 'mother' tables are updated.

```sql
sqlite> CREATE VIEW level4 AS
   ...> SELECT *
   ...> FROM l1
   ...> WHERE room > 399;
sqlite> 
sqlite> .tables
building  l1        level4  
```

To enable fast searching, you should build some indexes on the columns that you run a query against. Unlike MySQL, indexing in SQLite cannot be done when you create the table.

```sql
sqlite> CREATE UNIQUE INDEX ind_id ON l1 (id);
sqlite> 
sqlite> CREATE INDEX ind_name ON l1 (name);
sqlite> 
sqlite> .indices
ind_id
ind_name
```

Another useful feature is the trigger. By the name you can guess that it triggers certain actions when some criteria are met.

> The example below is a bit too artificial, but you get the idea.

```sql
sqlite> CREATE TRIGGER update_room
   ...> UPDATE OF room ON l1 BEGIN
   ...> UPDATE building
   ...> SET room = new.room
   ...> WHERE room = old.room; END;
sqlite> 
sqlite> SELECT name
   ...> FROM sqlite_master
   ...> WHERE TYPE = 'trigger';
name       
-----------
update_room
```

Normally when you operate on the data you're using transactions implicitly. That means you make changes and commit. But you can also define a transaction explicitly, so that when one operation fails the state of the database rolls back to before the transaction starts.

```sql
BEGIN TRANSACTION;

 -- some SQL code goes here
COMMIT;
```

In this example, `--` is the line comment used in SQL. Block comment can be done using `/* ... */`.

If you download the test.db file from your workspace and view it using SQLiteStudio, you should see the database structure similar to below

![](.md_images/final.png)

### Normalization

SQL tables should be normalized. In other words, table rows and columns should contain no duplicated information.

Some principles of normalization are:

* There should be no repeating columns containing the same kind of data.
* All columns should contain a single value.
* There should be a primary key to uniquely identify each row.
* Now redundancy across multiple rows.

