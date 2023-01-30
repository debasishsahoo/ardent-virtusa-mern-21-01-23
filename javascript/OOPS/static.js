class car {

    constructor(name) {
        this.name = name;
    }
    static Details() {
        return 'Detilas'
    }
}

let mycar = new car('FORD');

console.log(mycar.Details());