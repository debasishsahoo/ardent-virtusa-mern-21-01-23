let cities = [
    { name: 'Delhi', population: 3792621 },
    { name: 'Kolkata', population: 8175133 },
    { name: 'Mumbai', population: 2695598 },
    { name: 'Bengaluru', population: 2099451 },
    { name: 'Hyderabad', population: 1526006 },
    { name: 'Chenni', population: 2894498 }
]

//Using For Loop

let bigcities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigcities.push(cities[i]);
    }
}
console.table(bigcities);



//using filter
bigcities = cities.filter(city => city.population > 30000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ' => ' + city.population))





//console.table(bigcities);

const results = [
    { id: 001, percentage: 92.7 },
    { id: 002, percentage: 87.9 },
    { id: 003, percentage: 82.7 },
    { id: 004, percentage: 62.7 },
    { id: 005, percentage: 91.7 },
    { id: 006, percentage: 59.7 },
    { id: 007, percentage: 63.7 }
]

//>80.0

function resultFilter(student) {
    return student.filter(e => e.percentage > 80.0)
}

console.log(resultFilter(results))


let Data = [1, 2, undefined, 4, undefined, undefined, 7, 8, 9]
console.log('Data before filter:', Data)

function RemoveUndefined(arr) {
    return arr.filter((e) => { return e });
}


console.log('Data after filter:', RemoveUndefined(Data))


Data = [1, 2, 0, 4, 0, 0, 7, 8, 9]

const isNonZero = (element) => {
    return +element !== 0;
}