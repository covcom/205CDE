# Modular PHP
### Functions
#### Defining a Function


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
<!DOCTYPE html>
<html>
    <head><title>Function example</title></head>
    <body>
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
    </body>
</html>
```
The latter if-statement looks a bit redundant. How would you get rid of it?

#### Parameter Types

By default parameters are passed by value in PHP, meaning that the actual parameter ($checked_number above) value is copied into a formal parameter ($number) in each function call.
This means that updating parameter value inside a function block does not affect to the value of the actual parameter in calling part of a program.

A parameter can also be passed by reference which means that both parameters (actual and formal) are references to the same memory address and formal parameter can be thought as being an alias to the actual parameter. In this case a developer can pass information inside a function as well outside of it with parameters.
A reference parameter should have a & mark before the usual $ mark.
See the example below.

```
<!DOCTYPE html>
<html>
    <head><title>Function example</title></head>
    <body>
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
    </body>
</html>
```


#### Scope

A variable defined outside of a function have a global scope and can be seen throughout the program. A variable which is defined inside a function are local 
variables and have a local scope. They can be used only inside a function block they are defined.

If a function wants to access to a global variable, global keyword is needed in front of the variable name. See the example below.

```
<!DOCTYPE html>
<html>
    <head><title>Function example</title></head>
    <body>
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
        print "<p>Number $checked_number is odd. </p>";
    else
        print "<p>Number $checked_number is even. </p>";
     ?>
    </body>
</html>
```

### Files

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

```
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


### Object Oriented PHP

PHP can be used as an object oriented language i.e. a developer can create classes and objects and use other object oriented features.
The syntax template for PHP class is the following:

```
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

When accessing class members inside class member functions an implicit reference $this should be used.

Further reading: [PHP home page][PHP]

[PHP]: http://php.net/manual/en/

### Exercises

It is good to be able reed some data when doing these exercises. There are two small php-scrits (Showform.php, getInput.php) included, which can be useful. Feel free to use them if you like.

1. Write a PHP function which gets user name and age as input and prints them out.
2. Write a PHP function which reverses characters of the input string and prints the result out. So input string "John" is printed out as "nhoJ".
3. Write a PHP function that prints out prime numbers from 2 to some maximum, the maximum is given as input.
4. Write a PHP function which randomly chooses (and prints) one line from the list of words found from here: http://www.webstepbook.com/words.txt.
5. Write a traffic card program using PHP class which makes it possible to “travel” in public transportation (in busses, trams, etc.). Define a TrafficCard class which has at least the following features:
    a.	a card initialization (who’s the owner, assign zero to a balance)
    b.	loading a value to the card (euros/pounds)
    c.	traveling using a card
    d.	two different charges: 2.80 euros/pounds in city central and 4 euros/pounds in areas outside of a city.

    Consider what operations a card must include. Implement the TrafficCard class and test that it functions as should (for example a balance can never be negative).

