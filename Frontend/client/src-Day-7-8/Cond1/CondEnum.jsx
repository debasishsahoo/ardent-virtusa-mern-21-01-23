import React from 'react';

function SignUp() {
    return <h1>Signup</h1>
}
function SignIn() {
    return <h1>SignIn</h1>
}
function SignOut() {
    return <h1>SignOut</h1>
}

function CondEnum(props) {
    const STATES = {
        login: <SignIn />,
        registration: <SignUp />,
        logout: <SignOut />
    }
    return (
        <div>
            <h1>Conditinal Rendiraing Enum</h1>
            {STATES[props.state]}
        </div>
    );
}

export default CondEnum;