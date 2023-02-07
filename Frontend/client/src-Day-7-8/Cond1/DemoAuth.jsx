import React from 'react';

function LoggedInUser(props) {
    return (
        <React.Fragment>
            <h2>WelCome Back!</h2>
            <button>Logout</button>
        </React.Fragment>
    )
}

function LoggedOutUser(props) {
    return (
        <React.Fragment>
            <h2>Sign in!Please</h2>
            <button>Login</button>
        </React.Fragment>
    )
}



function DemoAuth(props) {
    const isloggedin = props.isloggedin

    if (isloggedin) {
        return (
            <LoggedInUser />
        );
    }
    return (
        <LoggedOutUser />
    );
}



export default DemoAuth;