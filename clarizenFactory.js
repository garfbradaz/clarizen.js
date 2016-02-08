function ClarizenUser (options) {
    this.userName = options.userName || 'defaultUN';
    this.password = options.password || 'defaultPW'; 
}

function ClarizenO () {
    console.log("ClarizenObject Defined");
}

ClarizenO.prototype.factory = function(options) {
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
    
    return new newObj(options);
}


