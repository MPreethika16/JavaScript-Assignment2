const user = {
    name: "Alice",
    greetDelayed: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  user.greetDelayed(); 


//Task 2

const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
      const self = this; 
      setTimeout(function() {
        console.log(`Hello, ${self.name}!`);
      }, 1000);
    }
  };
  userCorrectedTraditional.greetDelayed(); 
  


//Task3


const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function () {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };
  
  userCorrectedArrow.greetDelayed(); 
  
  

//task 4

/* Failing Version */

const example = {
    value: 42,
    showValueDelayed: function () {
      setTimeout(function () {
        console.log(`Value: ${this.value}`);
      }, 1000);
    },
  };
  
  example.showValueDelayed(); 
  //In this version, this.value fails because the function inside setTimeout loses the context of example.
  
  /* Fixed Version */
  
  const exampleFixed = {
    value: 42,
    showValueDelayed: function () {
      setTimeout(() => {
        console.log(`Value: ${this.value}`);
      }, 1000);
    },
  };
  
  exampleFixed.showValueDelayed();
  //With an arrow function, this remains bound to the exampleFixed object, so this.value correctly refers to 42.