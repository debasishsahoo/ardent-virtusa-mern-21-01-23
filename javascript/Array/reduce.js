let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += number[i];
}

console.log(sum);

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//sum = number.reduce((accumlator, current) => { return accumlator + current })

sum = number.reduce(cal)

function cal(accumlator, current) {
    return accumlator + current
}






console.log(sum);


let ShoppingCart = [
    { product: 'iphone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 9.98 },
    { product: 'memeory Card', qty: 2, price: 20.90 },
]

// let total = ShoppingCart.reduce((acc, cur) => {
//     return acc + cur.qty * cur.price;
// }, 0)


let total = ShoppingCart.reduce(TotalCal)

//for Debug

function TotalCal(acc, cur) {
    return acc + cur.qty * cur.price;
}

console.log('total:', total)

//if use reduce()  ---------------Movment------------------>
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//if use reduceRight()  <---------------Movment------------------


sum = number.reduceRight((acc, cur) => {
    console.log('acc', acc, 'cur', cur);
    return acc + cur;
});

console.log(sum)

