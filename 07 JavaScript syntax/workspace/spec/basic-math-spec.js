/* global casper */

/* Before running these acceptance tests make sure your web app is running then paste in its URL below.*/
const url = 'PASTE YOUR URL HERE';

casper.test.begin('can multiply quantity and price', 1, function suite(test) {
  
  casper.start(url, function() {
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '50.00');
  });


  casper.run(function() {
    casper.capture('basic-math-1.png');
    test.done();
  });
});

casper.test.begin('can apply a sales tax', 1, function suite(test) {
  
  casper.start(url, function() {
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '60.00');
  });


  casper.run(function() {
    casper.capture('basic-math-2.png');
    test.done();
  });
});

casper.test.begin('can apply a discount', 1, function suite(test) {
  
  casper.start(url, function() {
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20',
        'discount': '25'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '35.00');
  });


  casper.run(function() {
    casper.capture('basic-math-2.png');
    test.done();
  });
});

casper.test.begin('can add the shipping fee', 1, function suite(test) {
  
  casper.start(url, function() {
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
    casper.test.assertEquals(total, '55.00');
  });


  casper.run(function() {
    casper.capture('basic-math-2.png');
    test.done();
  });
});