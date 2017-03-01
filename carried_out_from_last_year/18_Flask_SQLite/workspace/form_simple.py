from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'post'])
def view_form():
    if request.method == 'POST':
        name = request.form['name'];
        comments = request.form['comments']
        return render_template('form_simple.html', name=name, comments=comments)
    else:
        return render_template('form_simple.html')


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
