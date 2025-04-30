//task 1 and 2 in explanation.txt file
//task 3
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
console.log(sumAll(1, 2, 3));       
console.log(sumAll(10, 20, 30, 40)); 
console.log(sumAll());  


//task4

function processArguments(primaryFunc, ...args) {
    return primaryFunc(...args);
  }
  function multiply(x, y) {
    return x * y;
  }
  console.log(processArguments(multiply, 5, 4)); 
  function greet(name, place) {
    return `Welcome, ${name}, to ${place}!`;
  }
  console.log(processArguments(greet, "Alice", "Wonderland")); 
  
  
  