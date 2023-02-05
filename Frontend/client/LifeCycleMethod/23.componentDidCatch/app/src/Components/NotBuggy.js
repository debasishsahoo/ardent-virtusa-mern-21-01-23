import React from 'react';
class NotBuggy extends React.Component {
    state = { greeting: "Welcome" };
    render() {
        return <h2>{this.state.greeting}</h2>;
    }
}
export default NotBuggy;