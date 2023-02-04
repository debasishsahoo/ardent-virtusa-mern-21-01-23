//MUTABLE OBJECTS CAN BE MODIFIED

const user = {
    firstname: 'DEBASISH',
    lastname: 'sahoo'
}

console.log(user);

const lowerCaseUserData = (user) => {
    user.firstname = user.firstname.toLowerCase();
    user.lastname = user.lastname.toLowerCase();
}

lowerCaseUserData(user);

console.log(user);


let person = {
    fn: 'debasish',
    ln: 'sahoo',
    address: {
        street: 'Abc street',
        city: 'kolkata',
        state: 'WB'
    }
}

const job = (x) => {
    x.job = 'Coding';
    return x

}


console.log(person)

let sameperson = job(person)



console.log(person)

console.log(sameperson)


//! push, pop, shift, unshift mutable
//! map,reduce,filter immutable
