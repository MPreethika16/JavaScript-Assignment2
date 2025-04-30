const user = {
    name: "Alice",
    greetDelayed: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  user.greetDelayed(); 

  /*
The problem lies in how this works inside the setTimeout callback.
The regular function inside setTimeout has its own this context,which defaults to the global object or undefined in strict mode.
Therefore, this.name doesn't refer to the user object but to window.name or throws an error in strict mode.
*/

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
  
/*self holds the reference to the user object, and we access self.name inside the callback instead of this.name. 
This technique ensures that the callback still refers to the correct user object. */

//Task3



const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function () {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };
  
  userCorrectedArrow.greetDelayed(); // Outputs: Hello, Bob!
  
  
  /* Arrow functions differ from regular functions because they do not have their own this.
Instead,they lexically bind thismeaning they inherit this from their surrounding scope.
Here,this inside the arrow function refers to the same this as the enclosing greetDelayed method—i.e., 
the userCorrectedArrow object. 
This makes arrow functions ideal for callbacks where you want to retain the outer this. */

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