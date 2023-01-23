function getfullName(fn, ln) {
    setTimeout(() => {
        return fn + ln
    }, 1000);

    //return fn + ln
}

function getHobby(x) {
    if (x === 'devpal') {
        console.log('coding');
        return 'coding';
    } else if (x === 'arunroy') {
        console.log('Gaming');
        return 'Gaming';
    } else {
        console.log('Play');
        return 'Play'
    }
}

function getHobbyDetails(x) {
    if (x === 'coding') {
        console.log('coding is good');
    } else if (x === 'Gaming') {
        console.log('Gaming is fun');
    } else {
        console.log('playing is best');
    }
}

const a1 = getfullName('dev', 'pal')

const a2 = getHobby(a1)

getHobbyDetails(a2)

getHobbyDetails(getHobby(getfullName('arun', 'roy')))



let nm=getfullName('dev', 'pal')
