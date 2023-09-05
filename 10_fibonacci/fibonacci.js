const fibonacci = function(n) {
  if (n < 0) return 'OOPS';
  if (n <= 1) return parseInt(n);
  return fibonacci(n - 2) + fibonacci(n - 1);
};

// 1, 1, 2, 3

// Do not edit below this line
module.exports = fibonacci;
