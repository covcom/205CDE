# Testing PHP with  PHPUnit

PHPUnit is quite similar to the JUnit library you have used for testing Java code. Download PHP Archive (PHAR) that contains everything you need in order to use PHPUnit. Simply download it, make it executable, and put it into your $PATH.

Open Tools > Terminal and give the following commands:
```
$ wget https://phar.phpunit.de/phpunit-old.phar 

$ chmod +x phpunit-old.phar

$ sudo mv phpunit-old.phar /usr/local/bin/phpunit

$ phpunit --version
```

PHPUnit 4.8.0 by Sebastian Bergmann and contributors.
You can also immediately use the PHAR after you have downloaded it, of course:
```
$ wget https://phar.phpunit.de/phpunit-old.phar

$ php phpunit-old.phar --version
PHPUnit 4.8.0 by Sebastian Bergmann and contributors
```

## Testing classes

The next code snippet is a simple class called Money, which has one attribute called amount. (src/Money.php)
```php

<?php
class Money
{
    private $amount;
    public function __construct($amount)
    {
        $this->amount = $amount;
    }
    public function getAmount()
    {
        return $this->amount;
    }
    public function negate()
    {
        return new Money(-1 * $this->amount);
    }

    // ...
}
```

The corresponding test class is called MoneyTest. (tests/MoneyTest.php)

```php

<?php
class MoneyTest extends PHPUnit_Framework_TestCase
{
    // ...
    public function testCanBeNegated()
    {
        // Arrange
        $a = new Money(1);

        // Act
        $b = $a->negate();

        // Assert
        $this->assertEquals(-1, $b->getAmount());
    }
    // ...
}

```

## Running tests

```
$ phpunit --bootstrap src/autoload.php tests/MoneyTest
PHPUnit 4.8.0 by Sebastian Bergmann and contributors.

....................

Time: 121 ms, Memory: 4.50Mb

OK (20 tests, 39 assertions)
```

Let’s have a look at what the three parts of above invocation mean:

•	phpunit invokes the PHPUnit command-line test runner. We assume that you have downloaded phpunit.phar (see above) and put it into your $PATH as phpunit.

•	--bootstrap src/autoload.php instructs the PHPUnit command-line test runner to include src/autoload.php before the test execution. Such a bootstrap script is commonly used to set up autoloading for the classes that are to be tested.

•	tests/MoneyTest instructs the PHPUnit command-line test runner to execute the tests of the MoneyTest class that is declared in tests/MoneyTest.php.

Using tests instead of tests/MoneyTest would instruct the PHPUnit command-line test runner to execute all tests found declared in *Test.php sourcecode files in the tests directory.

You can have in the src folder a simple script in the autoload.php file, which will be used to find class definitions. The contents of it can be e.g.

```php
<?php
    spl_autoload_register(
        function($class) {
            if (file_exists("src/$class.php")) { 
                include "src/$class.php";
            }
        }
    );
?>
```
If you don't have this kind of script, you can list the source files needed for testing instead.

## Testing procedural code

Let’s assume we have a PHP function which we want to test. It’s located in a PHP file named function.php.

```   php

<?php 
	function easter($year) {
	}
?>

```

We want to test that function

```
require_once 'includes/functions.php';
class EasterTest extends PHPUnit_Framework_TestCase {
  public function testEasterOk() {
    $easter2011 = easter(2011);
    $this->assertEquals($easter2011, gmmktime(0,0,0,4,24,2011));
  }
  
  public function testEasterFalse() {
    $easter2011 = easter(2011);
    $this->assertNotEquals($easter2011, gmmktime(0,0,0,12,24,2011));
  }
}
```

First there is a link to the script containing the easter-function (here: functions.php). 
Then we generate a new class (“EasterTest”), which extends PHPUnit. In this class there are two basic tests:

A positive test (24.4.2011, is this easter sunday?)

A negative test (24.12.2011, is this easter sunday?)

```
$ phpunit EasterTest.php
PHPUnit 4.8.0 by Sebastian Bergmann and contributors.

....................

Time: 121 ms, Memory: 4.50Mb

not OK (2 tests, 2 assertions)
```


Of course we get not OK, because we have not yet implemented the function.


Documentation on PHPUnit see https://phpunit.de/manual/current/en/index.html

### Using PHPUnit with Codeigniter

See e.g. https://github.com/kenjis/ci-phpunit-test
