var Clarizen = function (userName, password, applicationId, optionalSessionId) {

    if (userName === undefined) {
        throw new Error('userName is missing');
    }
    if (password === undefined) {
        throw new Error('password is missing');
    }
    this.userName = userName;
    this.password = password;
    this.applicationId = applicationId;
    this.sessionId = (optionalSessionId === undefined) ? '' : optionalSessionId;
};

Clarizen.prototype.Login = function() {
    console.log("un : " + this.userName);
};


var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// call the Person sayHello method.
person1.sayHello(); // logs "Hello, I'm Alice"
person2.sayHello(); // logs "Hello, I'm Bob"

