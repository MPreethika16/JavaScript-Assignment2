function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeting("Hello");
console.log(greetHello("World"));
const greetHi = createGreeting("Hi");
console.log(greetHi("Alice"));
const greetNamaste = createGreeting("Namaste");
console.log(greetNamaste("Rahul"));

//task 3

function createSecretHolder(secret) {
  let privateSecret = secret;
  return {
    getSecret: function () {
      return privateSecret;
    },
    setSecret: function (newSecret) {
      privateSecret = newSecret;
    },
  };
}

const secretHolder = createSecretHolder("initialSecret");
console.log(secretHolder.getSecret());
secretHolder.setSecret("newSecret");
console.log(secretHolder.getSecret());
console.log(secretHolder.privateSecret);

//task 4

function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHello = createGreeting("Hello");
console.log(sayHello("World"));
const sayHi = createGreeting("Hi");
console.log(sayHi("Alice"));
