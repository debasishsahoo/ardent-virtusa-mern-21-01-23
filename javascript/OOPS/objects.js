//create an object
const person = {
    name: 'dev',
    id: 1,
    marks: {
        PHY: 67,
        CHEM: 85,
        MATH: 100,
        BIO: 97
    },
    details: function () {
        return `${this.name}   ${person.id}`
    },
    info: () => {
        return `${person.marks.PHY}`
    }
}

console.log(person.details())
console.log(person.info())



//object constructor
function Student(i, n) {
    this.id = i;
    this.name = n;
}


//interprite in browser Engine
// class Student {
//     constructor(i, n) {
//         this.id = i
//         this.name = n
//     }
// }

let Student1 = new Student(1, 'dev')
let Student2 = new Student(2, 'raj')

console.log(Student1.id)
console.log(Student2.name)


//Object.create()
const dev = {
    study: false,
    details: function () {
        return `Hi this is ${this.name},i am Studying?:${this.study}`
    }
}


const obj = Object.create(dev)

obj.name = 'debasish';
obj.study = true;

console.log('details:', obj.details())

