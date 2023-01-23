function getfullName(fn, ln, callback) {
    setTimeout(() => {
        let name = fn + ln;
        callback(name)
    }, 1000);

    //return fn + ln
}

function getHobby(x, callback) {
    setTimeout(() => {
        let hobby;
        if (x === 'devpal') {
            hobby = 'coding';
        } else if (x === 'arunroy') {
            hobby = 'Gaming';
        } else {
            hobby = 'Play'
        }
        callback(hobby)
    }, 2000);
}

function getHobbyDetails(x, callback) {
    let details;
    setTimeout(() => {
        if (x === 'coding') {
            details = 'coding is good';
        } else if (x === 'Gaming') {
            details = 'Gaming is fun';
        } else {
            details = 'playing is best';
        }
        callback(details)
    }, 3000);

}


let nm = getfullName('dev', 'pal',(nm) => {
    console.log('Name:', nm);
    getHobby(nm, (hobby) => {
        console.log('Hobby:', hobby);
        getHobbyDetails(hobby, (deatils) => {
            console.log('Details:', deatils)
        })
    })
})