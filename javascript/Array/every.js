/**
 * every():Determining if All array Element is passed a test.
 */

let Numbers = [1, 2, 0, 4, 5, 6, 7, 8, 9];
let result = true;



//usning for loop
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] <= 0) {
        result = false;
        break;
    }
}

console.log('result:', result)




//using every Method
result = Numbers.every(e => {
    return e > 0;
});

console.log('result:', result);


let numbers = [12, 34, 56, 98, 34, 56, 23, 78, 35, 90, 108, 59,]

let range = {
    min: 0,
    max: 100
}

let inRange1 = numbers.every(e => {
    return e >= range.min && e <= range.max;
});

let msg = inRange1 ? 'With in Range' : 'Out of Range';

console.log('msg:', msg)

//not woking
let inRange2 = numbers.every(e => {
    return (e >= range.min && e <= range.max) ? 'With in Range' : 'Out of Range';
});
console.log('inRange:', inRange2)


//Pass Cond.. Argument..
let inRange3 = numbers.every(e => {
    return e >= this.min && e <= this.max;
}, range);

let msg3 = inRange3 ? 'With in Range' : 'Out of Range';

console.log('msg:', msg)



//Example 1 (Datatype Checking)

function dCheck(arr, dType) {

    return arr.every(e => {
        return typeof (e) === dType;
    }, dType);

}

console.log('String Checking:', dCheck([2, 'dev', 'arr', 'js', '2'], 'string'))

//console.log('Number Checking:', dCheck([2, 4, 5, 6, 7], 'number'))

//console.log('Bool Checking:', dCheck([false, true, 0, 1, 5], 'boolean'))
