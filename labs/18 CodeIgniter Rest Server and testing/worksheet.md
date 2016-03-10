# Codeigniter and RESTful API

In this lab you learn how to use RESTful APIs with Codeigniter. To do this, you will install some extra parts to Codeigniter.

## Task list

In the lab you do the following tasks:

1. Install REST parts to Codeigniter
1. Go through tutorial
1. Do a small application with Codeigniter and REST API

## What we need?

For making RESTful APIs with Codeigniter, easiest way is to install Codeiginter REST Server. It's "*A fully RESTful server implementation for CodeIgniter using one library, one config file and one controller.*" 

You can download it from 

https://github.com/chriskacerguis/codeigniter-restserver

You can download full package (.zip) or just these four files:

```
application/libraries/Format.php
application/libraries/REST_Controller.php
application/config/rest.php
application/language/english/rest_controller_lang.php

```
Copy those files to your applications directories and after that you can make your own RESTful API:s with CI.

## How to use Rest Server?

In Codeigniter, when creating a class, you'll do this:

```
<?php
class Pages extends CI_Controller {

 ...
}
```

If you want to use REST Server, you'll just do it this way:

```
<?php
require(APPPATH'.libraries/REST_Controller.php');
 
class Pages extends REST_Controller {
 ....
}
```

Now you can create RESTful API:s with Codeigniter. (There is really three of P:s on APPPATH! )

## Some useful information

- [Tutorial written by Philip Sturgeon](http://code.tutsplus.com/tutorials/working-with-restful-services-in-codeigniter--net-8814) - read this first
- [Video from Mark Tyers](https://www.youtube.com/watch?v=YevHf8Y11ME) - short introduction how to use CI and Rest Server. Please notice: Rest Server is already installed on the video and at this moment we don't have apigee-program!
- [REST API Best Practices & Implementing in Codeigniter ](http://www.slideshare.net/sachingk30/rest-api-best-practices-implementing-in-codeigniter) - from Slideshare.

## Test your understanding

1. Read the tutorial above and test it with chapter 17's CI's tutorial example
1. at Chapter 16 you made a REST API. Now do the same thing with CI and REST Server.
