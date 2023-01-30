
// //Class on a js file
// class Emp {

//     //Intializing an object
//     constructor(i, n) {
//         this.id = i;
//         this.name = n;
//     }
//     //methods
//     details() {
//         document.getElementById('i1').innerText = this.id;
//         document.getElementById('n1').innerText = this.name;
//     }
// }

// let obj1 = new Emp(10, 'Dev');
// //let obj2 = new Emp(11, 'arnab');

// obj1.details();
// //obj2.details();


// let student = class {
//     constructor(i, n) {
//         this.id = i;
//         this.name = n;
//     }
//     //methods
//     details() {
//         console.log(`${this.id}  ${this.name}`)
//     }
// }

// let stu1 = new student(123, 'raju');
// let stu2 = new student();

// stu1.details();
// stu2.details()


// function Computer(id, name, cost) {
//     this.id = id;
//     this.name = name;
//     this.cost = cost;

// };

// Computer.prototype.details = function () {
//     console.log(`Name:${this.name}  Cost:${this.cost}`);
// }

// Computer.prototype.info = function () {
//     console.log(`Name:${this.id}  Cost:${this.name}`);
// }


// // class Computer {
// //     constructor(id, name, cost) {
// //         this.id = id;
// //         this.name = name;
// //         this.cost = cost;
// //     }
// //     details() {
// //         console.log(`Name:${this.name}  Cost:${this.cost}`);
// //     }
// // };

// let hp = new Computer(1, 'OMEN', 1230000)
// let acer = new Computer(2, 'ROG', 1250000)

// hp.details()
// acer.details()



// function akash(i, n) {
//     let a = i;
//     let b = n;

//     return `${a}  ${b}`;
// }

// function akash1(i, n) {
//     this.id = i;
//     this.name = n;
//     return `${this.id}  ${this.name}`;

// }


class car {
    constructor(name) {
        this.name = name;
    }
}

class car2 {
    constructor(brand) {
        this.name = brand
    }
    get cname() {
        return this.name;
    }
    set cname(x) {
        this.name = x
    }
}

let mycar = new car2('ford');
console.log(mycar.cname)


let student = class {
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }

    get sname() {
        return this.name;
    }
    set sname(x) {
        this.name = x
    }
    //methods
    details() {
        console.log(`${this.id}  ${this.name}`)
    }
}

let stu1 = new student(123, 'raju');//RAJU

stu1.name = 'RAJU'

stu1.details();






