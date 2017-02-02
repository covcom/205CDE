# Function and objects

This lab introduces the two key data types in JS: objects and functions. Get used to their basic syntax and common use cases.

Aim to complete these in roughly 30-60 minutes of lab time.

1. Write a simple function to remove duplicates from a task list.
2. Nest objects to define the internal sub-components of a car and engine.
3. Use an inner "helper function" to calculate fuel consumption.

## Array manipulation

In this task, you will write a simple function to detect and remove duplicates from a task list.

1. Open the lab08 workspace containing the lab code and open the file **simple_function.html**. 
2. Preview this file in a browser tab and test to see it's working.
3. Open the associated JS file **tasks.js** and check you understand how it works.

### Test your understanding

You need the aforementioned files **js/tasks.js** and **simple_function.html**.

1. Add a button to the HTML page labelled "Remove duplicates".
2. When clicked, this button should trigger a new function removeDuplicates() against the tasks list.
3. The removal function should parse the list and remove any identical copies of previous items (leaving at most one).

## Nested objects

In this task, you will extend an existing JS object by nesting further object(s).

1. Open the **function_returns_object.html**  file.
2. Run the page in Chrome and open the developer tools JS console.
    
    > All output from the JS appears on the console.
    
3. Refresh the browser to see alternative outputs.
4. Review the JS in the HTML file and ensure you understand how it works.

### Test your understanding

1. Add a `makeEngine()` function that constructs and returns random engine objects. Engines might be characterised by:
    
    - Cylinders
    - CC Volume
    - Fuel type (diesel, petrol, etc.)
    - Max torque
    
2. Use the new function inside the `makeCar()` function, to make an engine and add it to the `car` object returned by `makeCar()`.
3. Ensure you include the engine details in the console log to show that it works

## Nested functions

In this task, you will modify an existing method of an object and "factor out" some of its code into a separate internal "helper function" which does an intermediary calculation.

1. Open the `object_methods.html` file.
2. Run the page in Chrome and then open the developer tools JS console.
    
    > all output from the JS appears on the console.
    
3. Review the JS in the HTML file and ensure you understand how it works.

### Test your understanding

1. Add an empty internal updateFuel() function within the drive method of the fiat object.
2. Add code to the new helper function which updates the fuel by decrementing the fiat’s fuel by 1.
3. In the original drive() method, instead of the assignment this.fuel = this.fuel - 1, invoke your new function.
4. Refresh the page and ensure that the console output is exactly the same as before.
5. Also, test it by adding an appropriate code break in the "Sources" tab of your file in Chrome developer tools, and watch the value of fiat.fuel change as you step through the calls to the fiat.drive() method.
