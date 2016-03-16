from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/<input>')
def hello(input=None):
    return render_template('template_basic.html', name=input)
    
if __name__ == '__main__':
#    app.run(port=8080, host='0.0.0.0', debug=True)
    app.run(debug=True)