# JavaScript Modules

This week covers more advanced uses of objects and functions in JS. Objects and functions are extremely powerful. This week explores some of the more advanced ways you can use both of them.

## Task List

Aim to complete these in roughly 60-80 minutes of lab time.

1. Write a closure to maintain the internal state of a counter.
2. Define a constructor function and modify its prototype.
3. Create a new JS module. (For the adventurous!)

## 1. Use closure to maintain internal state

MDN guide to JS closures.

- Load the `function_closure.html` file and take a look at the functionality.
- Observe that the `button.onclick` event handler is a function that uses the count variable
- Observe also that this function does not specify any value for count
- Instead, count inside the handler function is given its value by the enclosing function context

Since the `window.onload` handler function encloses the `button.onclick` one, the latter has an “environment” of local variables that it can work with. The `onclick` function is therefore able to keep track of the state of a higher-level variable, namely `count`.

This technique adds a lot of power to the language. For example, as we see here, state can be maintained in “private” scoped variables, even after the enclosing function has returned.

### Test your understanding

1. Add three buttons to the function_closure.html page: ‘-’, ‘0’, ‘+’.
    - You can think of these as the playback speed controls for a media player
2. Add a `<div>` with ID `playback-speed` to the page as well
3. Using the existing onload handler as an example, write another window.onload handler:
    - This one should have an internal state representing the current playback speed
    - Clicking on one of the ‘+’ or ‘-’ buttons should increment or decrement the current speed as appropriate
    - Clicking on the ‘0’ button should reset the current speed to 0
    - The current speed should be displayed in the `<div>` you added
4. If you have time, use a single helper function to update the `<div>` rather than update it in each separate click handler.

## 2. Use functions to construct objects and modify their prototype

Object Oriented JavaScript

1. Load the  js_classes.html  file and view it in a browser
2. Open the console window to view its output
3. Note the creation of three “coffee objects” in the JS code, using the new keyword and a constructor function called Coffee
4. Now open  extending_js_types.html  to see the use of JavaScript’s inheritance mechanism: the prototype
5. Open the page in the web browser and note the console output.
6. Note that the prototype object of the built-in String JS data type has allowed us to “extend” the functionality of strings by adding a new string method called  palindrome .

Prototype inheritance applies to any JS data type / object, including objects created as instances of constructor functions like  Coffee() . The prototype of an object can be modified or overridden by JS code at runtime. Any other object sharing this prototype is also modified in the same way.

### Test your understanding

1. First, add a  Tea(type, ounces)  constructor function to the  js_classes.html  JavaScript.
    - Add properties for  type  and  ounces 
    - Add methods:  getSteepTime()  and  order() , and use appropriate code within them
2. Now create some new  Tea  instance objects and invoke the  order()  method to check that it works
3. Once it is working, extend the  Tea  and  Coffee  prototypes by giving both a new method  sip() 
    - Each invocation of  sip()  should simply log  "Hmm, tasty"  to the console

## 3. Create a JavaScript module
Make web searches with keyword 'Immediately-Invoked function expressions' for a good discussion of what follows.

This is more advanced but begins to show the power of JS as a fully fledged language for designing and building large-scale applications. In particular, function closures and immediate invocation allows us to define self-contained modules that do not pollute the global namespace. This is how libraries such as, for example, jQuery and YUI, are put together.

1. Open the advanced_obj_fun folder and preview index.html.
2. Play with the app, it is a simple task list. However, it is implemented as a proper application, using modules.
3. Load the following files in the editor:
```
advanced_obj_fun/
  js/
    model.js
    store.js
    app.js
index.html
```
Together these JS modules implement the “model” part of MVC (Model View Controller).

4. Look at the JS files and note some of their similarities:
    a. Each one defines an “immediately invoked function”
    b. Each one contains a constructor function at the top
    c. store.js and model.js both extend their constructor prototypes
    d. store.js and model.js both export their constructor to a global namespace at the end

These things are all typical of the “module pattern” in JS. For more on it, see the website linked to above.

### Test your understanding

Write a short module that exports a utility object called “$” to the global namespace.

This object should reimplement the JS document.getElementById() selector method using its own method $.id().

In other words, any page that includes your new module JS file should be able to call $.id("myButton") and this will return a reference to the DOM element with ID “myButton” (if any).

By doing this you should start to see how libraries such as jQuery add to or simplify the standard functionality of core JavaScript!
