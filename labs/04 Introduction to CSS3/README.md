### Using CSS to change the look on forms

### originally from Finland lab 06 html5 forms

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

