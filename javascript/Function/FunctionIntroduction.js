
function FunctionaName(parameter) {
    //...Function Body/Logic
}



function tech(x, y) {//keyword name parameter {logic}
    return x + y;
}

let result = tech(7, 4)//function call
console.log('result:', result)



//Function As First Class Citizens
let gretting1 = ShowMe();//This Function Call
console.log('gretting1:', gretting1)

function ShowMe() {
    return "Hi i am Function Hoisting"
}

let gretting2 = ShowMe();
console.log('gretting2:', gretting2)


//Call function form another Function
function Avg(x, y, fn) {
    return fn(x, y) / 2;
}

function Sum(x, y) {
    return x + y;
}

function xyz(a, b) {
    return ((a * 10) + (b * 10));

}

let avgResult1 = Avg(6, 9, Sum);

console.log('avgResult:', avgResult1)

let avgResult2 = Avg(6, 9, xyz);

console.log('avgResult:', avgResult2)






















