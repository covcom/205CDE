
# Acceptance Testing

Every time you make changes to your code you have to save the changes, reload the page, enter the details in the form and press the button. There has to be an easier way!

Welcome to the world of _automated testing_. Here, we write a script to test our web app is working correctly. This directory contains a test script for each and every exercise in this lab so jump in and try them out.

The scripts are run on the web server and are written in a flavour of JavaScript called ECMA6, you should take a few moments to learn more about this. They use a framework called **NodeJS** which you will learn more about next year in 305CDE. For now you will be shown the steps needed to run the tests.

The first step is to update NodeJS to the latest version (5.6.0 at time of writing). Updating is done using the Node Version Manager (NVM) which will need to be installed.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
nvm install 5.6.0
nvm alias default 5.6.0
node -v
```

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

The acceptance tests are run from the terminal. There are several optional flags you should try. Find out what the `--concise` and `--fail-fast` flags do.
```
casperjs test basic-math-spec.js --concise --fail-fast
```

## Test Your Knowledge

1. The _test suite_ covers all the functional requirements including:
  - Applying a discount
  - Doubling the dicsount for orders of over 100 units
  - Shipping charges
2. Implement the requirements based on the instructions in the worksheet.
3. Run the acceptance tests regularly to monitor your progress.
4. When all the tests pass your have completed the web app, congratulations!