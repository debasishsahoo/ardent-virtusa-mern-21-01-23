import React from 'react'

class NotBuggy extends React.Component {
    state = { greeting: "Hi," };
    render() {
        return <h2>{this.state.greeting}</h2>
    }
}

export default NotBuggy;