# Database

In this lab, you'll do some SQL excercies using C9 and SQLite. 

There're two parts in this current lab: If you have done SQL before in 104KM, or doing it right now in 220CT, and you know what you do, 

## SQLite

### CRUD operations

### Queries

### Advanced features


### Test your understanding









## HTML local storage (N.B.: bonus)

You have probably noticed that each time you reload the page, your list of items disappears. This is because the list is held in an array which gets cleared each time the script is reloaded.

Modern browsers implement a cool feature called HTML 5 Local Storage which enables you to persist data, even when the browser is shut down. We will be spending more time on this later in the module but lets show you a taste of its capabilities.

LocalStorage uses a dictionary to store data as key/value pairs. If we know the key we can set and get the data. One limitation of Local Storage is that it can only store strings however there are two functions that can turn any JavaScript object into a JSON string and back into an object. Again, we will be spending time working with JSON strings but we will implement  simple example.

### Tasks

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

### View local storage

The Chrome Developer Tools includes a Resources tab that allows you to view, edit and delete key-value pairs stored in the LocalStorage. 

### Test your understanding

We have defined these functions but they are not currently being used (`js/notes.js`). Study the program carefully and modify it:

1. Each time an item is added or removed, the array should be saved to Local Storage.
2. When the program first loads it should load the data back into the array and display the items in the web browser.

