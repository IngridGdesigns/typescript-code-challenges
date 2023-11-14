/*

Given an integer n, return a counter function. This counter function initially returns n 
and then returns 1 more than the previous value every subsequent time it is called 
(n, n + 1, n + 2, etc).
*/

const createCounter = function (n: number) {
  //initialize a counter object, to count how many times n has been called
  return function () {
    return n++; // returns the value and then increments it.
    // Postfix Increment Syntax
  };
};
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
