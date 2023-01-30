// //! "use strict":Define that js code should be excuted in 'strict mode'

// "use strict"
// let pi = 3.14;
// console.log('pi:', pi)


// //in javascript
// //Boolean (only if we use new keyword)
// //Number  (only if we use new keyword)
// //String  (only if we use new keyword)
// //Date
// //Math
// //Regular Expression
// //Array
// //Function
// //Object

// let a = new Number();
// let b = new String();
// let c = new Boolean();

// let d = new Date();

// //Object are by default Mutable :they are addressed by reference,not by value
// const obj = new Object();

// obj.name = 'devas';
// obj.id = 123;

// const x = obj
// x.id = 12;

// console.log(obj)
// console.log(x)


class abc {
    name = 'dev';
    id = 12;
}

let obj1 = new abc();

let obj2 = Object();
obj2.name = 'dev'
obj2.id = 12

const x = obj1;
x.id = 12
console.log('x:', x)
console.log('obj1:', obj1)




const y = obj2;
y.id = 12
console.log('y:', y)
console.log('obj2:', obj2)
