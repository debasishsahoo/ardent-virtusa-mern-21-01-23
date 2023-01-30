class Computer {
    constructor(id, name) {
        //Properties
        this.id = id;
        this.name = name;
    }

    add_cost(cost) {
        this.cost = cost;
    }

    //Methods
    details() {
        console.log(`id:${this.id} Name:${this.name} Cost:${this.cost}`);
    }

};


//Assign the Value using Constructor
let hp = new Computer(1, 'OMEN')
let acer = new Computer(2, 'ROG')

//Assign the Value using Method
hp.add_cost(1230000);
acer.add_cost(1250000);

hp.details()
acer.details()