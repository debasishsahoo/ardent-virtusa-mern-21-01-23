import React from 'react'


class Demo extends React.Component {
    constructor() {
        console.warn(' From Demo constructor:')
        super();
        this.state = { acive: null, who: null };
    }
    componentDidUpdate() {
        console.warn('From Demo componentDidUpdate:')
        if (this.state.who == null) {
            this.setState({ who: 'Debasish' })
        }
    }
    render() {
        console.warn('From Demo render:')
        return (
            <div>
                <h1>From Demo{this.state.who} </h1>
                <button onClick={() => { this.setState({ acive: 'Yes' }) }}>Activate</button>
            </div>
        );
    }
}

export default Demo;
