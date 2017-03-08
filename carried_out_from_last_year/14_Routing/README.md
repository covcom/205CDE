# Flask templates

There are two parts in this lab:

1. Routing. This basically means the website serves different contents (pages) for differnt requests (URLs).
2. Serving static files. This allows you to migrate what you've done already i.e. static web pages under the control of Flask.

### Routing

It's unlikely that your website has only one page. If there're more than 1 pages, you'll need a way that directs users to different pages, depending on their requests. This is called **routing**. In the previous example 'hello_flak.py' you saw a function decorator which only serves the root of the website. What if there're multiple pages in the website?

Create a new file and name it 'hello_me.py'. Insert the following into the file_exists

```python
from flask import Flask, make_response, abort, redirect

app = Flask(__name__);

@app.route('/')
def hello_world():
    return 'Hello World!'
    
@app.route('/users')
def hello_users():
    return 'Hello everybody!'
    
@app.route('/users/<username>')
def hello_me(username):
    return 'Hello ' + username + '!'
    
@app.route('/error')
@app.route('/errors')
def error():
    response = make_response('Oops, something goes wrong!', 404)
    return response
    
@app.route('/unexpected')
def unexpected():
    abort(404)
    return True
    
@app.route('/<path:path>')
def catch_all(path):
    return redirect('https://www.google.co.uk/search?q=' + path)

if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
```

Run the code and view it in a new browser tab as before. Try different URLs and see what the server responds

```bash
https://yourdomain.c9users.io/
https://yourdomain.c9users.io/users
https://yourdomain.c9users.io/users/yourname
https://yourdomain.c9users.io/error
https://yourdomain.c9users.io/errors
https://yourdomain.c9users.io/unexpected
https://yourdomain.c9users.io/arbitoary-long-code
```

There are something new in the code above:

* `<username>` denotes a variable that can be passed to the view function. That is the function after the route decorator. In this case, we can make use of the variable to provide some customized response.
* What being returned by the server is always a response object. We can explicitly create a response object using the `make_response()` method.
* It's possible to associate one view function with different routes. We can also redirect response to a different URL.
* The last view function `catch_all` will catch any request that doesn't have a predefined route. In the example above, we redirect to Google. But it's also possible we redirect to the homepage.

### Migrate your static site

Now you've seen how to produce a simple website using Flask. What about the work you've done already (you have done something, right)? In other words, how to integrate static pages into Flask?

Suppose you have a simple HTML page called 'existing1.html' that looks like below. You also have some other pages and images that link to each other.

![](.md_images/sun.png) 

The first thing you do is to create a folder in the workspace called 'static' and put all your files there.

![](.md_images/static.png)

Next, create a file named 'hello_static.py' and insert the following code

```python
from flask import Flask, send_from_directory
app = Flask(__name__);

@app.route('/')
def send_static():
    return app.send_static_file('existing1.html')

@app.route('/<path:path>')
def send_static2(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run()
```

Run the code by typing `python hello_static.py` into the terminal. You'll see that your site is being served as if it's 'standard' Apache2 server.

The job is being done by two functions:

1. `send_static_file` is an instance method. It sends a specific file in the 'static' folder. In other words, 'existing1.html' serves as the entry point of the website like 'index.html'
2. `send_from_directory` serves the file from a specific folder. In this case, it's the 'static' folder again. Whatever pages being linked within 'existing1.html' will be served using this function.

