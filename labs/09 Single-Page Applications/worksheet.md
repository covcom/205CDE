# Single-Page Applications

This week you will be modifying the content of the web browser through manipulating the Document Object Model (DOM). Once you have mastered this you will apply the skills you have learned in modify a Single-Page Application (SPA).

## Task List

Aim to complete these in roughly 30-60 minutes of lab time.

1. Use a range of event handlers to access data from a simple form and display it in html tags.

2. Take a complex JavaScript object containing arrays and objects and display the data in the web browser.

3. Take an existing SPA and make improvements to it.

## Resources

One of the most useful resources is the Mozilla JS Tutorial. You should read this to become familiar with the best features of the language.

## 1 Event Handlers

In this task you will write code to respond to a series of events. The code will access data contained within a form and display it in HTML tags.

1. Open the Cloud9 project containing the lab code (see the previous lab) and open the file  simple_dom.html  from  /labs/10 Single-Page Applications/ 
2. Use the  Current File (static)  button to test out what the page does. Make sure you open the Chrome Developer Tools at the Console tab.
3. Open the associated JS file  js/simple_dom.js  and check you understand how it works.

Experiment by entering text into the three textboxes and clicking on the button. Check you fully understand how the interactions work.

Identify how the script can locate both the textboxes and the heading and paragraph tags.

Notice the two different ways the functions are called by the event handler on line 5 and line 6. Can you understand the different syntax used?

There is one bug in the script, can you identify what this is?

### Check Your Understanding

Now you have a good idea of how the JavaScript code works, try the following:

1. There is currently an event handler called onkeypress attached to the email field. Substitute the following events and verify they do what you expect:
    a. onkeydown
    b. onkeyup
    c. onmouseover
    d. onmouseout
    e. onchange
    f. onclick
    
2. The onclick event handler currently calls a named function. Using the code on line 6 as a guide, replace this with an anonymous inline function.
3. Modify the page so that the name, email and password are displayed in the heading and paragraph tags when the button is clicked.
4. Modify the page so that the headings and paragraphs are updated as the user types. Remove the button and its event handler.

## 2 DOM Lists

In this second task you will learn how to visualise lists of data by manipulating the DOM.

1. Open the file  building_lists.html  and its companion script file  building_lists.js  and take a few moments to understand how the program works.
2. Open the page in the Chrome browser, open the console in the Chrome Developer Tools then refresh the browser.
3. Open the  data/books.json  file and see if you can relate the contents to the data displayed in the console.

### Test Your Understanding

Now you understand how the program works, try the following activities:

1. Lets start with a simple task. Change the list to bullet-points and display the book titles and year of publication.
2. Now replace the bulleted list with a table that displays each field in a different column
3. Can you add column-headings?
4. Finally add an event handler so when you click on a row, the book title is displayed at the top of the page.

## 3 Single-Page Application

In this final activity you will be applying the skills you acquired in the previous two activities to make improvements to a simple single-page application.

1. Open the file  lecture_notes.html  and its associated JavaScript file.
2. Load the page into a chrome tab and open the Console window.
3. Click on each of the two links at the top of the page and see what happens...

### Test Your Knowledge

Its now time to implement the missing functionality:

1. The links should allow you to toggle between the add and edit content. At the moment this functionality is missing. See if you can fix this (the code on lines 7-9 should give you a clue).
2. Next we need to add new note objects to the notes array when the add button is clicked. The basic function has already been written. You need to complete it. Make sure you clear the title and note fields once the note has been added. Call the loadList function to load the list items into the notes list.
3. Finally, as the user changes the title or note you need to update the appropriate object in the array.
