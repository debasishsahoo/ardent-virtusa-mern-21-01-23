// const sum = (a, b) => {
//     return a + b;

// }

console.log(sum(1, 2, 3, 4, 5, 6, 7))

console.log(sum(1, 2, 3))

console.log(sum(1, 2, 3, 4, 5))

//need to provide at least one formal argument 
console.log(sum())

function sum(...input) {
    let x = 0;

    for (let i of input) {
        x += i;
    }
    return x;
}


function sum(a, ...input, b) {
    return x;
}

function sum(...input, b) {
    return x;
}

function sum(a, b, ...input) {
    return x;
}