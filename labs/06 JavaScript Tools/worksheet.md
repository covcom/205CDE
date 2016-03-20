# JavaScript Tools


## 1 Editing and Testing JavaScript Code

In the sidebar, locate the folder `labs/06 JavaScript Tools/` and open the file  `basic_math.html` . You can now make changes to the code. 
To preview the page (and run your program) you need to view it in a new tab in your web browser. 
At the top of the screen you should see a menu item called *Preview*.

Make sure the html code is open then click *Preview* and choose *Live preview file*
This will open your web page in a new browser tab as shown.

Now do the following:

Try out the application by entering different values and clicking on the Calculate link.

Read through comments in the JS file, and try to understand the code. You can now make changes to the code.

### 1.1 Test Your Understanding

1. the values read from the text boxes are stored as *strings*. Modify the code to store the quantity to an *integer* and the price, tax and discount as *floats* (hint, check the [crib sheet](http://www.cheatography.com/davechild/cheat-sheets/javascript/)).
2. modify the JS code to double the discount applied when the quantity ordered is greater than 100 items
3. modify the HTML form to include a *shipping* field, and include this value in the total calculation in `shopping.js`.

As you edit the file in C9 you have to save once in a while. To view the new version simply refresh the web browser tab running your web page.

### 1.2 JavaScript source material

To help you get acquainted with the syntax used in JavaScript, use a tutorial such as [W3Schools JavaScript tutorial](http://www.w3schools.com/js/). You will learn that several JavaScript constructs, such as the control structures are very similar to Java.

## 2 Chrome Developer Tools
To follow this example you will be using the Chrome Developer Tools.

### 2.1 Console Output

Load up `conditionals_booleans.html` and run it in a new browser tab.
Enter some valid inputs into the form and submit it...

“Nothing” happens. . . Actually, the result is being logged to the console which is a part of the Chrome Developer Tools integrated in to the browser.

1. From the customise and control menu in Chrome (3 horizontal bars), choose More tools > Developer tools (ctrl-shift-I on a Chromebook) to open the Developer Tools pane. 
2. This can be docked to the right or bottom of the main window (bottom preferable).
3. Click on the console tab and try submitting the form again (you can ignore errors at this point) to see output


### 2.2 Test Your Understanding

1. Load up `conditionals_booleans.html` and modify the HTML form to include a “Full Name” field
2. Add validation in contact.js to ensure that the name entered has at least two parts separated by a space, and is between 3 and 100 characters in length

## 3 ESLint Code Checking

Writing clean, readable, and error-free high-quality code is essential to maintainability. 
Therefore most languages now have automated syntax and style “checkers” called linters that code editors and IDEs can use to alert potential problems to programmers immediately, 
when they are writing their code.

ESLint is completely configurable through a configuration file .eslintrc which is located in the 06 Javascript Language directory. 
By default any file or directory starting with the period (.) character is hidden. 
To display hidden files and directories click on the gear icon at the top of the Documents Tree and choose Show Hidden Files.

1. the env object imports groups of pre-defined global variables based on the environment they are used in. 
2. the rules object defines any additional rules we want to enforce.
In this example we are specifying that we don't want semicolons at the end of each line, 
that we will use a 2 space tab for indenting, we will use single quotes for strings and that we are using UNIX line endings.

### 3.1 Enabling ESLint

To enable ESLint you need to copy configuration file .eslintrc to the workspace  ~/workspace directory. 
You can configure eslint, look at [configuring](http://eslint.org/docs/user-guide/configuring).

Load up `js/notes.js` in C9 and run it to prove the code is fully functional. Make sure you understand how it works.

1. Notice the red error circles and yellow warning triangles in the left margin. If you hover the mouse pointer over these you can find out more.
2. Read the warning message and use this information to correct the code

Note that many of the highlighted issues are about things like indentation, and consistency of style, as well as syntax. That is because linters take readable code very seriously, 
and so should you! You should aim to have no ESLint warnings when you write your JavaScript or other programming code.

1. Open up the preview of the switch_case.html file in a new browser tab to see what it does
2. Load the js/membership.js file and follow the code to determine how it works

### 3.2 Test your understanding
Once you have corrected for any ESLint errors found by the code linter (`js/notes.js`), do the following.
1. Locate all the ESLint errors and warnings and understand what they mean
2. Correct the app to eliminate all the errors (make sure it still runs correctly!)
3. Read up on the most common ESLint errors

## 4 Strict Mode

JavaScript’s strict mode allows you to use a safer, restricted version of the language. 
It makes changes to the semantics to help you avoid many common errors. 
For example if you don’t use the var keyword when declaring variables these become globally scoped. With strict mode enabled these get flagged up as errors.

To enable strict mode you simply add a line of code.

`"use strict";`

This can be added to the top of your script if you want it to apply to everything, alternatively it can be implemented only within certain blocks of code by adding it there instead.

### 4.1 Activity
Add this line to the top of your `notes.js` script. Notice how you now get a number of additional errors flagged in your code!

Amongst other things, the global objects console and document are not recognised. We need to indicate that these objects have already been defined 
but also that they must not be overwritten (false). 
To do this we need to identify these global objects in the `.eslintrc` file. Locate this in the `06 JavaScript Tools` folder and add the following:
```
"globals": {
    "console": false,
    "document": false
}
```

You should now see that the errors relating to these objects not being declared have disappeared.

### 4.2 Test Your Understanding

WIth strict mode enabled your program will throw errors which can be seen in the browser console.

1. Identify any errors flagged up in the editor
2. Attempt to fix these errors so your program runs.

## 5 Basic Debugging

For a much more detailed description read [Google’s debugging JavaScript guide](https://developer.chrome.com/devtools/docs/javascript-debugging).

Sometimes your attempts to change the code will introduce bugs. A bug is usually signalled by some kind of error message, usually RED in colour, appearing on the console. 
If you find a bug has appeared in your code do the following to help track it down:

1. Note the line number that caused the problem, if any is mentioned on the console output (sometimes it is not)
2. Load the ‘Sources’ tab in the developer tools area and select the JS file
3. Click in the margin next to any line number to add a code break (add it near but before the suspect line); you can add several if you wish
4. Now refresh the page and proceed as normal until the code execution stops at the line break you created
5. On the information tab on the right hand side you will see details about the call stack and currently scoped variables to help you pinpoint the state of your program
6. Use the “Step over / into / out of” buttons to execute your JS line by line and keep an eye on the stack and scope to catch anything unexpected

### 5.1 Task

Lets get familiar with the debugger:

1. Click on the Sources tab and open the notes.js file
2. Click in the margin to add a breakpoint to the first line of the addItem() function.
3. Refresh the browser, type in a new item and click the button. The execution will pause at the breakpoint without running line 5.
4. Click on the Step into next function call button (down arrow with dot). This will run line 5 and move execution to line 6. Click this button to execute the code line by line.
5. Observe the variables changing in the right-hand panel.

### 5.2 Test Your Understanding

Use the debugger to help fix a problem with our program:

It is currently possible to add duplicate items. Instead of adding duplicated the quantity should increase by one.


## 6 Local Storage

You have probably noticed that each time you reload the page, your list of items disappears. This is because the list is held in an array which gets cleared each time the script is reloaded.

Modern browsers implement a cool feature called HTML 5 Local Storage which enables you to persist data, even when the browser is shut down. We will be spending more time on this later in the module but lets show you a taste of its capabilities.

LocalStorage uses a dictionary to store data as key/value pairs. If we know the key we can set and get the data. One limitation of Local Storage is that it can only store strings however there are two functions that can turn any JavaScript object into a JSON string and back into an object. Again, we will be spending time working with JSON strings but we will implement  simple example.

### 6.1 Task

We will start by implementing two new functions in our code which will handle converting our array to a string and saving it and then taking the stored JSON string and turning it back into a JavaScript array.
```js
function saveList() {
    localStorage.notes = JSON.stringify(notes);
}

function loadList() {
    console.log('loadList');
    if (localStorage.notes) {
        notes = JSON.parse(localStorage.notes);
        displayList();
    }
}
```
Take a few moments to understand how these functions work.

### 6.2 Test Your Understanding

We have defined these functions but they are not currently being used (`js/notes.js`). Study the program carefully and modify it:

1. Each time an item is added or removed, the array should be saved to Local Storage.
2. When the program first loads it should load the data back into the array and display the items in the web browser.

### 6.3 Viewing LocalStorage

The Chrome Developer Tools includes a Resources tab that allows you to view, edit and delete key-value pairs stored in the LocalStorage. 
