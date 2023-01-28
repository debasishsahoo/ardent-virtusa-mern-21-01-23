//! Global Scope: it can acess from anyware in the program.
//! Local Scope : it can acess from function inside.
//! Block Scope : it can acess from block inside


//Global Scope

let a = 23; //Global Access or any one cn access from any ware

function update() {
    console.log(a)
    a = 33;
}

//before function call
console.log(a)

update();

//after function call
console.log(a)




//local Scope
function add() {
    let b = 40;
    console.log(a + b);
}

//console.log(a + b);

add()

//console.log(a + b);

//Block scope


//Global Variable
let x = 'Hi'

function abc() {
    //local Variable
    let y = 'debasish';

    console.log(x + ' ' + y);

    if (y == 'debasish') {
        let z = 'Sahoo'
        console.log(`${x}  ${y}  ${z}`)
    } else if (y == 'dev') {

        let c = 'paul'
        console.log(`${x}  ${y}  ${c}`)
    } else {

        console.log(`${x}  ${y}`)
    }



    console.log(`${x}  ${y}  ${z}`)



}

abc()