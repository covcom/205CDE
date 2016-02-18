/* global casper, __utils__ */

/* Before running these acceptance tests make sure your web app is running then paste in its URL below.*/
const url = 'ADD URL HERE';

casper.test.begin('can add new item to list', 7, function suite(test) {
  
  casper.start(url, function() {
    test.assertEquals(this.getTitle(), 'Notes', 'check page title text')
    test.assertVisible('p >input#item', 'check textbox is visible');
    test.assertVisible('p >button#add', 'check button is visible');
    casper.sendKeys('p >input#item', 'bread');
  });

  casper.thenClick('button#add', function() {
    casper.capture('addeditem.png');
    test.assertElementCount('tr', 1, 'check row has been added');
    var itemNames = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(1)'), function (e) { return e.innerHTML; });
    });
    var itemQty = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(2)'), function (e) { return e.innerHTML; });
    });
    test.assertEquals(itemNames.length, 1, 'check number of items in list')
    test.assertEquals(itemNames[0], 'bread', 'check first item in list')
    test.assertEquals(itemQty[0], '1', 'check first item quantity')
  });

  casper.run(function() {
    test.done();
  });
  
});

casper.test.begin('can add two different items', 6, function suite(test) {
  
  casper.start(url, function() {
    casper.sendKeys('p >input#item', 'bread');
  });

  casper.thenClick('button#add', function() {
  	casper.sendKeys('p >input#item', 'butter');
  });
  
  casper.thenClick('button#add', function() {
  	test.assertElementCount('tr', 2, 'check rows have been added');
    var itemNames = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(1)'), function (e) { return e.innerHTML; });
    });
    var itemQty = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(2)'), function (e) { return e.innerHTML; });
    });
    test.assertEquals(itemNames.length, 2, 'check number of items in list')
    test.assertEquals(itemNames[0], 'bread', 'check first item in list')
    test.assertEquals(itemQty[0], '1', 'check first item quantity')
    test.assertEquals(itemNames[0], 'bread', 'check first item in list')
    test.assertEquals(itemQty[0], '1', 'check first item quantity')
  });

  casper.run(function() {
    test.done();
  });
  
});

casper.test.begin('can delete an item', 5, function suite(test) {
  
  casper.start(url, function() {
    casper.sendKeys('p >input#item', 'bread');
  });

  casper.thenClick('button#add', function() {
  	casper.sendKeys('p >input#item', 'butter');
  });
  
  casper.thenClick('button#add', function() {
  	casper.capture('step1.png');
  	test.assertElementCount('tr', 2, 'check rows have been added');
  	casper.click('tr:nth-child(1) > td > a');
  	casper.capture('step2.png');
    var itemNames = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(1)'), function (e) { return e.innerHTML; });
    });
    var itemQty = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(2)'), function (e) { return e.innerHTML; });
    });
    test.assertElementCount('tr', 1, 'check rows remaining');
    test.assertEquals(itemNames.length, 1, 'check number of items in list')
    test.assertEquals(itemNames[0], 'butter', 'check name of item in list')
    test.assertEquals(itemQty[0], '1', 'check qty of item in list')
  });

  casper.run(function() {
    test.done();
  });
  
});

casper.test.begin('two identical items increments count', 4, function suite(test) {
  
  casper.start(url, function() {
    casper.sendKeys('p >input#item', 'bread');
  });

  casper.thenClick('button#add', function() {
  	casper.sendKeys('p >input#item', 'bread');
  });
  
  casper.thenClick('button#add', function() {
  	test.assertElementCount('tr', 1, 'check one row has been added');
    var itemNames = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(1)'), function (e) { return e.innerHTML; });
    });
    var itemQty = casper.evaluate(function () {
    	return [].map.call(__utils__.findAll('table tr td:nth-child(2)'), function (e) { return e.innerHTML; });
    });
    test.assertEquals(itemNames.length, 1, 'check number of items in list')
    test.assertEquals(itemNames[0], 'bread', 'check first item in list')
    test.assertEquals(itemQty[0], '2', 'check first item quantity')
  });

  casper.run(function() {
  	casper.capture('qty2.png');
    test.done();
  });
  
});