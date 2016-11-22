# Web frameworks

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

- [Choosing a Web Framework/Language Combo for the Next Decade](http://jacquesmattheij.com/choosing-web-framework-language-combo)
- [15 Most Important Considerations when Choosing a Web Development Framework](http://code.tutsplus.com/tutorials/15-most-important-considerations-when-choosing-a-web-development-framework--net-8035)
- [10 criteria for choosing the correct framework](http://symfony.com/ten-criteria)
- [Choosing A Web Framework](http://www.clearlytech.com/2013/12/01/choosing-web-framework/)
- [How to choose a web framework and be surprised](http://www.slideshare.net/jmarranz/how-to-choose-a-web-framework-and-be-surprised)

# CodeIgniter

CodeIgniter is an open source framework, which uses PHP language. It is commonly used and has following options:

- **It follows MVC design pattern:** Current days, Model View Controller(MVC) is the most popular design pattern in  software development.
- **Performance matters:** It obtains better scores than other php based application frameworks like Cakephp, Zend etc in terms of loading speed / performance.
- **Easy integration support:** It gives a very easy way to integrate third-party tools as library/plugins.
- **Good documentation:** For example, it has a very good tutorial in it.
- **Easy istallation:** Just copy file structure, make a couple small configurations and start using it.

## Installing CodeIgniter to Cloud 9

First, make a new project to Cloud 9 (actually: not necessary), open a terminal and install a codeigniter (get it & unzip). Note: before downloading, check the newest version! When this is written, newest version is 3.0.6
```
$ wget https://github.com/bcit-ci/CodeIgniter/archive/3.0.6.zip
$ unzip 3.0.6.zip
```
When done, you will see this kind of directory structure on your project:

![directory](http://users.metropolia.fi/~kuivi/codeigniter/codeigniter.png "directory structure")

As you see, also documentation is included.

Now run project and from right folder (CodeIgniter), you will find this message:

![](http://users.metropolia.fi/~kuivi/codeigniter/ci_2.png "CodeIgniter Welcome message")

Codeigniter needs also PHP and MySQL servers. These are already installed. If you want, you maybe want install phpmyadmin:

```
$ phpmyadmin-cli install
```
When installed, make a new user to database, like in this video:

https://www.youtube.com/watch?v=4ym4nyfuGbM&nohtml5=False

(Same guy has more maybe useful stuff for CodeIgniter, if you want to watch)

And when needed, use this user and database in CI tutorial.

Now we are ready for using Codeigniter.

## Tutorial

CodeIgniter has a very good tutorial (http://www.codeigniter.com/user_guide/tutorial/index.html). With it you will find out what is MVC's idea and how CodeIgniter works.

## Test your understanding

1. Go through GodeIgniters tutorial
1. Use CodeIgniter to make your chat.
1. For more experienced users: By default CodeIgniters  URL:s are something like that: *example.com/index.php/news/article/my_article* Find out how to remove *index.php* from the visible URL. 
