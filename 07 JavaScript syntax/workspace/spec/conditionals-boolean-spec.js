/* global casper */

/* Before running these acceptance tests make sure your web app is running then paste in its URL below.*/
const url = 'ADD URL HERE';

casper.test.begin('email field empty', 5, function suite(test) {
    
	casper.start(url, function() {
		this.echo(this.getTitle())
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': '',
        'comments': ''
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter a valid email address!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('email address too short', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'a@b.c',
        'comments': ''
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter a valid email address!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('email missing @ character', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe.google.com',
        'comments': ''
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter a valid email address!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('comment field empty', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe@gmail.com',
        'comments': ''
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter your comments, without any HTML!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('comment with html tag', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe@gmail.com',
        'comments': '<p>hello world</p>'
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter your comments, without any HTML!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('valid email and comment', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe@gmail.com',
        'comments': 'hello world'
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Form submitted', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('name fullname field exists', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    test.assertExists('input[name="fullname"]', 'check name field exists')
  });
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('check for first and last name', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe@gmail.com',
        'comments': 'hello world',
        'fullname': 'johndoe'
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter a valid name!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});

casper.test.begin('name too short', 5, function suite(test) {
    
	casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Membership Form', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > legend', 'check form title is present');
    test.assertSelectorHasText('fieldset > legend', 'Contact', 'check form title text');
    this.fill('form#theForm', {
        'email': 'johndoe@gmail.com',
        'comments': 'hello world',
        'fullname': 'ed'
    });
  });
  
  casper.thenClick('input#submit', function() {
    
  });
  
  casper.waitForAlert(function(response) {
    test.assertEquals(response.data, 'Please enter a valid name!', 'check alert message text');
	});
	
	casper.run(function() {
    test.done();
  });
    
});