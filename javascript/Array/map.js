/**
 * Array.Prototype.map()
 * Syntax:array.map(callback(element,index,arr),thisValue)
 * 
 * This function is to modify each element of the array according to the    * callback function
 */


let circles = [10, 20, 30];
let areas = [];
let area = 0;
let pi = Math.PI;


//using loop
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(pi * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);





//using Map
areas = [];//Remove Old Values
function CalculationOfArea(r) {
    return Math.floor(pi * r * r);
}

areas = circles.map(CalculationOfArea);
console.log('areas:', areas)



//With Optimaztion
areas = [];//Remove Old Values
areas = circles.map(r => Math.floor(pi * r * r));
console.log('areas:', areas)

//example

let numbers = [16, 25, 36, 49, 64, 81, 100]


//numbers.map(e=>{return Math.sqrt(e)})) do not use this expression

console.log("Sqrt of the Number:", numbers.map(Math.sqrt))



// >=75.0 =>then out put like  { id: 001, percentage: 92.7,stands:Yes },
const results = [
    { id: 001, percentage: 92.7 },
    { id: 002, percentage: 87.9 },
    { id: 003, percentage: 82.7 },
    { id: 004, percentage: 62.7 },
    { id: 005, percentage: 91.7 },
    { id: 006, percentage: 59.7 },
    { id: 007, percentage: 63.7 }
]

function AddStands(results) {
    return results.map(e => {
        e.stands = (e.percentage >= 75.0) ? 'Yes' : 'NO';
        return e;
    });
}

console.log(AddStands(results))




//Crerate a map;

const map1 = new Map();

console.log(map1)


// map() : => it is an Method for Array 

// Map() :=> is a Constructor  and it is allow us to store Key/Value Pair
