import React, { Component } from "react";

function Msg(props) {
    return (props.isLoggedIn ? <h1>Welcome Back!!</h1> : <h1>Login First</h1>)
}

function Login(props) {
    return (<button onClick={props.onClick}>Login</button>)
}

function Logout(props) {
    return (<button onClick={props.onClick}>Logout</button>)
}

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = { isLoggedIn: false }
    }
    handleLogin() {
        this.setState({ isLoggedIn: true })
    }
    handleLogout() {
        this.setState({ isLoggedIn: false })
    }

    render() {

        const isloggedin = this.state.isLoggedIn;
        let button;
        if (isloggedin) {
            button = <Logout onClick={this.handleLogout} />
        } else {
            button = <Login onClick={this.handleLogin} />
        }

        return (
            <div>
                <h1>StateFull Component</h1>
                <Msg isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default Auth