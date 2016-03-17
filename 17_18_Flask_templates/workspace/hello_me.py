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
    
# http://flask.pocoo.org/snippets/57/
# @app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return redirect('https://www.google.co.uk/search?q=' + path)


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
