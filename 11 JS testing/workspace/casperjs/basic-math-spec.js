/* global casper */

/* Before running these acceptance tests make sure your web app is running then paste in its URL below.*/
const url = 'https://lab11-jianhuayang.c9users.io/casperjs/basic_math.html';

casper.test.begin('can multiply quantity and price', 5, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '50.00', 'check total is correct');
  });


  casper.run(function() {
    casper.capture('basic-math-1.png');
    test.done();
  });
});

casper.test.begin('can apply a sales tax', 5, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '60.00', 'check total is correct');
  });
  
  casper.run(function() {
    test.done();
  });

});

casper.test.begin('can apply a discount', 5, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20',
        'discount': '25'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '35.00', 'check total is correct');
  });


  casper.run(function() {
    test.done();
  });
});

casper.test.begin('double discount if qty greater than 100', 5, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
    this.fill('form#theForm', {
        'quantity': '101',
        'price': '5',
        'tax': '20',
        'discount': '25'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '556.00', 'check total is correct');
  });


  casper.run(function() {
    test.done();
  });
});

casper.test.begin('can add the shipping fee', 5, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Bulk Order Calculator', 'check page title text')
    test.assertVisible('fieldset', 'check form is visible');
    test.assertExists('fieldset > p', 'check form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'check form title text');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20',
        'discount': '25',
        'shipping': '20'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '55.00', 'check total is correct');
  });
  
  casper.run(function() {
    test.done();
  });

});