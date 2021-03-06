const Employee = require("./employee");


class Engineer extends Employee{
    
    constructor(name, id, email) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;