# HTML local storage

In this lab, you'll see how HTML introduce APIs that allow the browser to save some data locally, mainly for the purpose of offline apps.

Modern browsers implement a cool feature called HTML 5 Local Storage which enables you to persist data, even when the browser is shut down. Lets show you a taste of its capabilities.

LocalStorage uses a dictionary to store data as key/value pairs. If we know the key we can set and get the data. One limitation of Local Storage is that it can only store strings, however, there are two functions that can turn any JavaScript object into a JSON string and back into an object.

## Tasks

In the note example, you saw earlier in lab07 you can add or delete notes on a webpage. If you cannot remember run notes.html and have a play. 

Now we will start by implementing two new functions which will handle converting our array to a string and saving it and then take the stored JSON string and turn it back into a JavaScript array.

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

## View local storage

The Chrome Developer Tools includes a Resources tab that allows you to view, edit and delete key-value pairs stored in the LocalStorage. 

## Test your understanding

We have defined these functions but they are not currently being used (`js/notes.js`). Study the program carefully and modify it:

1. Each time an item is added or removed, the array should be saved to Local Storage.
2. When the program first loads it should load the data back into the array and display the items in the web browser.
3. There are some other files that use different HTML5 APIs, have a look at the code and see how much you understand.
    
    ├── js   
    │   ├── document_storage.js   
    │   ├── offline_storage.js   
    │   └── web_database.js   
    ├── document_storage.html   
    ├── offline_storage.html   
    └── web_database.html   

