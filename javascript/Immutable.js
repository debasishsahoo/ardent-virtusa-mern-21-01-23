//IMMUTABLE OBJECTS CAN NOT BE MODIFIED

const user = {
    firstname: 'DEBASISH',
    lastname: 'sahoo'
}

console.log(user);

const lowerCaseUserData = (user) => {
    const firstname = user.firstname.toLowerCase();
    const lastname = user.lastname.toLowerCase();
    return {
        firstname, lastname

    }
}

const lwrcase = lowerCaseUserData(user);

console.log(lwrcase);

console.log(user);