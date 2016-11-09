# Introduction to PHP

## What is PHP?

In this worksheet is an introduction to the PHP programming language.

When implementing a Web-based application some processing is usually done on a client-side (web browser) and/or on a server-side (web server). The server creates a response programmatically since static content is not usually enough.

This can be done in various ways: using PHP, Java Server Pages (JSP), Ruby, Python etc. PHP programming language is widely used and fairly easy to learn, so we are using PHP in this course.

PHP is a scripting language meaning it is interpreted; it is translated to machine instructions and executed on the fly, rather than compiled to machine code before actually running a program.

Traditionally a PHP program creates a dynamic content in the HTML page, for example client information read from the database which is stored in the server. Nowadays there is a trend towards to an API based processing: a PHP programming module is triggered by a REST API call and returns a JSON object as a response.

Further reading: [PHP documentation home page][PHP]

[PHP]: http://php.net/manual/en/


## Task List

In this lab you

- write small PHP code examples
- learn how Javascript and PHP work together

## 1. PHP in C9

Newly created Cloud9 workspaces run PHP 5.5 (5.5.9, 64-bit) by default. If you want to run a different version, you can use a tool like php-build to install it manually.

You can run your PHP application on Cloud9 and use the built-in debugger to inspect your code in real-time. Read the documentation on Running and Debugging Your Code for a more detailed introduction.

There are a few different ways to launch the debugger, depending on the kind of PHP script you’re going to debug:

### 1.1 PHP Web Applications

In this mode, Cloud9 launches the built-in PHP web server, activates the debugger, then opens a preview window.

- Open the script you want to debug, for example index.php

- Set at least one breakpoint (optional)

- Choose Run > Run With > PHP (built-in web server)

### 1.2 PHP Console Commands

If you have a command line script that you want to debug, you can run it directly using the console runner. In this mode, Cloud9 opens a terminal window, then launches a PHP process with the path to your script.

- Open the CLI script you want to debug, for example hello-cli.php
- Set at least one breakpoint (optional)
- Choose Run > Run With > PHP (cli)

## 2. Basic PHP-program

Take a look at the basic PHP-program below:
```php
        <?php // php-mode
        for ($i=1; $i<=20; $i++){      
           echo $i;
        }   
		?> 
```

This file should be named using PHP-extension (not HTML-extension) for example Minimal.php, so that the server understands to execute the PHP-code.

Note that the page is shown in the browser but it isn't valid HTML page. It doesn't have DOCTYPE or html element and so on. We could add additional print statements to output these tags, or we could use embedded PHP to produce valid page. But since we will be using PHP to give answers to  the requests we send from Javascript, we don't care about this.

## 3 Some PHP-spesific features

### 3.1 Defining a variable

A variable name in PHP is always preceded by a $ sign. The variable is defined by assigning it a value. The type information is not needed.
The type of a variable is based on the type of an assigned value. The syntax template for variable definition is below:

```
$name = expression
```

Examples:
```php
$user_name = "james";
$age = 20;
$under_age = $age - 5;
```

Under_scores are forbidden by some programming style guides but let's follow the style of CodeIgniter which says: 
"variables should contain only lowercase letters, use underscore separators, and be reasonably named to indicate their purpose and contents. Very short, non-word variables should only be used as iterators in for() loops."

### 3.2 Loosely Typed Language

PHP is loosely typed language like Javascript meaning that PHP tries to make a correct conversion. For example the code
```php
<?php
    $text = "20.5testing";
    $number = 0;
    $f_number = 3.14;
    $number = $number + $text;
    $f_number = $f_number + $text;
    echo  "Values ".  $number . " and " . $f_number;

?>
```
will print the result: 

```
Values 20.5 and 23.64
```

You can use PHP function gettype to check a type. The function returns the type as a string. Or you can use is_string, is_float, is_int functions which return true or false. For example

```
is_string("hello")
```
returns true.

### 3.3 Strings

As you saw in the preceeding examples strings in PHP are enclosed "-marks (quotation) or '-marks (apostrophe).

Examples:
```php
$str = "Writing PHP is cool";
$printed = "Values $number and $f_number";
$str2 = 'This is also a string';
```

The first and the second are examples of interpreted strings, meaning you can write variable names inside a string and the values of variables will be inserted into a string.
The third example is not interpreted so writing a variable name into this string have no special meaning.

The + operator is always a numeric operator in PHP. String concatenation is done by using . (dot-operator).

Strings in PHP are an array of characters so accessing an individual character is similar to many other languages: writing $str[0] returns "W" from the upper example.

## Test Your Understanding

1. Write the code snippet in 3.2 in a PHP file and put a breakpoint in it and 1) run it as a web application and 2) straight form the command line.
2. Write a PHP program where you define an array of strings. Make a loop going through the array and echo the values in the array.
3. Write a PHP program that calculates an area of a circle when the radius is known. You  may use a hardcoded radius value.


## 4 PHP Ajax

If you don't remember the use of XMLHttpRequest go through labs 08 and 09 explaining the use of AJAX. 

In the order.html file we have

```javascript
<script language="javascript" type="text/javascript">
//Browser Support Code
function ajaxFunction(){
	var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			document.myForm.time.value = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET", "php/serverTime.php", true);
	ajaxRequest.send(null); 
}
</script>
```
The lines

```javascript
ajaxRequest = new XMLHttpRequest();
ajaxRequest.open("GET", "php/serverTime.php", true);
ajaxRequest.send(null); 
```

make an asynchronous request to the server.  In the between after creating an XMLHttpRequest object, we attach to it a callback function which is called automatically when the status of the request changes (onreadystatechange method).
```javascript
ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			document.myForm.time.value = ajaxRequest.responseText;
		}
	}
```
The response text received from the server is then put in the input field called time.

### 4.1 Superglobals

There are several predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

One of these superglobals is $_REQUEST which is used to collect data after submitting an HTML form.
For example we can ask

```php
// get the q parameter from URL
$q = $_REQUEST["q"];
```
if our XMLHttpRequest has been
```javascript
xmlhttp.open("GET", "gethint.php?q=" + str, true);
```
and we get the value of the string which is sent by Javascript with the request. We have this kind of example in suggestions.html, where the Javascript code 

```javascript
<script>
function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "php/gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}
</script>
```
is making an XMLHttpRequest to be sent to gethint.php.

## Test your understanding

1. Change the order.html and serverTime.php files in the following way: put a button on the page, when it's clicked, the php is requested for a random number, which is the shown by the javascript callback function.
2. Change the suggestions.html and gethint.php in the following way: change the php program to return the first name of the hints in a JSON format and show it by the javascript callback function.
Hint: Encode an array in PHP to a string looking like this:

```php
	[{"firstname":"Maltti"},{"firstname":"Markku"}]
```
Parse it to an JSON object and print it out in your Ui. 
