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

## First example: a simple chat

In this example we make a simple chat program. First we desing a Model: (name it Model.php)

```
    <?php
    class Model {
        private $file = "messages.txt";

        public function messages() {
            if (file_exists($this->file)) {
                return file($this->file);
            } else {
                return array();
            }
        }

        public function add_message($message) {
            $message = date("H:i:s: ") . $message;
            file_put_contents($this->file, "{$message}\n", FILE_APPEND);
        }
    }
    ?>
```

Remember: before you can use this code, you should make a new empty file named *messages.txt* and change its access:

```
$ touch messages.txt
$ chmod o+rw messages.txt
```

After that the web server could read and write to this file.

Model defines two functions: *messages()*, wich returns previous messages and *add_message()*, which writes a new message to chat. So you can read and write messages with it.

Next we make *View.php*, which is an user interface for chat:
```
    <!DOCTYPE html> 
    <html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>Chat</h1>
        <?php
        if (empty($this->messages)) {
            echo "There is no messages in chat...";
        } else {
            foreach ($this->messages as $message) {
                echo htmlspecialchars($message) . "<br>";
            }
        }
        ?>
    <h2>New message</h2>
        <form action="?action=send" method="post">
        <input type="text" name="message">
        <input type="submit" value="Send">
        </form>
    </body>
    </html>
```

Next one is the Controller (*Controller.php*):
```
    <?php
    class Controller {
        private $model;

        public function __construct() {
            $this->model = new Model();
        }

        public function list_it() {
            $this->messages = $this->model->messages();
            include("View.php");
        }

        public function send() {
            $this->model->add_message($_POST["message"]);
            header("Location: Chat.php?action=list_it");
        }
    }
    ?>
```    
Notice the first function *__construct()*. It is the constructor, which creates a new object. You might need sometimes also a destrunctor (*__destruct()*), which deletes an object.

And last: put all together: (*Chat.php*)
```
    <?php
    include("Model.php");
    include("Controller.php");

    $controller = new Controller();
    if (isset($_GET["action"])) {
        $action = $_GET["action"];
    } else {
        $action = "list_it";
    }
    $controller->$action();
    ?>
```
Some links for MVC:

- [Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [MVC Architecture](https://developer.chrome.com/apps/app_frameworks)
- [MVC for Noobs](http://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488)


## Test your understanding

1. Test how chat example works
1. Add a nickname-field to your chat so that you can show in messages list who wrote message. Could you do this so, that you have to give your nickname only once?





