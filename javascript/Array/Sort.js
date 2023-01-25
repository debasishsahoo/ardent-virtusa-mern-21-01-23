let numbers2 = [12, 23, 43, 44, 25, 16, 77, 28, 19, 10, 11];
numbers2.sort();
console.log('numbers2:', numbers2)

numbers2 = [12, 23, 43, 44, 25, 16, 77, 28, 19, 10, 11];
//Ascending Order
numbers2.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log('numbers2:', numbers2)

let animal = ['cat', 'Dog', 'elephant', 'bee', 'ant', 'dog'];
animal.sort();
console.log('animal:', animal);

//Descending Order
animal.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
console.log('animal:', animal);


numbers2 = [12, 23, 43, 44, 25, 16, 77, 28, 19, 10, 11];

numbers2.sort((a, b) => a - b);
console.log('numbers2:', numbers2)

numbers2.sort((a, b) => b - a);
console.log('numbers2:', numbers2)



let employees = [
    { name: 'Azim', salary: 760000, hireDate: "July 1,2023" },
    { name: 'anjani', salary: 750000, hireDate: "2023,August 15," },
    { name: 'Avjit', salary: 780000, hireDate: "December 12,2023" },
    { name: 'rumana', salary: 780000, hireDate: "June 07,2023" },
    { name: 'Jit', salary: 780000, hireDate: "July 12,2023" },
    { name: 'Jit', salary: 790000, hireDate: "July 10,2023" },
]

//Sorting Objects by the Number Property
employees.sort((x, y) => { return x.salary - y.salary })
console.table(employees)

//Sorting Objects by the String Property
employees.sort((x, y) => {
    let a = x.name.toUpperCase(), b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1
})
console.table(employees)

//Sorting Objects by the Date Property
employees.sort((x, y) => {

    let a = new Date(x.hireDate), b = new Date(y.hireDate);
    return a - b;
})
console.table(employees)

