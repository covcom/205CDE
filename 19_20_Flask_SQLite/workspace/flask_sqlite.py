from flask import Flask, render_template, redirect, url_for
import os
from flask_bootstrap import Bootstrap
from flask_wtf import Form
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length
import sqlite3

# https://github.com/mitsuhiko/flask/blob/master/examples/flaskr/flaskr.py
app = Flask(__name__)
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'comments.db'),
    SECRET_KEY='development key'
))
Bootstrap(app)


class CommentForm(Form):
    name = StringField('Name:', validators=[DataRequired()])
    comments = TextAreaField('Comments', validators=[DataRequired(), Length(min=3, max=10)])
    submit = SubmitField('Submit')

# more example can be found here
# http://www.tutorialspoint.com/flask/flask_sqlite.htm
@app.route('/', methods=['GET', 'POST'])
def view_form():
    form = CommentForm()
    if form.validate_on_submit():
        name = form.name.data
        comments = form.comments.data
        with sqlite3.connect(app.config['DATABASE']) as con:
            cur = con.cursor()
            cur.execute("INSERT INTO comments_table (name, comments) VALUES (?,?)", (name, comments))
            con.commit()

        return redirect(url_for('list_results'))
    return render_template('form_wtf.html', form=form)

@app.route('/display')
def list_results():
    with sqlite3.connect(app.config['DATABASE']) as con:
        # turn tuple returned by cursor into dictionary
        # more examples see here http://stackoverflow.com/questions/16335772/mapping-result-rows-to-namedtuple-in-python-sqlite
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute("SELECT * FROM comments_table")
        entries = cur.fetchall()
        return render_template('flask_sqlite.html', entries=entries)


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
