import React from 'react';

class Buggy extends React.Component {
    state = { greeting: "Welcome" };
    componentDidMount() {
        throw new Error("An error has occured in Buggy component!");
    }
    render() {
        return <h2>{this.state.greeting}</h2>;
    }
}
export default Buggy;