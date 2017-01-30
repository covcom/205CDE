# The Document Object Model (DOM)

DOM manipulation by JS allows you to 'read', 'write', 'update', and 'delete' actual elements of the web page itself. In other words, you can use JS to modify the HTML presented to the user dynamically.

## DOM elements

The DOM is essentially a description of the elements on a web page along with their attributes, properties, and accessible methods. To see JS interacting with the DOM, follow the next steps.

> Do these after a quick scan of the [MDN DOM introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

1. Load `map.html` and preview the functionality in C9
2. Observe that the `showCoords()` function sets the innerHTML property of a DOM element
3. Also observe that the `addtext()` function dynamically adds a new element to the DOM ( a "text node").
    * Similarly you can add other HTML tags such as `<a>` or `<p>` etc., or update their attributes

> Discussions about innerHTML vs appendChild(txtNode) on [statckOverflow](http://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode).

### Test your understanding

1. Use the `createElement` method of the document object to add a new list `<ul>` to the DOM
2. Populate this list using a JS for loop which uses `appendChild` to add list items `<li>`, using the new `<ul>` as the parent node.
3. Use a nested `innerHTML` assignment to put some text on your list items.

## DOM event handlers

You have already seen events in JS: `window.onload` for example, is fired when the window has completed loading. Most interactive JS requires event handlers for a number of types of events. A handler is just a piece of code (typically a function) that is run when the event happens.

Most events are context-specific: that means they relate to the DOM element that the event involved, for example, a `<button>` or a `<div>` with a particular id or class attribute. You also need to know how to "turn off" event handlers that you no longer need.

In this task, you will write code to respond to a series of events. The code will access data contained within a form and display it in HTML tags.

1. Open the file  simple_dom.html and preview it. Make sure you open the Chrome Developer Tools.
2. Open the associated JS file  js/simple_dom.js  and check you understand how it works.

Experiment by entering text into the three textboxes and clicking on the button. Check you fully understand how the interactions work.

Identify how the script can locate both the textboxes and the heading and paragraph tags.

Notice the two different ways the functions are called by the event handler on line 5 and line 6. Can you understand the different syntax used?

There is one bug in the script, can you identify what this is?

### Check your understanding

1. There is currently an event handler called onkeypress attached to the email field. Substitute the following events and verify they do what you expect:
    * onkeydown
    * onkeyup
    * onmouseover
    * onmouseout
    * onchange
    * onclick
    
2. The onclick event handler currently calls a named function. Using the code on line 6 as a guide, replace this with an anonymous inline function.
3. Modify the page so that the name, email and password are displayed in the heading and paragraph tags when the button is clicked.
4. Modify the page so that the headings and paragraphs are updated as the user types. Remove the button and its event handler.

## Event handler incompatibility

The code you will look at below invokes handlers that check for methods and properties that are not shared across all browsers (browser incompatibility implies that the same JS does not work in all browsers). Libraries such as jQuery do this automatically, but it is important that you see how it is achieved: loading all of the jQuery just to handle a click event is usually massive overkill, it is often better to keep the dependencies to a minimum.

1. Load events.html and preview its functionality.
2. Note that the window.onload event is given a function (this should be familiar from previous weeks)
    * Observe that the function checks whether particular methods are available on div in the DOM
    * Depending on the method availability, the onload handler invokes a click handler on the div and passes it a callback function called handleClick
3. Note that the callback handleClick looks for a property called target on the event it is passed
    * Depending on the property availability, the callback correctly identifies the target element in the DOM
    
> Check these links for discussions on [addEventListener vs attachEvent](http://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent) and [window.event](http://stackoverflow.com/questions/6926963/understanding-the-window-event-property-and-its-usage).

## Test your understanding

1. Add a new div containing some text
2. Add a "mouseover" event listener on your new div
3. Add a mouseover handler which alerts the user which element ID was hovered over

## JSON

See the [MDN Using native JSON guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) to help understanding the two key JSON methods described here.

JSON is the "JavaScript Object Notation" and is a way of describing structured data which is particularly useful in JS because it corresponds very closely to the object literal syntax.

It’s two main methods are for converting strings to and from "native" JSON objects that your JavaScript program can work with.

1. Load JSON.html and preview it, making sure to view the console output using F12.
2. Note that the first output corresponds to accessing a property of a JS object that was created from a string using JSON.parse().
3. Note that the second output corresponds to displaying in text format (also suitable for transmission over HTTP) the contents of a JS object, including its property names and values.

### Test your understanding

1. Define a new JS object in the `JSON.html` script which also contains nested objects (recall that JS objects can be nested multiple times) as some of its properties. For example:
    ```js
    var employee = {
        name: { first: "Colin",
                second: "Stephen" },
        title: "Assistant Lecturer"
    }
    ```
    
2. Convert your object to a JSON string myString and display it in a `<div>` somewhere on the page
3. Convert the string back to a JS object myObject and assign one of the nested objects to a new variable. For example:
    
    `var employeeName = myObject.name;`
    
4. Stringify the new subobject and display it in another `<div>` elsewhere on the page.

## Reterive JSON data

In this task, you will learn how to visualise lists of data by manipulating the DOM.

1. Open the file  building_lists.html  and its companion script file  building_lists.js  and take a few moments to understand how the program works.
2. Preview the HTML file in the Chrome browser, open the console in the Chrome Developer Tools then refresh the browser.
3. Open the  data/books.json  file and see if you can relate the contents to the data displayed in the console.

### Test Your Understanding

Now you understand how the program works, try the following activities:

1. Let's start with a simple task. Change the list to bullet-points and display the book titles and year of publication.
2. Now replace the bulleted list with a table that displays each field in a different column
3. Can you add column-headings?
4. Finally, add an event handler so when you click on a row, the book title is displayed at the top of the page.

## DOM scripting

There is a lot going on "behind the scenes" in libraries such as jQuery which abstract away many of the browser inconsistencies and deep hierarchies of objects, properties and methods relating to the DOM. You can review these DOM objects and their functionality on the [MDN DOM API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

This task involves a "helper script" that does some DOM and event manipulation for you. It is like a "mini jQuery" and even defines a utility DOM selector object called $.

* Load up dom_scripting.html and js/dom_utils.js and check the functionality.
* Three things are being done:
    1. A button is assigned an event handler (callback) which fires every time the button is clicked
    2. A button is assigned a self-removing event handler which fires the first time the button is clicked
    3. A button is assigned a DOM manipulating event handler for its click events

The actual code in `dom_scripting.html` is short and self contained, this is because the selectors `U.$()`, the event listeners and unlisteners `U.addEvent()` and `U.removeEvent()`, and the DOM manipulator `U.setText()` are defined in the separate utility code file dom_utils.js.

- Have a look at the utility JavaScript
- Note that U is simply an object with some useful methods which wrap native JS methods for achieving event interaction and DOM manipulation. An important thing to note is that where there exist browser incompatibilities, the utility methods defined on U need to conditionalise on the JS methods being available. For example, in U.setText():
    
    ```js
    if (output.textContent !== undefined) {
        // use this property
    } else {
        // use innerText instead
    }
    ```

### Test your understanding

- Have a look at dom_utils_global.js, which is an implementation of a few additional DOM/event helpers
    - In particular note that it is defined as a module.
    – Carefully think about how `$live` is defined here:
        - an immediately invoked function returns a (closure) function which adds handlers to events and which stores these associations in an object containing event handler arrays
        - in addition, the dispatchEvent() is a closure over the eventRegistry object and is therefore able to be called against this registry whenever a listened-to event happens, even when the event happens on an element that was not defined in the DOM when the event handler was added!
        - this is the power of closures
        
- Adjust dom_scripting.html to include the dom_utils_global.js file (as well as the original dom_utils.js)
- Now refactor the JS code in the HTML file to use window.$live to register the events and handlers previously dealt with by the U object.
- Try adding a DOM element dynamically to the page, which has a "live" listener already defined earlier in your code. It should react to the listened- to the event even though it was not present when you added the $live event association.
