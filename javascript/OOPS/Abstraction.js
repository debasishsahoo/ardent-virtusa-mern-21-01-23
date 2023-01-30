function Computer(n, c) {
    let name = n;
    let cost = c;
    let details_noAccess = () => {
        return (`Name:${name}  Cost:${cost}`);
    }
    this.details_Access = () => {
        return (`Name:${name}  Cost:${cost}`);
    }

};



class Computer1 {
    constructor(n, c) {
        //local scope to constructor
        let name = n;
        let cost = c;

        let details_noAccess = () => {
            return (`Name:${name}  Cost:${cost}`);
        };
        this.details_Access = () => {
            return (`Name:${name}  Cost:${cost}`);
        };

    }
};

let hp = new Computer('OMEN', 3124312);

console.log(hp.name);

console.log(hp.details_noAccess());

console.log(hp.details_Access());



