# HTML 5 forms

In this lab you learn to create a form which is a control that accepts information from the user and sends the information to a web server.

The information is sent to the server as a query string. We will learn more on interacting with the user later on Javascript and PHP modules.

## Task list

In this lab you do the following tasks:

- create an HTML 5 form
- use HTML 5 for controlling the data types

This lab takes approximately 2 hours.

## 1 HTML 5 form

First, create a file called **aSampleForm.html**.

In the newly-created HTML file, add the following lines of code:
```html
<form action="http://www.google.com/search">
  <div>
    Let's search Google:
    <input name="q" />
    <input type="submit" />
  </div>
</form>                                                    
```


Notice that as an action it refers to [Google's search engine](http://www.google.com/search). It gives a URL where the user's input data is sent. Run the file and copy the URL after "Starting Apache httpd, serving" into an address field of your browser. 
When you write something into the box and click submit, your text is sent to Google's search engine.

Notice how you see parameters passed in a URL.
```html
https://www.google.fi/search?q=biketrial
```

This means that we are using `GET` method to send out data to the server. The method is not explicitely written in the form tag, therefore the default (= `GET`) is used.
Everything that the user writes in the form is shown in the URL. In our case Google needs only one parameter which is called q (for query). The general syntax for URL query string is
```
URL?name1=value1&name2=value2&name3=value3.....
```

In most cases we don't want this, the usual way is to use `POST` method (which will be discussed later). Confidential data is recommended to be sent by `POST` methods.
When discussing REST APIs we will have even more methods like INSERT and DELETE.

HTML form is just a set of things, which are called controls. They are elements of different types like  text fields, checkboxes, radio buttons, submit buttons, and more.The `<input>` element is the most important form element, it has no content and is self-closing. 

In our form we have 2 input elements. The first one is for text input and we named it q because it happens to be the Google search string. 

It is important to have the name attribute on each input control and name should be unique. This is how browser knows how to send control's data to the server. You'll find out more about this later when PHP is discussed.

Second input element's type is `submit` which generates a submit button for the user. This one sends the form information to the URL mentioned in the action.


### Test your understanding

1. Open file **form_skel.html**. 
    
      
2. Insert the required input elements in the file and check that you have them all. 
You can use text input type for all but submit button.

## 2 Controlling input


### Different type attributes

HTML defines input types that you can be used in forms. The often used are:

- plain text 	`<input type="text">`
- text area		`<input type="textarea">`
- radio buttons	`<input type="radio">`
- check boxes	`<input type="checkbox">`
- password fields `<input type="password">`

The above are usually supported by browsers, but HTML has many new types also:

- email addresses 	`<input type="email">`
- url addresses		`<input type="url">`
- numeric data	`<input type="number">`
- date pickers	`<input type="date">`

Notice that not every browser supports the new types.

If you use these kind of types, you will get error messages like

![Example of an error message](img/error_html5.png).

The browser tries to verify user's input. These error messages depend on the operating system's language and also browser's language. It you change your browser's language, you will see these messages in another language. But if you don't want to change the language, there is a way in HTML5 to do it. By using title attribute, we'll get a partial solution, but in order to do it totally, we need either Javascript or PHP, we'll learn about these later.

### Selectable lists

The `select` element defines a selectable list, and the `OPTION` element is used to define a list item.
```html
<select name="example"> 
<option value="notknown">Not selected</option>
<option value="item1">Item 1</option> 
</select>
```

Every `option` element should have a unique value, just like in check boxes and radio buttons.

### Test your understanding

1. Open file **form_skel.html**. Change your input types for the input elements to appropriate values.

2. Try to put incorrect data in your form and check the browser's support for types.

## 3 Making it easier for the user

We have a couple of ways to help the user with forms. 

### Connecting text and control 

`label` elements are used to connect the text and the controls that are used in the form. For example radio buttons and check boxes often come with text that describes the choice. However if the user clicks the text nothing happens. That's because the browser doesn't know the connection between the text and the neighboring control. They must be wrapped up with label element.
```html
<form action="">
<input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
<input type="checkbox" name="vehicle" value="Car">I have a car 
</form>
```
You have to click on the box. But if you have
```html
<form action="">
<label><input type="checkbox" name="vehicle" value="Bike">I have a bike</label><br>
<label><input type="checkbox" name="vehicle" value="Car">I have a car </label>
</form>
```
it is enough to click on text too.

### Helping by grouping and hints

In many user interfaces you have seen how different elements on the screen are grouped together in order to make the input easier for the user. in HTML you can use `fieldset` element for this.
```html
<form action="">
<fieldset>
<legend>Credit Card</legend>
<label><input type="radio" name="card" value="Visa">Visa</label><br>
<label><input type="radio" name="card" value="MCard">MasterCard </label>
</fieldset>
</form>
```
you get

![Example of a fieldset and legend](img/fieldset.png)

In user interfaces it also a common practice to give hints for the user of the kind of data is expected. In HTML this can be achieved by `value` or `placeholder` attribute on the controls. The `placeholder` attribute's text disappears once the control is clicked in or gains focus and the `value` attribute's text stays in place when a control has focus unless a user manually deletes it.

![Example of a value and placeholder](img/input_hint.png)


### Using CSS to change the look

Remember the syntax for CSS rules
```css
selector {
	property : value;
	....
}
```

A useful selector for styling forms is CSS attribute selector which applies to an element with a particular attribute set to a value. For example
```css
input[type="text"] {
	color : blue;
}
input[type="submit"] {
	font-weight : bold;
}
```
Of course you can use also the normal selectors for elements like `form`, `legend`, `fieldset`, etc. Unfortunately support for styling form controls is inconsistent across browsers. 
Therefore you should always check that the results are what is expected.


### Test your understanding

Suppose we want to have our web site in another language. For example in Finnish. Open file **form_skel.html**.

1. Change your error messages to show the error text in another language. Find out how to do this!

2. At this point you have to click exactly the right spot on your checkboxes and like. Change this by using labels.

3. Arrange your form with legends and fieldsets in order to make it easier for the user to understand which data
belongs together.

4. Give input hint for the user in every place it is possible.

5. Make a separate file called **form.css** for your form to give it a more improved layout. Remember to link your CSS to the HTML document.

## 4 Other

### Hidden parameters

Sometimes we need a way to submit some additional parameter to the server. This can be done by using a `hidden` input parameter.
A hidden parameter has no onscreen appearence, but it will be sent to the server.
```html
<form>
......
	<input type="hidden" name="org" value="Acme" />
	....
</form>
```

### About RESET buttons

Earlier `Reset` buttons were common, they are used to reset a form's data to its initial value.

```html
<form>
......
	<input type="reset" value="Reset everything!" />
	....
</form>
```

The reason for this was that on web page designers wanted to follow usability heuristics of user control and freedom by allowing users an "emergency exit" out of any situation they may have entered.

Unfortunately `Reset` buttons almost never help users, but often hurt them. It is better to give users other ways to accomplish undoing.

For example in the case of text fields or check boxes, the user can always erase the entry and revert to the original state.

Radio buttons and checkboxes and pull-down menus are trickier. A classic design mistake on the Web is to have radio buttons that initially do not have a selection. Often, there is no way for the user to select a "nothing" option, once he or she has selected one of the choices. Also selectable menus should include an explicit selectable menu entry in pull-down menus for the default choice. 

There is one exception where `Reset` buttons can be used. This is when 
- the same user does repeat form-filling and
- the data to be entered differs significantly from one use of the form to the next

In other cases, it is easier for the user to edit the old data than to erase it and start from scratch.

### Regular expressions for validating input data

In addition to using different input types, we can also use patterns a.k.a.regular expressions. By patterns we can validate user input even more precisely. 
Pattern is an encoded sequence of characters that define a pattern of text characters. Remember that client-side validation is not reliable as the only means of
validation, it is useful to make the user interface more pleasant.

A Finnish social security number is often 999999-999X (for those who are born in the 20th century). First 6 digits are the birth date: day, month and year's last two numbers. 
After "-" there are 3 digits and last character can be either digit or letter from A to Y. If we want to make a pattern of this, it would be
```html
<input type="text" pattern="\d{6}\-\d{3}([0-9A-Y])" ...>
```
\d means a digit, \\- means the "-", [chars] means a set of characters.

### Test your understanding

1. Open file **form_skel.html**. Validate the user's data in Student id, email address and score by using patterns.


