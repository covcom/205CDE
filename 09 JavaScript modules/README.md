# JavaScript modules

This lab covers objects and functions again, but with more advanced uses. These code patterns are what brings out the full power of JS and are essential for understanding JS code libraries that you might use for bigger projects.

Below is an overall of files available in the current lab, and the associated level of skills required. In particular, the todo app in the `advanced_obj_fun` directory contains some example code that uses many of the key techniques you need to learn. Also, the application uses other files than those listed. However, by studying the four files listed below you will see how to implement the model part of _Model_ _View Controller_.

* Basics
    - first_class_functions.html (*not in excercises, take a look when you finish everything)
    - function_closure.html
    - js_classes.html
* Intermediate
    - prototype_inheritance.html (*not in excercises)
    - extending_js_types.html
* Advanced
    - advanced_obj_fun/
        * js/
            - model.js
            - store.js
            - app.js
        * index.html

Aim to complete these tasks in roughly 60-80 minutes of lab time.

1. Write a closure to maintain the internal state of a counter.
2. Define a constructor function and modify its prototype.
3. Create a new JS module. (For the adventurous!)

## Use closure to maintain internal state

Closure is the JS way to define a little environment that goes together with function. By 'environment' I meant variables etc that only this specific function can have access to. This is the JS way of doing encapsulation in a way similar to other languages such as Java.

> "Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created", from [MDN guide to JS closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

> Some nice discussions can be found on [StackOverFolow](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1).

This is a bit difficult to explain without an example. Let's look at an example now:

- Load the `function_closure.html` file and take a look at the functionality.
- Observe that the `button.onclick` event handler is a function that uses the count variable
- Observe also that this function does not specify any value for count
- Instead, count inside the handler function is given its value by the enclosing function context

Since the `window.onload` handler function encloses the `button.onclick` one, the latter has an "environment" of local variables that it can work with. The `onclick` function is, therefore, able to keep track of the state of a higher-level variable, namely `count`.

This technique adds a lot of power to the language. For example, as we see here, the state can be maintained in "private" scoped variables, even after the enclosing function has returned.

### Test your understanding

1. Add three buttons to the function_closure.html page: '-', '0', '+'.
    > You can think of these as the playback speed controls for a media player
    
2. Add a `<div>` with ID `playback-speed` to the page as well
3. Using the existing onload handler as an example, write another `window.onload` handler:
    - This one should have an internal state representing the current playback speed
    - Clicking on one of the '+' or '-' buttons should increment or decrement the current speed as appropriate
    - Clicking on the '0' button should reset the current speed to 0
    - The current speed should be displayed in the `<div>` you added
4. If you have time, use a single helper function to update the `<div>` rather than update it in each separate click handler.

## Construct objects and modify their prototype

Object Oriented JavaScript

1. Load the js_classes.html file and view it in a browser
2. Open the console window to view its output
3. Note the creation of three "coffee objects" in the JS code, using the new keyword and a constructor function called Coffee
4. Now open extending_js_types.html to see the use of JavaScript's inheritance mechanism: the prototype
5. Open the page in the web browser and note the console output.
6. Note that the prototype object of the built-in String JS data type has allowed us to "extend" the functionality of strings by adding a new string method called palindrome.

Prototype inheritance applies to any JS data type/object, including objects created as instances of constructor functions like  Coffee(). The prototype of an object can be modified or overridden by JS code at runtime. Any other object sharing this prototype is also modified in the same way.

> Note in js_classes.html there are two implementations of the Coffee class: one based on ES5 standard, the other based on the latest ES6. Bear in mind this two are equivalent -- the `class` keyword introduced in ES6 is a ['syntactical sugar'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), it's still function behind the scene.

> More examples of ES6 classes can be found on [sitepoint](http://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/).

### Test your understanding

1. First, add a Tea(type, ounces) class to the js_classes.html JavaScript.
    - Add properties for type  and ounces 
    - Add methods:  getSteepTime() and order() , and use appropriate code within them.
2. Now create some new Tea  instance objects and invoke the order() method to check that it works.
3. Once it is working, extend the Tea and Coffee prototypes by giving both a new method sip() 
    - Each invocation of sip() should simply log  "Hmm, tasty"  to the console

## Create a JavaScript module (N.B.: advanced)

This is more advanced but begins to show the power of JS as a fully fledged language for designing and building large-scale applications. In particular, function closures and immediate invocation allows us to define self-contained modules that do not pollute the global namespace. This is how libraries such as, for example, jQuery and YUI, are put together.

> See [JS module pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html) along with [Immediately-Invoked function expressions](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) for a good discussion of what follows.

1. Open index.html in the advanced_obj_fun folder and preview it.
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
    Together these JS modules implement the "model" part of MVC (Model View Controller).
    
4. Look at the JS files and note some of their similarities:
    a. Each one defines an "immediately invoked function"
    b. Each one contains a constructor function at the top
    c. store.js and model.js both extend their constructor prototypes
    d. store.js and model.js both export their constructor to a global namespace at the end

These things are all typical of the "module pattern" in JS. 

> The example used here is modified based on 'vanilla' flavor of the [TodoMVC](http://todomvc.com/). Click here for some help on [What (function (window, document, undefined) {})(window, document); really means](https://toddmotto.com/what-function-window-document-undefined-iife-really-means/).

### Test your understanding

* Write a short module that exports a utility object called "$" to the global namespace.
* This object should reimplement the JS `document.getElementById()` selector method using its own method `$.id()`.

In other words, any page that includes your new module JS file should be able to call `$.id("myButton")` and this will return a reference to the DOM element with ID "myButton" (if any).

By doing this, you should start to see how libraries such as jQuery add to or simplify the standard functionality of core JavaScript!