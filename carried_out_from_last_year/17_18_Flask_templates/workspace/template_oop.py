from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def nominee():
    return render_template('template_oop.html')
    
if __name__ == '__main__':
#    app.run(port=8080, host='0.0.0.0', debug=True)
    app.run(debug=True)