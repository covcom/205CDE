# Introduction to PHP

## What is PHP?

When implementing Web-based application some processing is usually done on a client-side (web browser) and/or on a server-side (web server). The server creates a response programmatically since static content is not usually enough.

This can be done in various ways: using PHP, Java Server Pages (JSP), Ruby, Python etc. PHP programming language is widely used and fairly easy to learn, so we are using PHP
in this course.

PHP is a scriptng language meaning it is interpreted; it is translated to machine instructions and executed on the fly, rather than compiled to machine
code before actually running a program.

## Requirements

PHP needs a server installation, which can be Apache or Microsoft IIS. Also PHP extension for the server is needed. Instructions for installation required by Codio can be found from here:
[Installing Apache and PHP in Codio][apache]
## Basic PHP-program

Take a look at the basic PHP-program below:
```
<!DOCTYPE html>
<html>
    <head><title>Minimal PHP</title></head>
    <body>  
        <?php // php-mode
        for ($i=1; $i<=20; $i++){      
            ?> <!-- html-mode -->
            <p>
                All day long I just write PHP
            </p>
        <?php // php-mode
        }   
        ?>  <!-- back to html-mode  -->
    </body>
</html>
```
This file should be named using PHP-extension (not HTML-extension) for example Minimal.php, so that the server understands to execute the PHP-code.
You can embed HTML-code inside PHP-code. You start writing PHP by using <?php and end it by using ?> You can think these syntax forms as being mode switchers:
"<?php" starts PHP-mode, "?>" starts HTML-mode (or at least ends PHP-mode).

The syntax template for embedded PHP content is the following:
```
HTML content

    <?php
    statements;
    ?>
 
HTML content
``` 



## Some PHP-spesific features

### Defining a variable

A variable name in PHP is always preceded by a $ sign. The variable is defined by assigning it a value. The type information is not needed.
The type of a variable is based on the type of an assigned value. The syntax template for variable definition is below:

```
$name = expression
```

Examples:
$user_name = "james";
$age = 20;
$under_age = $age - 5;

Under_scores are forbidden by some programming style guides but let's follow the style of CodeIgniter which says: 
"variables should contain only lowercase letters, use underscore separators, and be reasonably named to indicate their purpose and contents. Very short, non-word variables should only be used as iterators in for() loops."

### Loosely Typed Language

PHP is loosely typed language meaning that you can assign a value of a certain type to a variable which is of a different type and PHP tries to
make a conversion. For example the code
```
<?php
    $text = "20.5testing";
    $number = 0;
    $f_number = 3.14;
    $number = $number + $text;
    $f_number = $f_number + $text;
    print "<p>Values $number and $f_number </p>";

?>
```
will print the result: Values 20.5 and 23.64 


### Strings

Strings in PHP are enclosed "-marks (quotation) or '-marks (apostrophe).

Examples:
$str = "Writing PHP is cool";
$printed = "Values $number and $f_number";
$str2 = 'This is also a string';

The first and the second are examples of interpreted strings, meaning you can write variable names inside a string and the values of variables will be inserted into a string.
The third example is not interpreted so writing a variable name into this string have no special meaning.

The + operator is always a numeric operator in PHP. String concatenation is done by using . (dot-operator).

Printing out variable values using a non-interpreted string looks like this:
print '<p>Values '.$number.' and '.$f_number.'</p>';

Strings in PHP are an array of characters so accessing an individual character is similar to many other languages: writing $str[0] returns "W" from the upper example.
More on strings: [PHP strings][PHPStrings]

## Excercises

1. Write a PHP program which prints a classic "Hello word" greeting on the screen.
2. Write a PHP program which shows an image duplicated so that there are four images in two rows on the web page.
3. Write a PHP program that calculates an area of a circle when the radius is known.
4. Define few variables of different types, assign values to them and print them out using an interpreted string.
5. Same as 4, but use a non-interpreted string this time.


[apache]: https://codio.com/docs/DEL-specifics/php/
[PHPStrings]: http://php.net/manual/en/language.types.string.php