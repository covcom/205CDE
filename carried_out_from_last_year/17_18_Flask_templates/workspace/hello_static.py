from flask import Flask, send_from_directory

app = Flask(__name__);

# http://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask
# http://flask.pocoo.org/docs/0.10/api/#flask.send_from_directory
@app.route('/')
def send_static():
    return app.send_static_file('existing1.html')

@app.route('/<path:path>')
def send_static2(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
#    app.run(port=8080, host='0.0.0.0', debug=True)
    app.run()
