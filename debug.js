function run_debug() {


    var client = new Clarizen("n", "h");
    client.Login();
    console.log("wank: " + client.constants.wank);
    client.constants.wank = "jizzed";


    var p = new Person("Gareth");
    p.sayHello();


    var co = ClarizenObject();
    var user = co.bum({
        type: 'User',
        password: "909898fdzf"    
    });
    console.log("Username " + user.userName + " Pwd " + user.password);
};