# Introduction to CSS3

In this lab you learn to use CSS3 for defining the visual outlook of a web site.

As you know by now, the purpose of HTML is to define the structure and content of a web site. It is not intended to contain any representational markup. CSS (Cascaded Style Sheets) is designed for that purpose.

This lab focuses on basic repsetentation (colors, fonts, etc.). The layout of the elements in a web page will be covered in the next lab.

From now on, we use CSS as a synonym for CSS3, which is the newest version of the styling language.

## Task list

In the lab you do the following tasks:

1. Perform basic formatting (colors, fonts, etc.) of your web pages.
2. Use CSS classes and identifiers to pick the correct elements 
3. Fine-tune your selection by picking nested elements and using pseudoelements.

This lab takes approximately 2 hours.


## 1 Style sheet basics

The purpose of a style sheet is to collect all information on how the pages in a web site should be visually rendered, into one place.

Ideally, all web pages in a site should be linked into one style sheet (one CSS file) that contains all visual formatting rules for the entire web site.

This approach makes a clear separation between content and representation. The approach makes it easy to get a uniform outlook for the entire site. Moreover, one can easily build alternative views that may be strikingly different visually yet they share the same content.


### Creating and linking a style sheet

Create a new file in Codio and name it **simple.css**.

In the resulting CSS file, replace the placeholder content with the following:
```css
body {
    font-family: Arial, Verdana, sans-serif;
}

h1, h2 {
    color: blue;
    font-weight: bold;
}
```

Examine the CSS file and verify that you understand its contents. Pay attention to the following points:
- The file contains two rules. Each rule begins with the list of elements it has an effect on. The first rule is applied to the `body` element whilst the second rule is applied to `h1` and `h2` header elements.
- Followed by the element names (called selectors), there is a block starting with `{` and ending with `}`. This block contains a list of properties.
- The first rule (applicable to the `body` element) contains one property for setting the font.
- The second rule (applicable to major headers) contains two properties, one for setting blue font color and the other for bold text.
- The rules are automatically in effect in the nested subelements, so the font setting for `body` element applies to all elements in the page, including headers, lists, and paragraphs. 
- The fonts are given as a list of alternatives. The browser uses the first font in the list that it is capable of. The list should always end in a generic font such as `serif` or `sans-serif`.

Even though the CSS file is present, it has no effect as it is not currently linked to any HTML document.

The next step is to link it to the file **csstest.html** in the lab folder. First, open the file and see how it looks like without the CSS file. The browser now uses its default stylesheet for displaying the page.

Then, insert the following line of HTML code in the `head` element of the HTML file:

```
<link href="css/simple.css" type="text/css" rel="stylesheet" />
```

The line links the HTML file to the just created CSS file.

The link can be added before or after the `title` element, as the order of elements within `head` element is not important.

Having added the link, reload the web page and see how the rules are applied to the page.

Next, play with the CSS file. Add new rules and properties to the file and see how they affect the web page. Note that Codio helps you in writing the contents of a CSS file by proposing property names and values as you type.

You can find a complete list of CSS property names and possible values (among other information) at the [W3C Cascading Stylesheets documentation](http://www.w3.org/TR/CSS/).

### Colours

In the example above, the colours of certain elements were set.

This can be done in two ways:
- using colour words ("red", "blue", etc.)
- using RGB colour values.

In RGB colour system, each colour is encoded as a combination of three bytes (valued 0 to 255), corresponding to red, green, and blue channels. For instance, bright red is (255,0,0) and royal blue is encoded (65,105,225).

Thus, valid ways to set the `h1` colour would be:
```css
h1 {
    color: blue;
}
```

or

```css
h1 {
    color: rgb(65,105,225);
}
```

In CSS3, RGB colours can be supplemented by an additional alpha channel, which sets the opacity value (0.0 meaning fully transparent and 1.0 fully opaque).

To add some opacity to headers, the aforementioned rule would be:
```css
h1 {
    color: rgba(65,105,225,0.7);
}
```


### Font sizes and measurements

Add the following lines of code to **simple.css** to change the font sizes:

```css
h1 {
    font-size: 4.0em;
}

ul, ol {
    font-size: 0.8em;
}
```

This sets a large font size for the first-level headers and a smaller than normal size for unordered and ordered lists.

In the previous example, you probably noticed that some properties (such as `font-size`) require you to set sizes . CSS provides alternative ways to specify sizes:


| Unit | Type     | Meaning                                                  |
|------|----------|----------------------------------------------------------|
| em   | relative | multiplier of the default font size (letter 'm' width).  |
| %    | relative | percentage of default font size.                         |
| px   | absolute | number of on-screen pixels.                              |
| pt   | absolute | Amount in points. A point equals to 1/72 of an inch.     |

The percentage unit has different meanings in other contexts. For fonts, it is advisable to use relative units. This is due to the fact that users may have set a different default font size because of vision problems, for example.

Play with the measurements and see how the web page is affected.

### Validation

Just like HTML5 files, CSS files should be validated using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

Validation makes sure that your CSS file complies with the CSS syntax. It may also help you to spot errors in the CSS file.

Go to the validation page, and validate the file you created. If no errors are found, introduce some on purpose and see how the validator reports them.


### Test your understanding

You need the aforementioned file `simple.css`.

1. Using the CSS documentation, make the following amendments to the CSS file:
    a. Add a border around each list and change the color of list items to dark grey. 
    b. Indent the paragraphs and lists.
    c. Make figure captions smaller and use bold face.
    d. Set a background color for the page.
    

## 2 Classes and identifiers

So far, the rules in the CSS file have been applied to all elements matching one of the selectors. For example, all paragraphs have automatically had the same looks.

It is possible to create a separate outlook for some instances of a given element by using classes or selectors.
- Classes can be applied to multiple instances of an element. These instances can also be a mixture of various element types, such a paragraphs (`p`) and first-level headers (`h1`).
- Identifiers are unique to each instance.


### Classes

An instance of an element is assigned to a class by entering a class attribute in the corresponding start tag in the HTML file.

Enter the following line of markup into **csstest.html**:

```html
<p class="copyright_notice">Photo courtesy of Pekka Virtanen.</p>
```

In the CSS file, assign a rule for paragraphs belonging to copyright\_notice class:
```
p.copyright_notice {
    font-size: 0.8em;
}
```

The rule is now applied to only those paragraphs that belong to `copyright_notice` class. There can be many such paragraphs, each having a similar `class` attribute. Verify this in browser.

Alternatively, you could create a rule for all elements in `copyright_notice` class, regardless of whether they are paragraphs, list items, or something else:
```css
.copyright_notice {
    font-size: 0.8em;
}
```

An HTML element can belong to multiple classes simultanously:
```html
<p class="info urgent">The tour starts at 10 am.</p>
```

The paragraph element above belongs to two classes: `info` and `urgent`.

### Identifiers

As seen before, multiple elements can belong to the same class. However, unique identifiers are a better option to generate rules that are applied only once.

This is marked in HTML by the identifier attribute:
```html
<p id="special">This is different from all other paragraphs</p>
```
The CSS rule looks as follows:
```css
#special {
    font-size: 0.8em;
}
```

Add the paragraph and the corresponding rule in your files and verify the outcome.

Alternatively, you could use `p#special`, but - since there cannot be another special element that is not a paragraph - this would result in the same outcome.


Now, open file **selectors.html** and the associated style sheet **selectors.css** to play with classes and identifiers.

In the file, there are five paragraphs (`p`) and one header (`h1`). Verify that you understand the following:

- The first and the second paragraphs are regular paragraph elements (start tag `<p>`). For these paragraphs, standard rules for `p` elements are applied.
- The third and the fifth paragraphs are assigned a common class name (start tag `<p class="alert">`). For these paragraphs, standard rules for paragraphs are applied. In addition, rules for all `alert` class elements (`.alert`) are applied as well as those rules that are specific to paragraphs belonging to alert class (`p.alert`).
- The fourth paragraph is supposed to have a unique formatting. Thus, it is assigned an identifier (start tag `<p id="unique">`). For this paragraph, standard paragraph rules plus rules specific to this identifier (#unique) apply.
- The header belongs to `alert` class like two of the paragraphs. It is affected by a rule that is targeted to all elements of `alert` class (`.alert`). In addition, all rules for `h1` would be applied but there is none.
- The rule for `body` element is applied to all elements as they are nested elements inside the body element.

If a property of an element would be defined in multiple CSS rules, the rule whose selector has highest specificity wins. For instance, the properties defined in a class-specific rule override the attributes defined in the general rule for the element.


### Test your understanding
1. Modify the **selectors.html** and **selectors.css** files so that the first, third, and fifth paragraph appear underlined (in addition to the existing formatting). You should achieve this with a single CSS rule.

2. In **csstest.html** file, add a paragraph about Basic programming to the bottom of the page (Basic was a common language for programming 80's home computers). Below the paragraph, add a sample program as below:
    ```
    10 PRINT "Hello, World"
    20 INPUT "Continue (y/n)?", R$
    30 IF R$="y" THEN GOTO 10
    ```
    Find the proper markup for doing this. Include the necessary CSS rule(s) to get a pleasant outcome. Validate your work.

3. Open the file **comparison.html** containing the comparison table of three computers. Create a new CSS file and link it to the HTML file. Generate the contents of the CSS file to make the HTML table resemble the image **comparison.png** in the lab's **img** folder as accurately as possible. Validate.
![(Alternatively, you see the image embedded if you open this assignment sheet in a separate browser window).](img/comparison.png)

## 3 Fine-tuning the rules

In this part, we look at various ways to modify the CSS rules. The selections can be applied to elements in a specific context such as inside a specific element. Furthermore, pseudoelements allow selection of only the first row or character inside the content, for example.

Finally, we look at the options for placing CSS.

### Selecting the elements

So far, we have used elements, classes and identifiers to pick the applicable rules.

It is possible to define the targets of rules in a more specified way. Open file **targets.html** to demonstrate this. In the file, there's a complex list structure.

The file is linked to **targetstyles.css**, which contains only the font settings for the entire document.

Write the following rules to **targetstyles.css**:

```css
ol > li {
    color: green;    
}

ul li ul {
    font-weight: bold;
}

ul li ul li ul {
    color: blue;
}
```

As the HTML file contains several list elements, nested and unnested, we can't to make the correct elements as targets of the rules using a single element as a selector. However, CSS provides a straightforward way to achieve our goal.

- In the first rule, selector `ol > li` matches only those `li` elements that are direct children of the unordered list.
- In the second rule, those unordered lists are selected that appear in list items of a higher-level unordered list. Note that this rule applies to both the second and the third levels of the nested list in the example.
- The third rule applies only to the third level (and potential deeper levels) in nested unordered lists.




### Nested elements and pseudoelements

Pseudoelements allow formatting only certain parts of an element. Using pseudoelements, it is for instance possible to pick the first letter or line of a paragraph.

Add the following line into **simple.css** (that is linked to **csstest.html**):

```css
p::first-letter {
    font-size:8em;
}

p::first-line {
    font-weight: bold;
}
```

Reload the page in browser and see the changes.

In pseudoelement notation, a double colon (`::`) appears after the element name. This precedes one of the following: `after`, `before`, `first-letter`, `first-line`, or `selection`.

The first two (`after` and `before`) are normally used with `content` property to insert new representational content.

### Location of CSS

In all the examples above, the CSS rules have been located in a single CSS file. It is the best place for CSS rules from modularity's point of view. 

Technically, there are other options for placing CSS rules, even though they are considered bad practice.

The first alternative is to make CSS inline:
```html
<p style="color: green">Hello!</p>
```

The second alternative is to generate a page-specific internal stylesheet inside the `head` element of an HTML document:
```html
<head>
  <style>
    p {color: green};
  </style>
</head>
```

As these approaches obscure the separation of content and presentation, their use is discouraged. It may, however, be useful to recognize them, as they are sometimes used.


### Test your understanding

You need the aforementioned file `simple.css`.

1. CSS pseudoelements `::before` and `::after` allow inserting content right before or after an element for stylistic purposes. These are normally used in conjunction with `content` property that specifies the content to be included.
    a. Add a rule that adds the text `Note!` before each paragraph in **csstest.html**.
    b. Add a rule that prints the image of a tick mark after each paragraph in **csstest.html**. A public domain tick mark image (Author: Kosta Kostov, via http://www.publicdomainpictures.net/) can be found in the lab's `img` folder.






