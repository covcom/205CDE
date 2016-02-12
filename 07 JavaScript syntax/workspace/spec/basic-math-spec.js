/* global casper */

const url = 'https://covcom-marktyers.c9users.io/07%20JavaScript%20syntax/workspace/basic_math.html';

casper.test.begin('can multiply quantity and price', function suite(test) {
  
  casper.start(url, function() {
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5'
    }, true);
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

casper.test.begin('can apply a sales tax', function suite(test) {
  
  casper.start(url, function() {
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20'
    }, true);
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