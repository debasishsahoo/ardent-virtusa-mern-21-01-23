import React from 'react';

function Hi() {
    return <h2>Hi,</h2>
}

function Hello() {
    return <h2>Hello,</h2>
}



function If_Statement(props) {
    const isGreeting = props.isGreeting;

    if (isGreeting) {
        return <Hello />
    }
    return <Hi />
}

export default If_Statement;