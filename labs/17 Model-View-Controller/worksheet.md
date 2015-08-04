# Model-View-Controller and Frameworks

"Model-view-controller (MVC) is a software architectural pattern for implementing user interfaces. It divides a given software application into three interconnected parts, so as to separate internal representations of information from the ways that information is presented to or accepted from the user." (Wikipedia)

## Task list

In the lab you do the following tasks:

1. Understand how MVC-modelling works
1. Install a CodeIgniter Framework
1. Go through CodeIgniter tutorial

This lab takes approximately 3 hours.

## Basics

MVC-model has three components: (Wikipedia)

1. **A controller** can send commands to the model to update the model's state (e.g., editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document).
2. **A model** stores data that is retrieved by the controller and displayed in the view. Whenever there is a change to the data it is updated by the controller.
3. **A view** requests information from the model that it uses to generate an output representation to the user.

![MVC-model](http://upload.wikimedia.org/wikipedia/commons/f/fd/MVC-Process.png "MVC")

As the original idea of MVC was to use it implementing user interfaces, nowadays it is commonly used with WWW-applications. Several commercial and noncommercial web application frameworks have been created that enforce the pattern. These frameworks vary in their interpretations, mainly in the way that the MVC responsibilities are divided between the client and server.

## Web frameworks

A web framework is a software which is designed for development of web software, such as

- web applications
- dynamic websites
- web resources
- web services

Also these are supporting code reusing.

## How to select right or best framework?

There are a lot of different frameworks but not one answer, which is the best choise. First of all, it is depending which programming language you are using. After this, you can choose your framework.

Here is one list from Wikipedia, which kind of frameworks exists:

[Comparison of web application frameworks](http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks)

As you can see, there are a lot of them...

And also some links for doing right choises:

[Choosing a Web Framework/Language Combo for the Next Decade](http://jacquesmattheij.com/choosing-web-framework-language-combo)
[15 Most Important Considerations when Choosing a Web Development Framework](http://code.tutsplus.com/tutorials/15-most-important-considerations-when-choosing-a-web-development-framework--net-8035)
[10 criteria for choosing the correct framework](http://symfony.com/ten-criteria)
[Choosing A Web Framework](http://www.clearlytech.com/2013/12/01/choosing-web-framework/)
[How to choose a web framework and be surprised](http://www.slideshare.net/jmarranz/how-to-choose-a-web-framework-and-be-surprised)

# CodeIgniter

CodeIgniter is an open source framework, which uses PHP language. It is commonly used and has following options:

- **It follows MVC design pattern:** Current days, Model View Controller(MVC) is the most popular design pattern in  software development.
- **Performance matters:** It obtains better scores than other php based application frameworks like Cakephp, Zend etc in terms of loading speed / performance.
- **Easy integration support:** It gives a very easy way to integrate third-party tools as library/plugins.
- **Good documentation:** For example, it has a very good tutorial in it.
- **Easy istallation:** Just copy file structure, make a couple small configurations and start using it.

## Installing CodeIgniter to Codio

First, make a new project to Codio, open a terminal and install a codeigniter (get it & unzip). Note: before downloading, check version!

    $ wget https://github.com/bcit-ci/CodeIgniter/archive/3.0.0.zip
    $ unzip 3.0.0.zip

When done, you will see this kind of directory structure on your project:

![directory](img/codeigniter.png "directory structure")

As you see, also documentation is included.

We need also another programs to use: Some database and web server. So we install Apache Web Server, PHP5, PHP5 plugin for Apache and a MySQL relational database: (and of course to start these services)

    $ parts install php5 php5-apache2 mysql
    $ parts start apache2 mysql       

Now we are ready for using Codeigniter.

## Tutorial

CodeIgniter has a very good tutorial. With it you will find out what is MVC:s idea and how CodeIgniter works.

## Test your understanding

1. Go through GodeIgniters tutorial
1. For more experienced users: By default CodeIgniters  URL:s are something like that: *example.com/index.php/news/article/my_article* Find out how to remove *index.php* from the visible URL. Tip: you maybe have to install something more to your Apache server...





