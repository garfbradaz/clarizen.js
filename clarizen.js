
const ClarizenConstants = {};
ClarizenConstants.Urls = {};
ClarizenConstants.Urls = {
    getServerDefinition: "https://api.clarizen.com/v2.0/services/authentication/getServerDefinition"
};

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
    this.constants = ClarizenConstants.Urls;
};

Clarizen.prototype.Login = function() {
    var xmlHttp = new XMLHttpRequest();
    var obj = new ClarizenO();
    var user = obj.factory({
        type: "User",
        password: "909898fdzf"    
    });
        
    
};  


var Person = function (firstName) {
  this.firstName = firstName;
  this.secondname = [];
};

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};


var p = new Person("Bum");
