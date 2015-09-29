# Document Databases

In this lab you learn to connect your web application to a NoSQL database management system.

NoSQL referes to a family of database management systems that neither use relational model nor SQL for representing data and queries. The main driving force for NoSQL is scalability:
NoSQL databases are good at handling very large quantities of semistructured or unstructured data, usually in a distributed fashion.

Document databases are a subcategory of NoSQL databases. They are designed for storing key/value pairs where the value field also has utilizable structure, usually in a form of a JSON or XML object.

MongoDB that we use in this lab is one of the most commonly used document database management systems.

## Task list

In this lab you do the following tasks:
1. Install MongoDB in Codio
2. Learn MongoDB data model.
3. Make queries as well as data modification operations via MongoDB interpreter.
4. Use MongoDB from your own PHP scripts.

## 1 Installation

Start the lab by installing MongoDB server in Codio. To do this, open a new terminal window and type:

```
parts install mongodb
```

Then, following the on-screen instructions, start MongoDB server:

```
parts start mongodb
```

Now, MongoDB server is listening to a dedicated port (by default 27017), waiting for clients to connect. Later, PHP REST handler scriptss are going to be such clients. For now, we start with command-line usage, where the MongoDB command interpreter acts as a client.

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
Use MongoDB reference manual as well as other sources, and perform the following operations:
1. Update the salary of person number 2 to 6000 €.
2. Add everybody’s salary by 5% (with a single operation).
3. Drop person number 4.

## 4 Programmatic use

TBA.

### Test your understanding