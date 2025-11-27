/**
 * 30 Days of JavaScript Challenge - Test Runner
 *
 * This test runner validates student solutions for all 10 problems.
 * Run with: node test-runner.js
 */

// Import all exercise modules
const createHelloWorld = require("./exercises/01-hello-world.js");
const createCounter = require("./exercises/02-counter.js");
const expect = require("./exercises/03-to-be-or-not-to-be.js");
const createCounterII = require("./exercises/04-counter-ii.js");
const map = require("./exercises/05-apply-transform-over-each-element.js");
const filter = require("./exercises/06-filter-elements-from-array.js");
const reduce = require("./exercises/07-array-reduce-transformation.js");
const compose = require("./exercises/08-function-composition.js");
const argumentsLength = require("./exercises/09-return-length-of-arguments.js");
const once = require("./exercises/10-allow-one-function-call.js");

// Colors for console output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

// Test statistics
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

/**
 * Simple test assertion helper
 * @param {*} actual - The actual result
 * @param {*} expected - The expected result
 * @param {string} testName - Name of the test
 */
function expectEqual(actual, expected, testName) {
  totalTests++;
  try {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      passedTests++;
      console.log(`${colors.green}✅ PASS: ${testName}${colors.reset}`);
    } else {
      failedTests++;
      console.log(
        `${colors.red}❌ FAIL: ${testName} - Expected ${JSON.stringify(
          expected
        )} but got ${JSON.stringify(actual)}${colors.reset}`
      );
    }
  } catch (error) {
    failedTests++;
    console.log(
      `${colors.red}❌ FAIL: ${testName} - Error: ${error.message}${colors.reset}`
    );
  }
}

/**
 * Test helper for functions that should throw errors
 * @param {Function} fn - Function to test
 * @param {string} expectedError - Expected error message
 * @param {string} testName - Name of the test
 */
function expectThrows(fn, expectedError, testName) {
  totalTests++;
  try {
    fn();
    failedTests++;
    console.log(
      `${colors.red}❌ FAIL: ${testName} - Expected error "${expectedError}" but function did not throw${colors.reset}`
    );
  } catch (error) {
    if (error.message === expectedError) {
      passedTests++;
      console.log(`${colors.green}✅ PASS: ${testName}${colors.reset}`);
    } else {
      failedTests++;
      console.log(
        `${colors.red}❌ FAIL: ${testName} - Expected error "${expectedError}" but got "${error.message}"${colors.reset}`
      );
    }
  }
}

/**
 * Safe test execution wrapper
 * @param {Function} testFn - Test function to execute
 * @param {string} testName - Name of the test
 */
function safeTest(testFn, testName) {
  try {
    testFn();
  } catch (error) {
    totalTests++;
    failedTests++;
    console.log(
      `${colors.red}❌ FAIL: ${testName} - Unexpected error: ${error.message}${colors.reset}`
    );
  }
}

// Test Problem 1: Create Hello World Function
function testHelloWorld() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 1: Create Hello World Function${colors.reset}`
  );

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f(), "Hello World", "Basic call with no arguments");
  }, "Hello World Test 1");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f(1, 2, 3), "Hello World", "Call with multiple arguments");
  }, "Hello World Test 2");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f({}), "Hello World", "Call with object argument");
  }, "Hello World Test 3");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f(null), "Hello World", "Call with null argument");
  }, "Hello World Test 4");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f(undefined), "Hello World", "Call with undefined argument");
  }, "Hello World Test 5");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f([1, 2, 3]), "Hello World", "Call with array argument");
  }, "Hello World Test 6");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f("test"), "Hello World", "Call with string argument");
  }, "Hello World Test 7");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(f(true, false), "Hello World", "Call with boolean arguments");
  }, "Hello World Test 8");

  safeTest(() => {
    const f = createHelloWorld();
    expectEqual(
      f(-1, 0, 1),
      "Hello World",
      "Call with negative and positive numbers"
    );
  }, "Hello World Test 9");

  safeTest(() => {
    const f1 = createHelloWorld();
    const f2 = createHelloWorld();
    expectEqual(f1() === f2(), true, "Multiple instances return same value");
  }, "Hello World Test 10");
}

// Test Problem 2: Counter
function testCounter() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 2: Counter${colors.reset}`
  );

  safeTest(() => {
    const counter = createCounter(10);
    expectEqual(counter(), 10, "Initial call returns starting value");
  }, "Counter Test 1");

  safeTest(() => {
    const counter = createCounter(10);
    const results = [counter(), counter(), counter()];
    expectEqual(results, [10, 11, 12], "Sequential calls increment correctly");
  }, "Counter Test 2");

  safeTest(() => {
    const counter = createCounter(-2);
    const results = [counter(), counter(), counter(), counter(), counter()];
    expectEqual(results, [-2, -1, 0, 1, 2], "Negative starting value");
  }, "Counter Test 3");

  safeTest(() => {
    const counter = createCounter(0);
    expectEqual(counter(), 0, "Zero starting value");
  }, "Counter Test 4");

  safeTest(() => {
    const counter = createCounter(1000);
    expectEqual(counter(), 1000, "Large positive starting value");
  }, "Counter Test 5");

  safeTest(() => {
    const counter = createCounter(-1000);
    expectEqual(counter(), -1000, "Large negative starting value");
  }, "Counter Test 6");

  safeTest(() => {
    const counter1 = createCounter(5);
    const counter2 = createCounter(5);
    expectEqual(
      [counter1(), counter2()],
      [5, 5],
      "Multiple independent counters"
    );
  }, "Counter Test 7");

  safeTest(() => {
    const counter = createCounter(100);
    counter(); // 100
    counter(); // 101
    expectEqual(counter(), 102, "Counter maintains state between calls");
  }, "Counter Test 8");

  safeTest(() => {
    const counter = createCounter(1);
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(counter());
    }
    expectEqual(
      results,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "Multiple sequential calls"
    );
  }, "Counter Test 9");

  safeTest(() => {
    const counter = createCounter(999);
    expectEqual(counter(), 999, "Edge case near maximum");
  }, "Counter Test 10");
}

// Test Problem 3: To Be Or Not To Be
function testExpect() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 3: To Be Or Not To Be${colors.reset}`
  );

  safeTest(() => {
    expectEqual(expect(5).toBe(5), true, "toBe with equal values");
  }, "Expect Test 1");

  safeTest(() => {
    expectThrows(
      () => expect(5).toBe(null),
      "Not Equal",
      "toBe with unequal values throws error"
    );
  }, "Expect Test 2");

  safeTest(() => {
    expectEqual(expect(5).notToBe(null), true, "notToBe with unequal values");
  }, "Expect Test 3");

  safeTest(() => {
    expectThrows(
      () => expect(5).notToBe(5),
      "Equal",
      "notToBe with equal values throws error"
    );
  }, "Expect Test 4");

  safeTest(() => {
    expectEqual(expect("hello").toBe("hello"), true, "toBe with equal strings");
  }, "Expect Test 5");

  safeTest(() => {
    expectEqual(
      expect(null).notToBe(undefined),
      true,
      "notToBe with null and undefined"
    );
  }, "Expect Test 6");

  safeTest(() => {
    expectEqual(expect(0).toBe(0), true, "toBe with zero");
  }, "Expect Test 7");

  safeTest(() => {
    expectThrows(
      () => expect(0).toBe(false),
      "Not Equal",
      "toBe with falsy but different values"
    );
  }, "Expect Test 8");

  safeTest(() => {
    expectEqual(
      expect([]).notToBe([]),
      true,
      "notToBe with different array references"
    );
  }, "Expect Test 9");

  safeTest(() => {
    const obj = {};
    expectEqual(expect(obj).toBe(obj), true, "toBe with same object reference");
  }, "Expect Test 10");
}

// Test Problem 4: Counter II
function testCounterII() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 4: Counter II${colors.reset}`
  );

  safeTest(() => {
    const counter = createCounterII(5);
    expectEqual(counter.increment(), 6, "Initial increment from 5");
  }, "Counter II Test 1");

  safeTest(() => {
    const counter = createCounterII(5);
    counter.increment(); // 6
    expectEqual(counter.reset(), 5, "Reset after increment");
  }, "Counter II Test 2");

  safeTest(() => {
    const counter = createCounterII(5);
    counter.increment(); // 6
    counter.reset(); // 5
    expectEqual(counter.decrement(), 4, "Decrement after reset");
  }, "Counter II Test 3");

  safeTest(() => {
    const counter = createCounterII(0);
    const results = [
      counter.increment(),
      counter.increment(),
      counter.decrement(),
      counter.reset(),
      counter.reset(),
    ];
    expectEqual(results, [1, 2, 1, 0, 0], "Complex sequence with zero init");
  }, "Counter II Test 4");

  safeTest(() => {
    const counter = createCounterII(-10);
    expectEqual(counter.increment(), -9, "Increment from negative value");
  }, "Counter II Test 5");

  safeTest(() => {
    const counter = createCounterII(-10);
    expectEqual(counter.decrement(), -11, "Decrement from negative value");
  }, "Counter II Test 6");

  safeTest(() => {
    const counter = createCounterII(100);
    expectEqual(counter.reset(), 100, "Reset without any operations");
  }, "Counter II Test 7");

  safeTest(() => {
    const counter = createCounterII(1);
    counter.decrement(); // 0
    counter.decrement(); // -1
    expectEqual(counter.increment(), 0, "Increment from negative back to zero");
  }, "Counter II Test 8");

  safeTest(() => {
    const counter1 = createCounterII(10);
    const counter2 = createCounterII(20);
    expectEqual(
      [counter1.increment(), counter2.increment()],
      [11, 21],
      "Multiple independent counter objects"
    );
  }, "Counter II Test 9");

  safeTest(() => {
    const counter = createCounterII(999);
    counter.increment(); // 1000
    counter.decrement(); // 999
    expectEqual(counter.reset(), 999, "Large value operations");
  }, "Counter II Test 10");
}

// Test Problem 5: Apply Transform Over Each Element
function testMap() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 5: Apply Transform Over Each Element (Map)${colors.reset}`
  );

  safeTest(() => {
    const arr = [1, 2, 3];
    const fn = function plusone(n) {
      return n + 1;
    };
    expectEqual(map(arr, fn), [2, 3, 4], "Basic plus one transformation");
  }, "Map Test 1");

  safeTest(() => {
    const arr = [1, 2, 3];
    const fn = function plusI(n, i) {
      return n + i;
    };
    expectEqual(map(arr, fn), [1, 3, 5], "Transform with index");
  }, "Map Test 2");

  safeTest(() => {
    const arr = [];
    const fn = function plusone(n) {
      return n + 1;
    };
    expectEqual(map(arr, fn), [], "Empty array");
  }, "Map Test 3");

  safeTest(() => {
    const arr = [0, -1, -2];
    const fn = function square(n) {
      return n * n;
    };
    expectEqual(map(arr, fn), [0, 1, 4], "Transform negative numbers");
  }, "Map Test 4");

  safeTest(() => {
    const arr = [1, 2, 3, 4, 5];
    const fn = function doubleIndex(n, i) {
      return i * 2;
    };
    expectEqual(map(arr, fn), [0, 2, 4, 6, 8], "Transform using only index");
  }, "Map Test 5");

  safeTest(() => {
    const arr = [10];
    const fn = function identity(n) {
      return n;
    };
    expectEqual(map(arr, fn), [10], "Single element array");
  }, "Map Test 6");

  safeTest(() => {
    const arr = [1, 2, 3];
    const fn = function constant() {
      return 42;
    };
    expectEqual(map(arr, fn), [42, 42, 42], "Constant transformation");
  }, "Map Test 7");

  safeTest(() => {
    const arr = [1000000, -1000000, 0];
    const fn = function divide(n) {
      return n / 2;
    };
    expectEqual(
      map(arr, fn),
      [500000, -500000, 0],
      "Large numbers transformation"
    );
  }, "Map Test 8");

  safeTest(() => {
    const arr = new Array(100).fill(1);
    const fn = function plusone(n) {
      return n + 1;
    };
    expectEqual(map(arr, fn), new Array(100).fill(2), "Large array");
  }, "Map Test 9");

  safeTest(() => {
    const arr = [1, 2, 3];
    const fn = function conditional(n, i) {
      return i % 2 === 0 ? n * 2 : n;
    };
    expectEqual(map(arr, fn), [2, 2, 6], "Conditional transformation");
  }, "Map Test 10");
}

// Test Problem 6: Filter Elements from Array
function testFilter() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 6: Filter Elements from Array${colors.reset}`
  );

  safeTest(() => {
    const arr = [0, 10, 20, 30];
    const fn = function greaterThan10(n) {
      return n > 10;
    };
    expectEqual(filter(arr, fn), [20, 30], "Filter numbers greater than 10");
  }, "Filter Test 1");

  safeTest(() => {
    const arr = [1, 2, 3];
    const fn = function firstIndex(n, i) {
      return i === 0;
    };
    expectEqual(filter(arr, fn), [1], "Filter by index");
  }, "Filter Test 2");

  safeTest(() => {
    const arr = [];
    const fn = function alwaysTrue() {
      return true;
    };
    expectEqual(filter(arr, fn), [], "Empty array");
  }, "Filter Test 3");

  safeTest(() => {
    const arr = [1, 2, 3, 4, 5];
    const fn = function alwaysFalse() {
      return false;
    };
    expectEqual(filter(arr, fn), [], "Filter that removes all elements");
  }, "Filter Test 4");

  safeTest(() => {
    const arr = [1, 2, 3, 4, 5];
    const fn = function alwaysTrue() {
      return true;
    };
    expectEqual(
      filter(arr, fn),
      [1, 2, 3, 4, 5],
      "Filter that keeps all elements"
    );
  }, "Filter Test 5");

  safeTest(() => {
    const arr = [-3, -2, -1, 0, 1, 2, 3];
    const fn = function positive(n) {
      return n > 0;
    };
    expectEqual(filter(arr, fn), [1, 2, 3], "Filter positive numbers");
  }, "Filter Test 6");

  safeTest(() => {
    const arr = [0, 1, 2, 3, 4, 5];
    const fn = function evenIndex(n, i) {
      return i % 2 === 0;
    };
    expectEqual(filter(arr, fn), [0, 2, 4], "Filter by even index");
  }, "Filter Test 7");

  safeTest(() => {
    const arr = [false, 0, "", null, undefined, "hello", 1, true];
    const fn = function truthy(n) {
      return Boolean(n);
    };
    expectEqual(filter(arr, fn), ["hello", 1, true], "Filter truthy values");
  }, "Filter Test 8");

  safeTest(() => {
    const arr = new Array(100).fill(0).map((_, i) => i);
    const fn = function lessThan50(n) {
      return n < 50;
    };
    expectEqual(filter(arr, fn).length, 50, "Large array filter");
  }, "Filter Test 9");

  safeTest(() => {
    const arr = [10];
    const fn = function greaterThan5(n) {
      return n > 5;
    };
    expectEqual(filter(arr, fn), [10], "Single element that passes");
  }, "Filter Test 10");
}

// Test Problem 7: Array Reduce Transformation
function testReduce() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 7: Array Reduce Transformation${colors.reset}`
  );

  safeTest(() => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 0), 10, "Sum with zero initial value");
  }, "Reduce Test 1");

  safeTest(() => {
    const nums = [1, 2, 3, 4];
    const fn = function sumSquares(accum, curr) {
      return accum + curr * curr;
    };
    expectEqual(
      reduce(nums, fn, 100),
      130,
      "Sum of squares with non-zero init"
    );
  }, "Reduce Test 2");

  safeTest(() => {
    const nums = [];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 25), 25, "Empty array returns init");
  }, "Reduce Test 3");

  safeTest(() => {
    const nums = [1, 2, 3, 4];
    const fn = function product(accum, curr) {
      return accum * curr;
    };
    expectEqual(reduce(nums, fn, 1), 24, "Product transformation");
  }, "Reduce Test 4");

  safeTest(() => {
    const nums = [5];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 10), 15, "Single element array");
  }, "Reduce Test 5");

  safeTest(() => {
    const nums = [-1, -2, -3];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 0), -6, "Negative numbers");
  }, "Reduce Test 6");

  safeTest(() => {
    const nums = [1, 2, 3];
    const fn = function max(accum, curr) {
      return Math.max(accum, curr);
    };
    expectEqual(reduce(nums, fn, -Infinity), 3, "Finding maximum");
  }, "Reduce Test 7");

  safeTest(() => {
    const nums = [2, 4, 6];
    const fn = function subtract(accum, curr) {
      return accum - curr;
    };
    expectEqual(reduce(nums, fn, 20), 8, "Subtraction transformation");
  }, "Reduce Test 8");

  safeTest(() => {
    const nums = [0, 0, 0];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 5), 5, "Array of zeros");
  }, "Reduce Test 9");

  safeTest(() => {
    const nums = new Array(100).fill(1);
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    expectEqual(reduce(nums, fn, 0), 100, "Large array");
  }, "Reduce Test 10");
}

// Test Problem 8: Function Composition
function testCompose() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 8: Function Composition${colors.reset}`
  );

  safeTest(() => {
    const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const fn = compose(functions);
    expectEqual(fn(4), 65, "Three function composition");
  }, "Compose Test 1");

  safeTest(() => {
    const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const fn = compose(functions);
    expectEqual(fn(1), 1000, "Repeated multiplication");
  }, "Compose Test 2");

  safeTest(() => {
    const functions = [];
    const fn = compose(functions);
    expectEqual(fn(42), 42, "Empty function array returns identity");
  }, "Compose Test 3");

  safeTest(() => {
    const functions = [(x) => x + 5];
    const fn = compose(functions);
    expectEqual(fn(10), 15, "Single function composition");
  }, "Compose Test 4");

  safeTest(() => {
    const functions = [(x) => x * 2, (x) => x + 3];
    const fn = compose(functions);
    expectEqual(fn(5), 16, "Two function composition");
  }, "Compose Test 5");

  safeTest(() => {
    const functions = [(x) => x, (x) => x, (x) => x];
    const fn = compose(functions);
    expectEqual(fn(100), 100, "Identity function composition");
  }, "Compose Test 6");

  safeTest(() => {
    const functions = [(x) => x - 1, (x) => x / 2];
    const fn = compose(functions);
    expectEqual(fn(10), 4, "Subtraction and division");
  }, "Compose Test 7");

  safeTest(() => {
    const functions = [(x) => Math.abs(x), (x) => -x];
    const fn = compose(functions);
    expectEqual(fn(-5), 5, "Absolute value composition");
  }, "Compose Test 8");

  safeTest(() => {
    const functions = [(x) => x * x, (x) => x * x];
    const fn = compose(functions);
    expectEqual(fn(2), 16, "Double squaring");
  }, "Compose Test 9");

  safeTest(() => {
    const functions = [(x) => x + 1, (x) => x * 2, (x) => x - 3];
    const fn = compose(functions);
    expectEqual(fn(0), -5, "Zero input with multiple operations");
  }, "Compose Test 10");
}

// Test Problem 9: Return Length of Arguments Passed
function testArgumentsLength() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 9: Return Length of Arguments Passed${colors.reset}`
  );

  safeTest(() => {
    expectEqual(argumentsLength(5), 1, "Single number argument");
  }, "Arguments Length Test 1");

  safeTest(() => {
    expectEqual(argumentsLength({}, null, "3"), 3, "Mixed type arguments");
  }, "Arguments Length Test 2");

  safeTest(() => {
    expectEqual(argumentsLength(), 0, "No arguments");
  }, "Arguments Length Test 3");

  safeTest(() => {
    expectEqual(
      argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
      10,
      "Ten arguments"
    );
  }, "Arguments Length Test 4");

  safeTest(() => {
    expectEqual(argumentsLength("hello"), 1, "Single string argument");
  }, "Arguments Length Test 5");

  safeTest(() => {
    expectEqual(argumentsLength(null), 1, "Single null argument");
  }, "Arguments Length Test 6");

  safeTest(() => {
    expectEqual(argumentsLength(undefined), 1, "Single undefined argument");
  }, "Arguments Length Test 7");

  safeTest(() => {
    expectEqual(
      argumentsLength([1, 2, 3], { a: 1 }, "test", 42, true),
      5,
      "Array, object, string, number, boolean"
    );
  }, "Arguments Length Test 8");

  safeTest(() => {
    const args = new Array(100).fill(0);
    expectEqual(argumentsLength(...args), 100, "Many arguments");
  }, "Arguments Length Test 9");

  safeTest(() => {
    expectEqual(
      argumentsLength(false, 0, "", null, undefined),
      5,
      "Falsy values"
    );
  }, "Arguments Length Test 10");
}

// Test Problem 10: Allow One Function Call
function testOnce() {
  console.log(
    `\n${colors.blue}${colors.bold}Testing Problem 10: Allow One Function Call${colors.reset}`
  );

  safeTest(() => {
    const fn = (a, b, c) => a + b + c;
    const onceFn = once(fn);
    expectEqual(onceFn(1, 2, 3), 6, "First call returns correct value");
  }, "Once Test 1");

  safeTest(() => {
    const fn = (a, b, c) => a + b + c;
    const onceFn = once(fn);
    onceFn(1, 2, 3); // First call
    expectEqual(onceFn(2, 3, 6), undefined, "Second call returns undefined");
  }, "Once Test 2");

  safeTest(() => {
    const fn = (a, b, c) => a * b * c;
    const onceFn = once(fn);
    expectEqual(onceFn(5, 7, 4), 140, "Multiplication on first call");
  }, "Once Test 3");

  safeTest(() => {
    const fn = (a, b, c) => a * b * c;
    const onceFn = once(fn);
    onceFn(5, 7, 4); // 140
    onceFn(2, 3, 6); // undefined
    expectEqual(onceFn(4, 6, 8), undefined, "Third call returns undefined");
  }, "Once Test 4");

  safeTest(() => {
    const fn = () => "hello";
    const onceFn = once(fn);
    expectEqual(onceFn(), "hello", "No parameters function");
  }, "Once Test 5");

  safeTest(() => {
    const fn = () => "hello";
    const onceFn = once(fn);
    onceFn(); // "hello"
    expectEqual(onceFn(), undefined, "Second call with no parameters");
  }, "Once Test 6");

  safeTest(() => {
    const fn = (x) => x * x;
    const onceFn = once(fn);
    expectEqual(onceFn(5), 25, "Single parameter function");
  }, "Once Test 7");

  safeTest(() => {
    const fn1 = (x) => x + 1;
    const fn2 = (x) => x + 1;
    const onceFn1 = once(fn1);
    const onceFn2 = once(fn2);
    expectEqual(
      [onceFn1(5), onceFn2(5)],
      [6, 6],
      "Multiple independent once functions"
    );
  }, "Once Test 8");

  safeTest(() => {
    const fn = () => {
      throw new Error("Should not be called twice");
    };
    const onceFn = once(fn);
    try {
      onceFn();
    } catch (e) {
      // Expected on first call
    }
    expectEqual(onceFn(), undefined, "Function that throws on first call");
  }, "Once Test 9");

  safeTest(() => {
    const fn = (a, b) => (a || b ? "truthy" : "falsy");
    const onceFn = once(fn);
    expectEqual(onceFn(false, null), "falsy", "Complex logic function");
  }, "Once Test 10");
}

// Print header
function printHeader() {
  console.log(
    `${colors.blue}${colors.bold}==========================================`
  );
  console.log(`   30 Days of JavaScript Challenge`);
  console.log(`   Test Runner - Student Edition`);
  console.log(`==========================================${colors.reset}\n`);
}

// Print summary
function printSummary() {
  console.log(
    `\n${colors.blue}${colors.bold}==========================================`
  );
  console.log(`   Test Summary`);
  console.log(`==========================================${colors.reset}`);
  console.log(`Total Tests: ${totalTests}`);
  console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);

  const percentage =
    totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(1) : 0;
  if (failedTests === 0) {
    console.log(
      `\n${colors.green}${colors.bold}🎉 All tests passed! Excellent work! (${percentage}%)${colors.reset}`
    );
  } else {
    console.log(
      `\n${colors.yellow}${colors.bold}📝 Keep working! You're at ${percentage}% completion.${colors.reset}`
    );
    console.log(
      `${colors.yellow}💡 Review the failed tests and try again!${colors.reset}`
    );
  }
}

// Main test runner
function runAllTests() {
  printHeader();

  testHelloWorld();
  testCounter();
  testExpect();
  testCounterII();
  testMap();
  testFilter();
  testReduce();
  testCompose();
  testArgumentsLength();
  testOnce();

  printSummary();
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests();
}

module.exports = {
  runAllTests,
  expectEqual,
  expectThrows,
  safeTest,
};
