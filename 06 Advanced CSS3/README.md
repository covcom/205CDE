# Advanced CSS3

In this lab, you learn to create a responsive layout for a web page or a website.

You first learn the basics of positioning elements to create a unified layout. The positioning is done using CSS, based on the proper markup of elements using HTML. In addition to the positioning of the elements, you learn to design the navigation and create a multi-level menu for your website.

In this lab you do the following tasks, it takes approximately 2 hours.

- Use CSS box model to define the appearance of your web pages.
- Position elements on a web page.
- Implement navigation functionality with CSS.

## CSS box model

First, open the file **boxmodel.html** that illustrates the CSS box model which is vital for understanding how to set the dimensions, margins and paddings of elements in a web page. Check the contents of the file. You notice that it contains four paragraph elements, each labeled to belong to a different class.

Create a file called **boxstyles.css** and link it to the HTML file.

In the newly-created CSS file, add the following lines of code:

```css
p.one {
    border: 1px solid black;
    padding: 3em;
    margin:  1em;
    margin-bottom: 0em;
}
```

This sets the visual appearance of the first text paragraph that belongs to class `one`. Reload the page and see how the paragraph is affected.

To truly understand the lines of code above, it is important to get an idea of the CSS box model.

The box model is applicable to block elements, i.e. elements that  hold a rectangular space in the screen. Recall that common HTML elements such as headers, paragraphs, and lists are block elements.

For each element, you can set various CSS properties, such as:

- `border`: the thickness and looks of the border outlining the element
- `margin`: the amount of free space outside the border
- `padding`: the amount of free space inside the border

![](http://www.w3schools.com/css/box-model.gif)

Notice that borders are normally invisible for most elements (such as regular paragraphs). In spite of this, you can use margin and padding settings in the normal way.

By default, the settings above apply to all four directions. In the example above, the margin setting was overridden for the bottom direction.

Now, add rules for the remaining paragraph classes (two, three, four) to generate the following appearance for the remaining paragraphs:

- class `two`: same border as for class `one`, no padding, 5em margins except for the top where no should be no margin.
- class `three`: a 3-pixel wide solid black border only in the left edge of the paragraph, 1em padding except for the top where no padding is applied, 2em top margin, 8em bottom margin, no left and right margins.
- class `four`: a 5 pixels wide dashed red margin with rounded corners (1em radius).

Verify that all four paragraphs are displayed exactly as intended.

### Developer tools

In Google Chrome browser, there're a built-in Developer Tools for viewing the layout of an individual element. It is an important tool for finding and correcting layout problems. Click options menu to the right of the menu bar, then More Tools ==> Developer Tools to view it.

![](.md_images/tools.png)

Alternatively, you can simply right-click on an element and select **Inspect**. Try it for each differently-formatted paragraph on your page.

![](.md_images/ins.png)

### Test your understanding

The file **box_assignment.png** in the lab's `images` folder contains an image of intended appearance for a webpage. Using CSS box model, construct an HTML page and the associated CSS file that reproduce the appearance of the image.

> In the lab's **images** folder, you also find the public domain image **berries.png** (author Scott Bauer, via http://commons.wikimedia.org) needed in the assignment. 
    
![(Alternatively, you see the image embedded if you open this assignment sheet in a separate browser window).](.md_images/box_assignment.png)

## Position of elements

So far, we have modified the way how individual elements look and how much space should be left inside or outside the margin.

Next, you learn how to modify the position, width and height of a block element. As a result, you will be able to generate exactly the desired layout for your web page.

There are three positioning schemes in CSS:

1. Normal flow of positioning
2. Floating positioning
3. Absolute positioning

So far, we have used normal positioning where elements are stacked on top of each other in the order they appear in the HTML file.

Next, let's take a look at the alternative positioning schemes.

### Float positioning

A floating element is an element whose location in the web page is treated in a special way, so it is removed from the normal flow of positioning. The remaining elements on the page are rendered so that they wrap around the floating element.

Floating positioning is common for figures. A floating image can be positioned in the desired location on the page, and any surrounding text paragraphs and other elements can be set to surround the image nicely.

Open the file **floating.html** and view the HTML file as well as the linked CSS file **floatstyles.css**, located in the **css** directory.

The HTML file contains one image tag. First, add an identifier for the figure holding the image, as it is going to be treated in a different way compared to potential other figures in the document:

```html
<figure id="floating">
<img src="images/onions.png" alt="Onions">
    <figcaption>Onions are delicious.</figcaption>
</figure>
```

Next, open the linked CSS file **floatstyles.css** and add the following rule:
```css
figure#floating {
    float: right;
}
```

Reopen the page in the browser. The figure is now positioned to the right, together with the caption. The text wraps around the figure.

Next, we make a floating fact box that contains multiple elements. Add the following files in the HTML file **floating.html** right after the main heading, before any paragraphs:


```html
<section id="factbox">    
<p>Did you know?</p>
<ul>
    <li>The latin name for onion plant is <em>Allium Cepa</em>.</li>
    <li>Onions have been used in cooking for thousands of years.</li>
    <li>89% of onion's content is water.</li>
</ul>
</section> 

```

This time, the floating entity consists of two elements: a paragraph (`p`) and an unordered list (`ul`). Thus, we need a special container element that contains both the paragraph and the list. 

There are two alternatives for the container: either a generic `div` element or a more semantic `section` element. As the header and the list in the fact box clearly form a semantic entity, it is advisable to use the latter.

Now, add the rule for the `section` element whose identifier is `factbox`:

```css
section#factbox {
    float: left;
    border: 1px solid black;
    margin: 2em;
    padding: 1em;
}
```

Reload the page to see the effect of the modification. The fact box should appear bordered on the left side of the content, text wrapping around it.

Test, how the floating elements behave as you resize the window.

### Absolute positioning

The third positioning scheme is absolute positioning. In this scheme, an element's absolute position is given, usually in pixels or percentage.

Next, let's create navigation links for the onion page. Initially, we set the links to be located in accordance with the default flow of the elements. Then, we use CSS to reposition the links into the top left edge of the screen.

Add the navigation information (using the HTML5 `nav` element) into the bottom of **floating.html** file, inside the body element:

```html
<nav>
  <a href="1.html">Nutrition</a> 
  <a href="2.html">Recipes</a> 
  <a href="3.html">Growing</a> 
  <a href="4.html">History</a>
</nav> 
```

Note that the files that the links point to do not exist. We could add them later.

Reload the page and see how the links are positioned by default.

To move the navigation items to the left edge, we use absolute positioning. Add the following rule for the nav element to the CSS file:
```css
nav {
    position: absolute;
    top: 120px;
    left: 40px;
    width: 100px;
}
```

This sets the absolute position of the element to be exactly 120 pixels from the top of the page and exactly 40 pixels from the left edge of the page. Furthermore, the width of the element is set to 100 pixels.

Note that the elements positioned using absolute positioning may appear on top of other elements, essentially garbling the output. To avoid this, we move the left edge of the page contents to 200 px, to facilitate the 100 px wide navigation element, starting at 40 px. Modify the rule for `body` element to contain the new `margin-left` property:

```css
body {
    font-family: Arial, Verdana, sans-serif;
    margin-left: 200px;
}
```

### Test your understanding

1. Open file **columns.html**. Generate a style sheet **columnstyles.css** where the paragraphs are displayed in:
    * two columns
    * three columns
    
    > Search for CSS properties containing the word `column`. Currently, there are browser restrictions and inconsistencies in displaying multi-column content, but the workarounds are well documented. Try to take these into account in your CSS.
    
2. In Lab 3 (HTML5), you created a home page of fictional Jane or John Doe, or yourself (If you didn't do that lab, quickly generate a home page). Build a CSS file for the home page that displays the information in a nicely formatted fashion. Position the image as a floating element on either edge of the page.


## Navigation

The next task is to build a navigation menu bar to the website using CSS. Depending on the number of menu items, the menu bar can contain multi-level menus.

A menu bar is be defined as an HTML unordered list. Each menu in a menu bar is a list item.

The menus can contain submenus. A submenu is coded as a list that is within the parent menu's list item.

Open file **menu.html** as well as the linked CSS file in the **css** directory called **menustyles.css**.

Try the functionality of the two-level menu by hovering the mouse pointer over the **Item 1**, **Item 2**, and **Item 3** texts. The last two have submenus.

Examine, how the hierarchical menu was created using plain CSS. Note that the links are just dummies; they don't lead to any web pages. In the example, the barebones menu bar contains only minimum formatting that is necessary for correct layout.

Important things to note:

- List bullets are removed by setting `list-style: none`.
- Second-level list items are set, by default, hidden: `visibility:hidden`. 
- Whenever the mouse pointer hovers over the first-level list item, the second level list-item is set visible. The selector `nav ul li:hover > li` points to those `li` items that are descendants of `nav`, `ul`, and (one that a mouse hovers over) `li` elements.

### Test your understanding

You need the aforementioned file `menustyles.css`.

1. Add a fourth menu with a few menu items to **menu.html**.

2. Use CSS to format the menu bar in the way that is shown in file **menu.png** in the lab's **images** folder.
    ![(Alternatively, you see the image embedded if you open this assignment sheet in a separate browser window).](.md_images/menu.png)
3. Make one of the second-level menu items to contain a third-level menu. Make necessary amendments to the CSS file.
