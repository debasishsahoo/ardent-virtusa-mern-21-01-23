import React from 'react'

class Buggy extends React.Component {
    state = { greeting: "Hi," };

    componentDidMount() {
        throw new Error('Error Occured: Buggy Component');
    }
    render() {
        return <h2>{this.state.greeting}</h2>
    }
}

export default Buggy;