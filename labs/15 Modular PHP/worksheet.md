# Modular PHP

in this lab you will use modular features of the PHP language, for example functions and classes.

## Task List

in this lab you will do the following tasks:

- write PHP functions
- use predined functions
- write PHP classes
- create a JSON object as a response to an API call

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

#### 1.2 Parameter Types

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


#### 1.2 Scope

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
### 3 REST API - a Simple Example

Here is a simple REST API [example][RESTAPI] found from the web. In the example the first PHP program creates an api implementation and the second is a client which creates api calls.
The API implementation is below:

```php
<?php
// This is the API, 2 possibilities: show the app list or show a specific app by id.
// This would normally be pulled from a database but for demo purposes, I will be hardcoding the return values.

function get_app_by_id($id)
{
  $app_info = array();

  // normally this info would be pulled from a database.
  // build JSON array.
  switch ($id){
    case 1:
      $app_info = array("app_name" => "Web Demo", "app_price" => "Free", "app_version" => "2.0"); 
      break;
    case 2:
      $app_info = array("app_name" => "Audio Countdown", "app_price" => "Free", "app_version" => "1.1");
      break;
    case 3:
      $app_info = array("app_name" => "The Tab Key", "app_price" => "Free", "app_version" => "1.2");
      break;
    case 4:
      $app_info = array("app_name" => "Music Sleep Timer", "app_price" => "Free", "app_version" => "1.9");
      break;
  }

  return $app_info;
}

function get_app_list()
{
  //normally this info would be pulled from a database.
  //build JSON array
  $app_list = array(array("id" => 1, "name" => "Web Demo"), array("id" => 2, "name" => "Audio Countdown"), array("id" => 3, "name" => "The Tab Key"), array("id" => 4, "name" => "Music Sleep Timer")); 

  return $app_list;
}

$possible_url = array("get_app_list", "get_app");

$value = "An error has occurred";

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {
      case "get_app_list":
        $value = get_app_list();
        break;
      case "get_app":
        if (isset($_GET["id"]))
          $value = get_app_by_id($_GET["id"]);
        else
          $value = "Missing argument";
        break;
    }
}

//return JSON array
exit(json_encode($value));
?>
```
The edited client implementation is below:
```
<html>
 <body>

<?php

$server = $_SERVER['HTTP_HOST'];

if (isset($_GET["action"]) && isset($_GET["id"]) && $_GET["action"] == "get_app") 
{
  $app_info = file_get_contents('http://'.$server.'/api.php?action=get_app&id=' . $_GET["id"]);
  $app_info = json_decode($app_info, true);
  ?>
    <table>
      <tr>
        <td>App Name: </td><td> <?php echo $app_info["app_name"] ?></td>
      </tr>
      <tr>
        <td>Price: </td><td> <?php echo $app_info["app_price"] ?></td>
      </tr>
      <tr>
        <td>Version: </td><td> <?php echo $app_info["app_version"] ?></td>
      </tr>
    </table>
    <br />
     
    <a href="http://<?php echo $server?>/REST_Client.php?action=get_app_list" alt="app list">Return to the app list</a> 
  <?php
}
else // else take the app list
{
    
  $app_list = file_get_contents('http://'.$server.'/api.php?action=get_app_list');
  $app_list = json_decode($app_list, true);
  //var_dump($app_list);
  ?>
    <ul>
     <?php foreach ($app_list as $app) {  ?>
      <li>
        <a href=<?php echo "http://$server/REST_Client.php?action=get_app&id=" . $app["id"]  ?> alt=<?php echo "app_" . $app["id"] ?>><?php echo $app["name"] ?></a>
      </li>
     <?php } ?>
    </ul>
  <?php
} ?>
 </body>
</html>
```
These are the API calls in this example:

-   http://drink-office.codio.io:3000/REST_Client.php?action=get_app&id=1  (drink-office.codio.io:3000 is the host name which may vary.)
-   http://drink-office.codio.io:3000/REST_Client.php?action=get_app&id=2
-   http://drink-office.codio.io:3000/REST_Client.php?action=get_app&id=3
-   http://drink-office.codio.io:3000/REST_Client.php?action=get_app&id=4
-   http://drink-office.codio.io:3000/REST_Client.php?action=get_app_list

The API implementation returns a specific JSON object related to the query string id value. The query string variable "get_app_list" is used to create a menu if there is a need to run client more than once.
Notice how a PHP program obtain access to the HTTP query ids and to the query id values.



### 4 Object Oriented PHP

PHP can be used as an object oriented language i.e. a developer can create classes and objects and use other object oriented features.
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

When accessing class members inside class member functions an implicit reference $this should be used.

Further reading: [PHP home page][PHP]

[PHP]: http://php.net/manual/en/
[RESTAPI]: http://blog.ijasoneverett.com/2013/02/rest-api-a-simple-php-tutorial/

### Test Your Understanding

It is good to be able reed some data when doing these exercises. There are two small php-scrits (Showform.php, getInput.php) included, which can be useful. Feel free to use them if you like.

1. Write a PHP function which gets user name and age as input and prints them out.
2. Write a PHP function which reverses characters of the input string and prints the result out. So input string "John" is printed out as "nhoJ".
3. Write a PHP function that prints out prime numbers from 2 to some maximum, the maximum is given as input.
4. Write a PHP function which randomly chooses (and prints) one line from the list of words found from here: http://www.webstepbook.com/words.txt.
5. Write a PHP program that calculates an area of a circle when the radius is known. Make this version based on the REST API (radius is read from an HTTP query string and the result is returned as a JSON object). 
6. Write a traffic card program using PHP class which makes it possible to “travel” in public transportation (in busses, trams, etc.). Define a TrafficCard class which has at least the following features:
    a.	a card initialization (who’s the owner, assign zero to a balance)
    b.	loading a value to the card (euros/pounds)
    c.	traveling using a card
    d.	two different charges: 2.80 euros/pounds in city central and 4 euros/pounds in areas outside of a city.

    Consider what operations a card must include. Implement the TrafficCard class and test that it functions as should (for example a balance can never be negative).

