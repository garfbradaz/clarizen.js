function ClarizenUser (options) {
    this.userName = options.userName || 'defaultUN';
    this.password = options.password || 'defaultPW'; 
}

function ClarizenObject () {
    console.log("ClarizenObject Defined");
}

ClarizenObject.prototype.factory = function bum(options) {
    console.log("p method");
    var newObj = null;
    
    if(options.type === 'User')
    {
        newObj = ClarizenUser;
    }
    
    if(newObj === null)
    {
        return false;
    }
    
    return newObj(options);
};

var f = new ClarizenObject();
var user = f.bum({
        type: 'User',
        password: "909898fdzf"    
    });
    
console.log("debug 111 " + user.userName);
