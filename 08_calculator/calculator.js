const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	let sum = arr.reduce((acc,curr) => {
      return acc + curr; 
  },0);
  return sum; 
};

const multiply = function(arr) {
	let total = arr.reduce((acc,curr) => {
    return acc * curr; 
},1);
return total; 
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  if(num <0){
    'Error'
  }
  else if(num === 0){
    return 1;
  }
  else {
    return num * factorial(num-1);
  }
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
