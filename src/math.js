// IIFE

/*

var math = math || {};

(function () {
  function sum(a, b) {
    return a + b;
  }

  math.sum = sum;
})();

/*

/*

var math = {
  sum: (a, b) => {
    return a + b;
  },
}; 

*/

// es6 module

export function sum(a, b) {
  return a + b;
}
