/**
 * forEach()
 */

let frontend = ['REACT', 'ANGULAR', 'VUE', 'SAVLET', 'NEXT', 'NUXT']

//using for loop;
let output = '';

for (let i = 0; i < frontend.length; i++) {
    console.log("Elemenets:", frontend[i]);
    output += `<li>${frontend[i]}</li>`
}
document.body.innerHTML = output;



//using forEach Method
let op = '';
frontend.forEach(e => {
    return op += `<li>${e}</li>`;
});

document.body.innerHTML = op;




//forEach() and Callback Function
frontend.forEach(Fun);

function Fun(item) {
    console.log(item)
}

//Arr Parameter(target the current Array)

let Costs = [100.34, 167.89, 234.67]

Costs.forEach(dollerAddition);

function dollerAddition(element, index, arr) {

    arr[index] = '$' + element;
}

console.log(Costs);




