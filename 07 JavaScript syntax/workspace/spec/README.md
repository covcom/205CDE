
# Acceptance Testing

Every time you make changes to your code you have to save the changes, reload the page, enter the details in the form and press the button. There has to be an easier way!

Welcome to the world of _automated testing_. Here, we write a script to test our web app is working correctly. This directory contains a test script for each and every exercise in this lab so jump in and try them out.

The scripts are run on the web server and are written in a flavour of JavaScript called ECMA6, you should take a few moments to learn more about this. They use a framework called **NodeJS** which you will learn more about next year in 305CDE. For now you will be shown the steps needed to run the tests.

NodeJS allows the use of third-party _modules_ and we will be using two of these which we will install globally:

1. **phantomjs** is a _headless web browser_ based on _Webkit_ which powers the _Safari web browser).
2. **casperjs** is a _testing utility_ which allows us to run automated tests using the _phantomjs_ web browser.

We start by navigating to the `spec` directory and installing the two NodeJS modules. 
```
npm install -g phantomjs
npm install -g casperjs
```

Load the web page `basic_math.html` file and use the run button to start the _Apache_ web server. Copy the page URL and assign it to the `url` constant at the top of the script page.

## Running the Tests

The acceptance tests are run from the terminal.
```
casperjs test basic-math-spec.js
```

## Test Your Knowledge

1. Write additional tests to the test suite to cover:
  - Applying a discount
  - Doubling the dicsount for orders of over 100 units
  - Shipping charges
2. Write tests for the other lab challenges.