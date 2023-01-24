const Student = {
    name: "Debasish",
    class: 12,
    age: 17
}

//Use for...in loop

for (let key in Student) {
    console.log(`${key}: ${Student[key]}`)
}

//Update Value with For ...in loop
const Costs = {
    'iphone': 99,
    'Samsung': 79,
    'Sony': 89,
}

for (let i in Costs) {
    let Price = "$" + Costs[i];
    console.log(`${i}:${Price}`)
}

//Woking with Array
const arr = [34, 35, 36, 37, 38];

for (let i in arr) {
    console.log(arr[i])
}

//Woking with String

const Company = 'VIRTUSA';

for (let i in Company) {
    console.log(Company[i])
}
