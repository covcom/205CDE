# Modular PHP

In this lab you will learn to use modular features of the PHP language such as functions and classes.

## Task List

in this lab you will do the following tasks:

- write PHP functions
- use predefined functions
- use object-oriented features of PHP (classes, objects, modules)
- create a JSON object that can acts as a response to an API call

### 1 Functions
#### 1.1 Defining a Function

A function in PHP has a same meaning as in other languages: it is a group of logically connected statements which have a name and which can
be called using that name. A function can have parameters which should be named but types are not declared. A function can return a value but
the type of the returned value should not be written in declaration.

Syntax template is the following:

```
function name($parameterName, ..., $parameterName) {
    statements;
}
````
Example:

```
<?php
function is_odd($number) {
    if (($number%2)==0)
        return FALSE;
    else
        return TRUE;
}
$checked_number=rand(0, 50); # random number generator
if (is_odd($checked_number)==TRUE)
    print "<p>Number $checked_number is odd.</p>";
else
    print "<p>Number $checked_number is even.</p>";
?>
```

The latter if-statement looks a bit redundant. How would you get rid of it?

#### 1.2 Parameter Types

By default parameters are passed by value in PHP, meaning that the actual parameter ($checked_number above) value is copied into a formal parameter ($number) in each function call.
This means that updating parameter value inside a function block does not affect to the value of the actual parameter in calling part of a program.

A parameter can also be passed by reference which means that both parameters (actual and formal) are references to the same memory address and formal parameter can be thought as being an alias to the actual parameter. In this case a developer can pass information inside a function as well outside of it with parameters.
A reference parameter should have a & mark before the usual $ mark.
See the example below.

```php
<?php
function is_odd(&$number) { # $number is now a reference parameter
    if (($number%2)==0) {
        $number++;
        return FALSE;
    }
    else {
        $number++;
        return TRUE;
    }
}
$checked_number=rand(0, 50);
$checked_original_value = $checked_number;
if (is_odd($checked_number)==TRUE)
    print "<p>Number $checked_original_value is odd. (incremented value $checked_number)</p>";
else
    print "<p>Number $checked_original_value is even. (incremented value $checked_number)</p>";
?>
```


#### 1.3 Scope

A variable defined outside of a function have a global scope and can be seen throughout the program. A variable which is defined inside a function are local 
variables and have a local scope. They can be used only inside a function block they are defined.

If a function wants to access to a global variable, global keyword is needed in front of the variable name. See the example below.

```php
<?php
function is_odd() {
    global $checked_number; # global variable
    $number=0; # local variable (just for demo purpose)
    if (($checked_number%2)==0) {
        $number++;
        return FALSE;
    }
    else {
        $number++;
        return TRUE;
    }
}
$checked_number=rand(0, 50);
    
if (is_odd($checked_number)==TRUE)
    print "Number $checked_number is odd.";
else
    print "Number $checked_number is even.";
?>
```

### 2 Files

PHP allows access to resources on the server. One such a resource is the files on the server. PHP has powerful and fairly easy to use file related functions.
Below is a table containing some useful I/O related functions.



| function names                                    | category                         | 
| ------------------------------------------------- |:--------------------------------:| 
| file,file_get_contents,file_put_contents          | reading/writing entire files     |
| basename,file_exists,filesize,fileperms,filemtime | asking for information           |
| is_dir,is_readable,is_writable,disk_free_space    | asking for information           |
|copy,rename,unlink,chmod,chgrp,chown,mkdir,rmdir   |manipulating files and directories|
|glob,scandir                                       |reading directories               |

An example below reverses lines of a text file (The example is found from the book Stepp, Miller, Kirst:"Web Programming Step bt Step").

```php
<?php
function reverse_lines($filename) {
    $text = file_get_contents($filename);
    $lines = explode("\n", $text); # split in lines
    $lines = array_reverse($lines);
    $text = implode("\n", $lines); # connect lines to a single string
    file_put_contents($filename, $text);
}
print file_get_contents("myfile.txt");
reverse_lines("myfile.txt");
print file_get_contents("myfile.txt");
?>
```

### 3 Object-oriented PHP

PHP can be used as an object oriented language i.e. a developer can create classes and objects and use other object-oriented features.
The syntax template for PHP class is the following:

```php
class name {
    private $name; #  member attribute (class data in each object)
    
    public function __contruct(name) { # constructor
        statements;
    }

    public function name(parameters) { # member method
        statements;
    }

}
```

As an example of a PHP class, open **diceclasses.inc.php** and study its contents. The purpose of the class is to implement a dice with a variable number of faces. For example, one can create an object that is a regular 6-face dice, a 21-face RPG dice, or a simple coin that can be emulated by a 2-face die.

Furthermore, each dice keeps track of how many times it has delivered each number of eyes. These numbers of occurences are called frequencies, and, by keeping track of them, each dice can tell how many times it has landed on six, for example.

Pay attention to the following points in **diceclasses.inc.php**:
- The class contains encapsulated instance variables, declared as **private**. The functions are public, labeled as **public**.
- The constructor is declared as a function with special name **__construct()**. The constructor can be parametrized, but there can be only one constructor. This is a limitation of PHP language that can be overcome by variable-length argument lists.
- When accessing class members inside class member functions an implicit reference $this should be used.

Now, open **diceplay.php**. It is a class that generates a dice object (based on user input given in URI) and generates a JSON object that contains both the indivual dice cast results as well as overall frequencies for each number of eyes.

In the beginning of the file, there is an include statement:

```php
include("diceclasses.inc.php");
```

This causes the classes in the file to be visible into the executable script. (In this case, there is just one class named **Dice**).

Pay attention to the generation of the **Dice** object that is done by **new** statement:

```php
$dice = new Dice($faces);
```
This automatically calls the constuctor of the **Dice** class (recall that it was named **__construct**).

Now, let's test the dice. First, run **diceplay.php** to start the server.

When the server is started, **diceplay.php** can be called by entering the URI of the following structure:

https://wete-original-vesavvo.c9users.io/labs/14%20Modular%20PHP/diceplay.php?faces=4&throws=10

In the URI, replace the domain with the one that you use. The input is given be changing the values of **faces** and **throws** parameters. In the example, there is a 4-face dice that is cast 10 times.

In a fully working web application, the PHP scripts are run as a consequence of AJAX XMLHttpRequests initiated by JavaScript in browser. In this lab, you can use the aforementioned URI way to provide the input for your PHP scripts.

Below is a possible JSON outcome for that call:
```
{"faces":"4","results":[{"id":"1","res":"2"},{"id":"2","res":"1"},{"id":"3","res":"2"},{"id":"4","res":"4"},
{"id":"5","res":"2"},{"id":"6","res":"4"},{"id":"7","res":"3"},{"id":"8","res":"4"},{"id":"9","res":"4"},{"id":"10","res":"1"}],
"frequencies":[{"eyes":"1","frequency":"2"},{"eyes":"2","frequency":"3"},{"eyes":"3","frequency":"1"},{"eyes":"4","frequency":"4"}]}
```

Study the contents of the output and make sure that you understand the structure of the JSON object. For viewing the structure, you can use any online JSON formatter/validator such as https://jsonformatter.curiousconcept.com/.

Then, examine the source code in **diceplay.php** and find out the relatively simple steps for generating a JSON object was in PHP.


Further reading: [PHP documentation home page][PHP]

[PHP]: http://php.net/manual/en/

### Test Your Understanding

1. Modify the **Dice** class in **diceclasses.inc.php** to contain a function that returns the average number of eyes that the dice has given so far.
2. Add the average number of eyes (after the entire seqeunce of casts) to the resulting JSON. Use the function written above in Step 1. For instance, if the cast results are 2, 2, 6, and 1, the reported average should be 2.75.
3. Modify the **Dice** class to implement a biased dice. The bias of the dice is given as parameter *p*. For an *n*-faceted dice with bias *p*, the maximum result (*n*) is returned with probability *p*, and each of the other results is returned with probability (1-*p*)/(*n*-1). Example: Consider a six-faceted dice with a bias of 0.4. The dice returns a six with probability of 0.4, and each of the lower numbers (1 to 5) with probability 0.12. Modify the parsing of the URI in such a way that the bias can be included in the input. If the bias is not provided, the dice should be treated as unbiased.
4. In PHP, the inheritance is implemented using **extends** keyword in a fairly Java-like fashion (one of the key differences being that superclass constructors are not automatically called). In **diceclasses.inc.php**, write a new **PhysicalDice** class that becomes a subclass of **Dice**. In the subclass, add a new instance variable that is a string containing the material of the dice (e.g. wood or stone). Modify **diceplay.php** in such a way that the user can give the material of the dice as a parameter. If the material is given, a **PhysicalDice** is created. Otherwise, a regular **Dice** object is generated. For information on inheritance in PHP, see, e.g. http://zetcode.com/lang/php/oopi/ and scroll down to "Inheritance".
 
