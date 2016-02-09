
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
    this.baseURL =  "https://api.clarizen.com/v2.0/services/"
};

Clarizen.prototype.Request = function (url,callback)
{
    var callBackNameNo = "cb" + Clarizen.Request.counter++;
    var callBackName = "Clarizen.Request" + callBackNameNo;
    
    if(url.IndexOf("?") === -1)
    {
        url += "?jsonp=" + callBackName;
    }
    else
    {
        url += "&jsonp=" + callBackName;
    }
    
    var script = document.createElement("script");
    script.body
    
    Clarizen.Request[callBackNameNo] = function(response)
    {
        try
        {
            callback(response);
        }
        finally
        {
            delete Clarizen.Request[callBackNameNo];
            script.parentNode.removeChild(script);
        }
        
    };
    
    script.src = url;
    document.bodu.appendChild(script)
    
}
Clarizen.prototype.Login = function() {
    
    var obj = new ClarizenObject();
    var user = obj.factory({
        type: "web.service",
        password: "Rainbow123@"    
    });
       
    var jsonUser = JSON.stringify(user); 
    
};  


var Person = function (firstName) {
  this.firstName = firstName;
  this.secondname = [];
};

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};


var p = new Person("Bum");
