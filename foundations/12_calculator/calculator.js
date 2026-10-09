const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sum = 0;
  return arr.reduce((current, next) => 
    current + next, sum,
  );
};

const multiply = function(arr) {
  return arr.reduce((curr, next) => curr * next)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
	for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
