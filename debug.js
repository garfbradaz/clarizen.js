function run_debug() {

    var p = new Person("Gareth");
    p.sayHello();


    var cooo = new ClarizenO();
    var user = cooo.factory({
        type: "User",
        password: "909898fdzf"    
    });
    console.log("Username " + user.userName + " Pwd " + user.password);
};