//IIFE => immediately Invoked Function Expreession


(function () { console.log('IIFE') })();

//! ES5 
function add(a, b) {
    return a + b;
}
console.log(add(2, 3))

//! ES6

let sum = (function (a, b) { return a + b })(2, 3);
console.log(sum)