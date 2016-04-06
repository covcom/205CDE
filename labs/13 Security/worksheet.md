# Web Security

World Wide Web is not a safe place. Specially at different forms, you can't trust what somebody is written to the form. You have to sanitize it. 

In this lab, you will find out which are the top vulnerabilities and how to protect against them.

## 1. OWASP

OWASP means Open Web Applications Security Project. It is a worldwide not-for-profit charitable organization focused on improving the security of software. Their mission is to make software security visible, so that individuals and organizations worldwide can make informed decisions about true software security risks. 

Their homepage is at https://www.owasp.org, please find out what they have at there.

## 2. OWASP top 10

Top 10 list is about every third year published list of the most common vulnerabilities in the web pages. Newest list at this moment is from 2013 and it could be found here: 

https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project 

Three most common vulnerabilities are these:

1. **Injection** - Injection flaws, such as SQL, OS, and LDAP injection occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization. 
2. **Broken Authentication and Session Management** - Application functions related to authentication and session management are often not implemented correctly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities. 
3. **Cross Site Scripting (XSS)** - XSS flaws occur whenever an application takes untrusted data and sends it to a web browser without proper validation or escaping. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites. 

And the rest of these are:

4. Insecure Direct Object References
5. Security Misconfiguration
6. Sensitive Data Exposure
7. Missing Function Level Access Control
8. Cross-Site Request Forgery (CSRF)
9. Using Components with Known Vulnerabilities
10. Unvalidated Redirects and Forwards 

### 2.1 Injection

Maybe the most common injection is SQL-injection where attacker tries to input some malicious SQL-code to the forms, something like this:

```
select count(*) from user where pwd = '"+pwd+"' and user ='"+user+"';
```
If there's a form, where you input data username=joe and passwd=secret, everything is fine, but if you do something evil, for example

```
pwd = secret' or 1 = 1, user = joe
```
result could be:

```
select count(*) from user where pwd = 'secret' or 1 = 1 and user = 'joe';
```

This is always true, so if the system is not safe, something unwanted could be happened.

#### How to protect your system


1. The preferred option is to use a safe API which avoids the use of the interpreter entirely or provides a parameterized interface. Be careful with APIs, such as stored procedures, that are parameterized, but can still introduce injection under the hood.
2. If a parameterized API is not available, you should carefully escape special characters using the specific escape syntax for that interpreter. 
3. Positive or “white list” input validation is also recommended, but is not a complete defense as many applications require special characters in their input. If special characters are required, only approaches 1. and 2. above will make their use safe. OWASP’s ESAPI has an extensible library of white list input validation routines.

Check the video: https://www.youtube.com/watch?v=pypTYPaU7mM

### 2.2 Broken Authentication and a Session Management

What happens, when you do this:

```
<script>alert(document.cookie);</script>
```

If you can see document's cookie id or session id, you are far closer that the web page has its session management broken. 

Another one: Your friend is looking for a trip to Hawaii and he/she wants you to check this offer and sends an url to you:

```
http://example.com/sale/saleitems?sessionid=268544541&dest=Hawaii
```

If you can open this, your session management is badly broken.

Two more scenarios:

Application’s timeouts aren’t set properly. User uses a public computer to access site. Instead of selecting “logout” the user simply closes the browser tab and walks away. Attacker uses the same browser an hour later, and that browser is still authenticated.

Insider or external attacker gains access to the system’s password database. User passwords are not properly hashed, exposing every users’ password to the attacker. 

#### How to protect your system

Avoid others to see session variables, use https protocol and use strong crypting & hashing with passwords.

Strong efforts should also be made to avoid XSS flaws which can be used to steal session IDs.
 
## 2.3 XSS

There are three different ways to make XSS:

1. Peristent (Type I): XSS is stored to messageforum, database etc. And then a victim is able to retrieve the stored data from the web application without that data being made safe to render in the browser.
2. Non-persistent (Type II): You can send XSS via URL, if the web site does not check URL well.
3. DOM based XSS: DOM Based XSS is a form of XSS where the entire tainted data flow from source to sink takes place in the browser, i.e., the source of the data is in the DOM, the sink is also in the DOM, and the data flow never leaves the browser. For example, the source (where malicious data is read) could be the URL of the page (e.g., document.location.href), or it could be an element of the HTML, and the sink is a sensitive method call that causes the execution of the malicious data (e.g., document.write)


Check the video: http://www.youtube.com/watch?v=_Z9RQSnf8-g 


## 3 PHP Security Issues

PHP is quite old language and it has several issues with it's security. Newer versions are better than older ones. But if you do things right, you can create safe PHP pages.

Further information from here:

https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet 

### 3.1 Don't use unsecure old functions

Olders versions have a lot of stuff which is not safe. For example, SQL connections should do now without mysqlconnect()-funcion, because it's very vulnerable. Use PDO (PHP Data Objects) or mysqli (improved edition).

### 3.2 Sainitize your data

Never trust user input! Always sanitize data before using it! Sainitization could be done different ways:

1. use whitelisting with prepared statements
2. use functions for this. PHP includes a lot of functions which could be used for sanitization
3. never use data straight from $_POST or $_GET -arrays. Do sanitation and put clean data to another array. 

### 3.3 Use mature solutions

Use existing and mature solutions. PHP has al lot of functions which you can use with sanitation. For example next ones:

- htmlentities
- htmlspecialchars
- html_entity_decode
- strip_tags

Example:

```
$string = "I'll \"walk\" the <b>dog</b> now";  // notice \-sign before double quotes!

$a = htmlentities($string);
$b = html_entity_decode($string);
$c = htmlspecialchars($string);
$d = strip_tags($string);

echo $a.", ".$b.", ".$c.", ".$d;
```
## 4 Test your understanding

1. Above you see a small example. Test how it's working.
2. Function strip_tags has a feature which allows user to use some html-tags, which are not stripped. Find out (php.net) how this works and test it. When you see how it works, make an example which has one allowed tag. After that, insert to this tag some method (onMouseOver, for example) and do something. What happened? Is there any way to restrict that?