
var ClarizenForm = function()
{
    var obj = new ClarizenObject(),
        user = obj.factory({
            type: 'User',
            userName: "garfbradaz",
            password: "Bumhead36@"
        });
        
    this.clarizen = new Clarizen(user.userName, user.password, "clarizen.js", null, "https://api.clarizentb.com/v2.0/services");
    
};

ClarizenForm.prototype.setHtml = function(params) {   
      var self = this;
      params.htmlAddPickList("C_EnhancementRequestHodderEducationService");
      params.htmlAddPickList("C_EnhancementRequestHodderEducationQueryType");
};
ClarizenForm.prototype.main = function() {
    var self = this;
    self.clarizen.subscribe(this.setHtml,"loggedIn");   
    self.clarizen.login();
};

function app()
{
    var form = new ClarizenForm();
    form.main();
};

    
    

