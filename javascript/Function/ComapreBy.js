
//Return Function for another Function

function CompareBy(propsName) {
    return function (a, b) {
        let x = a[propsName];
        let y = b[propsName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    }
}


let Products = [
    { name: 'iPhone', price: 900 },
    { name: 'sumSung', price: 850 },
    { name: 'sony', price: 1750 },
]

//console.table(Products);

console.info("Products sorted by Name");

Products.sort(CompareBy('name'))

console.table(Products);

//console.info("Products sorted by Price");

//Products.sort(CompareBy('price'))

//console.table(Products); 