# Document Databases

In this lab you learn to connect your web application to a NoSQL database management system.

NoSQL referes to a family of database management systems that neither use relational model nor SQL for representing data and queries. The main driving force for NoSQL is scalability:
NoSQL databases are good at handling very large quantities of semistructured or unstructured data, usually in a distributed fashion.

Document databases are a subcategory of NoSQL databases. They are designed for storing key/value pairs where the value field also has utilizable structure, usually in a form of a JSON or XML object.

MongoDB that we use in this lab is one of the most commonly used document database management systems.

## Task list

In this lab you do the following tasks:

1. Install MongoDB in Cloud9.
2. Learn MongoDB data model.
3. Make queries as well as data modification operations via MongoDB interpreter.
4. Use MongoDB from your own PHP scripts.

## 1 Installation

Start the lab by installing MongoDB server in Cloud9. To do this, open a new terminal window and run the following commands:

```
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
```


Then, start MongoDB server:

```
./mongod &
```

Now, MongoDB server is listening to a dedicated port (by default 27017), waiting for clients to connect. Later, PHP REST handler scripts are going to be such clients. For now, we start with command-line usage, where the MongoDB command interpreter acts as a client.

## 2 Data model

Before starting to use MongoDB, let us get acquainted with its data model.

The data model in MongoDB consists of documents, collections and databases:
- Entities to be stored are called **documents**. MongoDB documents are stored in BSON format, which is a binary representation of JSON. Consequently, MongoDB is ideal for storing JSON objects. The transfer to BSON format (and vice versa) is done automatically.
- A **collection** is a set of documents.
- A **database** contains related collections.

Contrasting these to relational database terms, a document roughly corresponds to a row whereas a collection is a MongoDB equivalent for a table. The concept of database is similar in both data models.

## 3 Command line usage

Type `mongo` to start MongoDB command line tool. The command line tool acts as a MongoDB client and can be used to initiate queries and other operations to a MongoDB database.

Command line usage is a good approach for learning MongoDB's features and functionality. Slightly later, you will submit your queries from a PHP program instead.

In MongoDB client, type `help` to get the list of available commands.

Create a new database called company by entering:
```
use company
```

Then add a new person into a new collection in the newly-created database. Notice the JSON format for the person's data:
```
db.persons.insert({"id": 1, "first name": "Mary", "last name": "Smith", "salary": 5000}).
```
Add the following persons into the collection:
- 2, Ahmed Bakir, 5000,
- 3 Viivi Virtanen, 7200,
- 4, John Smith, 2900.

Now write a query to fetch all persons:
```
db.persons.find()
```

Apply a formatting function for more readable output:
```
db.persons.find().pretty()
```

Notice the object id given by MongoDB to each document.

Now, add a selection criterion in the query and pick just those persons whose last name is Smith:
```
db.persons.find({"last name" : "Smith"}).pretty()
```

Next, get used to the documents and tutorials:
- http://www.tutorialspoint.com/mongodb/
- http://docs.mongodb.org/manual/reference/ 

### Test your understanding
Use MongoDB reference manual as well as other sources, and perform the following operations. Verify the outcome of each operation.

1. Update the salary of person number 2 to 6000 euros.
2. Add everybody's salary by 5% (with a single operation).
3. Drop person number 4.

## 4 Programmatic use

The next step is to use MongoDB programmatically from a PHP program. As you may guess by now, the correspondence between REST API handlers and database operations is often straightforward: for example, a handler for HTTP POST operation usually generates an **insert()** call to MongoDB.

From the previous lab, you should have a REST API enabled Codeigniter project. If you don't, create one at this step. Make sure that Apache web server is running.

Now, install PHP drivers for MongoDB in a terminal window:
```
sudo apt-get install php-pear php5-dev
sudo pecl install mongo
sudo touch /etc/php5/apache2/conf.d/mongo.ini
```
Open the newly created **mongo.ini** file in an editor to add a single line of configuration. You can do this with Pico editor by typing:
```
sudo pico /etc/php5/apache2/conf.d/mongo.ini
```
In the opening editor window, add a single line with the following content:
```
extension=mongo.so
```

Close the editor by hitting Ctrl-X, saving the contents of the file.

After the driver installation, restart Apache server if it's running; otherwise the drivers may not be visible to the web server:

In the lab's **php** folder, there´s a file named **Persons.php**. This is a REST API handler for GET operation to resource **.../Persons/list** that should work together with the MongoDB database that you generated a while ago using command line. Recall at this step that the database **company** contains one collection named **persons** that should have a few persons inserted in it. The handler file simply returns as JSON that contains all the persons in the collection.

Study the contents of **Persons.php**. As you see, it is fairly straightforward to perform MongoDB operations from inside PHP code. The database driver provides a collection of functions for communication with the database.

Copy **Persons.php** to **controllers** folder in your Codeigniter/REST project.

If your project is in working condition, you can simply send the GET request from Postman or browser to the following URI:
```
https://test-vesavvo.c9users.io/staff/index.php/Persons/list/
```
In the URI, replace **test-vesavvo** with your own server name, and, instead of **staff**, write the name of your API. It appears as the name of the folder right under the project folder in the hierarchy (see image below).

![(You see the image embedded here if you open this assignment sheet in a separate browser window).](img/ci_files.png)

As a reply to your request, you should get a JSON containing the persons. Examine the structure of the received JSON.

### Test your understanding

1. Create another REST API handler for your project. The handler should insert a new person into the MongoDB database. The data for the new person can be sent as URI parameters or as a JSON in the request's body (choose either).

