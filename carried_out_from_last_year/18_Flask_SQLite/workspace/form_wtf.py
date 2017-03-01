from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_wtf import Form
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
Bootstrap(app)


# below guide on form validation
# http://flask.pocoo.org/docs/0.10/patterns/wtforms/
# below from validators.py
# data_required = DataRequired
# Required is legacy alias for DataRequired
class CommentForm(Form):
    name = StringField('Name:', validators=[DataRequired()])
    comments = TextAreaField('Comments', validators=[DataRequired(), Length(min=3, max=10)])
    submit = SubmitField('Submit')


@app.route('/', methods=['GET', 'POST'])
def view_form():
    form = CommentForm()
    if form.validate_on_submit():
        name = form.name.data
        comments = form.comments.data
        form.name.data = ''
        form.comments.data = ''
        return render_template('form_wtf.html', form=form, name=name, comments=comments)
    return render_template('form_wtf.html', form=form)


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0', debug=True)
