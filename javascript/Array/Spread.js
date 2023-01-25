/**
 * spread is a operator(...) allows us to copy or a part of an array or object,string into another array
 */

const sum = (x, y, z) => {
    return x + y + z;
}
const num = [1, 4, 3, 2]
console.log(sum(...num));


function fun(v, w, x, y, z) {
    return v + w + x + y + z;
}

const x = [0, 1];
const y = [3];

console.log("With Spread:", fun(-1, ...x, 2, ...y))

console.log("Without Spread:", fun(-1, ...[0, 1], 2, ...[3]))

console.log(...x)
console.log(...[3])


const dateFields = [1970, 0, 1]; //1 jan 1970

const d = new Date(...dateFields);

console.log('d:', d)

const a = [[1], [2], [3]];
const b = [...a]

console.log('b:', b)


let n1 = [1, 2, 3, 4, 5];
let n2 = [6, 7, 8, 9, 10];

// let n3 = n1.concat(n2)
// console.log('n3:', n3)

let n3 = [...n1, ...n2];
console.log('n3:', n3)