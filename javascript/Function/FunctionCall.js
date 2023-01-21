
//! Function call 1
function Emp(id, name) {
    this.id = id;
    this.name = name;

}

function Employees(empid, empname) {
    Emp.call(this, empid, empname)
}

let Emp1 = new Employees(123, "Debasish")
let Emp2 = new Employees(124, "Arnab")
let Emp3 = new Employees(125, "Anand")

console.log('Emp1:', Emp1)
console.log('Emp2:', Emp2)
console.log('Emp3:', Emp3)


//!Function Call 2
function add(x, y) {
    return x + y;
}

let Result = add(2, 3);
console.log('Result:', Result)

//! Function call 3
let result;

let Student = {
    details: function () {
        result = `The First name is ${this.firstName} and the Last Name is  ${this.lastName} `;
        return result;
    }
}

let Student1 = {
    firstName: "Debasish",
    lastName: "Sahoo"
}

let Student2 = {
    firstName: "Arnab",
    lastName: "Ghosh"
}

let Student3 = {
    firstName: "Anand",
    lastName: "Sharma"
}


let x = Student.details.call(Student1)
console.log(x)

let y = Student.details.call(Student2)
console.log(y)

let z = Student.details.call(Student3)
console.log(z)


let StudentWithAddress = {
    details: function (City, Country) {
        result = `The First name is ${this.firstName} and the Last Name is ${this.lastName} ,the City is ${City} and Country is ${Country}`;
        return result;
    }
}

x = StudentWithAddress.details.call(Student1, 'Kolkata', 'India')
console.log('x:', x)

y = StudentWithAddress.details.call(Student2, 'Durgapur', 'India')
console.log('y:', y)

z = StudentWithAddress.details.call(Student3, 'Patna', 'India')
console.log('z:', z)